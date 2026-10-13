import assert from 'node:assert/strict';
import test from 'node:test';
import { initialNodes, initialEdges } from '../src/data/ai-graph.ts';

const nodesById = new Map(initialNodes.map(node => [node.id, node]));
const categoryNodes = initialNodes.filter(node => node.id.startsWith('category-'));
const leafNodes = initialNodes.filter(node => node.id !== 'root-ai' && !node.id.startsWith('category-'));

test('graph node and edge IDs are unique and node data keeps the same identity', () => {
  assert.equal(nodesById.size, initialNodes.length);
  assert.equal(new Set(initialEdges.map(edge => edge.id)).size, initialEdges.length);
  for (const node of initialNodes) assert.equal(node.data.id, node.id);
});

test('every edge references existing nodes', () => {
  for (const edge of initialEdges) {
    assert.ok(nodesById.has(edge.source), `${edge.id}: missing source ${edge.source}`);
    assert.ok(nodesById.has(edge.target), `${edge.id}: missing target ${edge.target}`);
  }
});

test('every leaf has one edge from its matching category and every category connects to AI', () => {
  for (const leaf of leafNodes) {
    const edges = initialEdges.filter(edge => edge.id.startsWith('e-cat-') && edge.target === leaf.id);
    assert.equal(edges.length, 1, leaf.id);
    const category = nodesById.get(edges[0].source);
    assert.ok(category?.id.startsWith('category-'), leaf.id);
    assert.equal(category.data.category, leaf.data.category, leaf.id);
  }
  for (const category of categoryNodes) {
    const edges = initialEdges.filter(edge => edge.source === 'root-ai' && edge.target === category.id);
    assert.equal(edges.length, 1, category.id);
  }
});

test('variant IDs are unique within each node and documentation links use HTTPS', () => {
  for (const leaf of leafNodes) {
    const variants = leaf.data.variants ?? [];
    assert.equal(new Set(variants.map(variant => variant.id)).size, variants.length, leaf.id);
    for (const variant of variants) {
      assert.ok(variant.id.trim() && variant.label.trim(), leaf.id);
    }
    assert.equal(new URL(leaf.data.link ?? '').protocol, 'https:', leaf.id);
  }
});

test('leaf cards on the same ring stay at least 17 degrees apart', () => {
  const polar = node => ({
    radius: Math.hypot(node.position.x, node.position.y),
    angle: Math.atan2(node.position.x, -node.position.y) * 180 / Math.PI,
  });
  for (let i = 0; i < leafNodes.length; i++) {
    for (let j = i + 1; j < leafNodes.length; j++) {
      const a = polar(leafNodes[i]);
      const b = polar(leafNodes[j]);
      if (Math.abs(a.radius - b.radius) < 2) {
        const difference = Math.abs(a.angle - b.angle);
        const separation = Math.min(difference, 360 - difference);
        assert.ok(separation >= 16.9, `${leafNodes[i].id} / ${leafNodes[j].id}: ${separation}°`);
      }
    }
  }
});

test('category hubs face the average angle of their children', () => {
  for (const category of categoryNodes) {
    const children = leafNodes.filter(leaf => leaf.data.category === category.data.category);
    const direction = children.reduce((sum, child) => {
      const radius = Math.hypot(child.position.x, child.position.y);
      return { x: sum.x + child.position.x / radius, y: sum.y + child.position.y / radius };
    }, { x: 0, y: 0 });
    const mean = Math.atan2(direction.x, -direction.y);
    const actual = Math.atan2(category.position.x, -category.position.y);
    assert.ok(Math.abs(mean - actual) < 0.001, category.id);
  }
});
