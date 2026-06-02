---
name: update-ai-ecosystem
description: >-
  Refresh the "State of the Union" AI ecosystem graph with the latest AI model and
  tool versions — LLMs, image/video models, AI IDEs, CLI agents, terminals, and
  assistants. Use when asked to update or refresh the ecosystem / "state of the
  union", bump model versions, add or remove a model or tool, or correct provider
  details. Edits src/data/ai-graph.ts (and src/utils/node-icons.ts for icons) while
  keeping the radial layout, category edges, brand icons, and NEW badges consistent.
---

# Update the AI Ecosystem Graph

This repo renders the AI ecosystem as an interactive radial graph. All graph content
lives in **one source of truth**: `src/data/ai-graph.ts` (`initialNodes` + `initialEdges`).
Your job in this skill is to keep that data current — refresh model/tool versions,
variants, release info, and descriptions — without breaking the layout or edges.

> Read `AGENTS.md` (Graph Layout Rules) before moving nodes. This skill restates and
> extends those rules with the exact math used in the data.

## Files you touch

| File | Role | Edit it when |
| --- | --- | --- |
| `src/data/ai-graph.ts` | Nodes + edges (source of truth) | Almost always |
| `src/utils/node-icons.ts` | `provider → icon` fallback map | A new provider appears, or an icon is wrong |

Read-only context (don't edit unless the schema itself must change):
`src/components/AIGraph.tsx` (node rendering, `isNew` localStorage diff),
`src/components/Sidebar.tsx` (detail panel: description, provider, releaseDate, specs, variants, link).

## Workflow

### 1. Anchor the date
The data carries inline month stamps inside `description`/`defaultNotes`
(e.g. "GPT-5.5 (Apr 2026)", "v2.1, May 2026"). There is **no** global "as of" label —
these inline stamps are the only dates. Note today's date and the month you're refreshing to.

### 2. Build the inventory from the file (don't trust memory)
Read `src/data/ai-graph.ts` and list every leaf node grouped by category, capturing for
each: `id`, `label`, `provider`, `link`, and current `variants`. This is your worklist.
Categories are: `llm`, `image`, `video`, `ai-ide`, `cli-agent`, `ai-terminal`, `assistant`
(plus `root` and the `category-*` hub nodes, which you don't refresh for "versions").

### 3. Research the latest versions
For each node, web-search the provider's **official** source for the current release as of
today. The `link` field already points at the canonical docs/changelog — start there, then
the provider blog/release notes. Capture: newest version/label, current variant lineup with
**real API model IDs**, release month, and any headline capability change.

Accuracy over hype: only record versions you can confirm from a primary source. Do not
invent version numbers, dates, or model IDs. If a provider hasn't shipped anything new,
leave that node unchanged.

### 4. Apply edits to each node
Update the relevant `AINodeData` fields, matching the existing terse, factual voice:
- **`label`** — display name (e.g. `'GPT-5.5'`, `'Claude 4.7 Opus'`). Keep it short.
- **`variants`** — `{ label, id }[]`. `label` is human-facing; `id` is the real API model
  ID (e.g. `claude-opus-4-7`, `gpt-5.5`, `veo-3.1-generate-001`). Order newest/flagship first.
- **`description`** — one or two sentences. Refresh the inline month stamp and any capability
  claim. Keep it concise — it renders in both the node card context and the sidebar.
- **`releaseDate`** — usually just the year string (e.g. `'2026'`).
- **`defaultNotes`** — optional longer note shown in the sidebar; update if present.
- **`link`** — official docs/changelog URL.
- Leave `position`, `targetHandle`, `sourceHandle`, `category`, `type` alone unless you're
  adding/removing/reordering nodes (see §7).

### 5. NEW-badge hygiene
Two layers drive the red **NEW** chip:
1. **Per-user auto-diff** (`AIGraph.tsx`): on load it compares each node's `label` against a
   `localStorage` snapshot and auto-flags any node whose **label changed or is new**. So a
   label change badges itself for returning users — you don't need to hand-set `isNew` for it.
2. **`isNew: true` in the data**: the baseline shown on a first visit / cleared cache, and the
   way to badge an update where the **label didn't change** (e.g. only `variants` or
   `description` changed).

Rules of thumb when refreshing:
- Set `isNew: true` on entries that genuinely got a new release this cycle (especially
  variant/description-only updates where the label is unchanged).
- **Remove** `isNew: true` from entries that are no longer this cycle's news, so the badge
  stays meaningful instead of accumulating.

### 6. Icons (only if a provider/tool is new or wrong)
`getNodeIcon` uses `node.icon` if set, else falls back to `providerIcons[provider]` in
`src/utils/node-icons.ts`. Two icon shapes:
- `{ type: 'simple', slug: '<simpleicons-slug>' }` → served from `cdn.simpleicons.org`.
  Verify the slug exists at simpleicons.org first (a missing slug renders the AppWindow
  fallback).
- `{ type: 'url', src: '<favicon-url>', monochrome?: true }` → a direct image/favicon URL.
  Use `monochrome: true` for single-color marks that need tinting.

For a brand-new provider, prefer adding one entry to `providerIcons` (so every node from that
provider inherits it). For a one-off, set `icon` directly on the node.

### 7. Adding or removing nodes (layout-critical)
The graph is two concentric rings centered on `root-ai` at `(0,0)`. **Angles are measured in
degrees clockwise from the top (12 o'clock).** Position formula:

```
x =  R * sin(θ°)
y = -R * cos(θ°)
```

Quick compute (prints `x y`):
```bash
node -e 'const R=1600,deg=17;const t=deg*Math.PI/180;console.log(Math.round(R*Math.sin(t)), Math.round(-R*Math.cos(t)))'
```

Rings & rules:
- **Ring 1 — category hubs**, `R ≈ 900`. Each `category-*` hub sits at the **average angle of
  its children**. (Reference angles in the file: LLMs 0°, Image 68°, Video 110.5°, AI IDEs
  161.5°, CLI Agents 229.5°, AI Terminals 289°, Assistants 306°.)
- **Ring 2 — leaf nodes**, `R ≈ 1600`, with crowded neighbors **staggered out to `R ≈ 1900`**.
  The data alternates `1600 ↔ 1900` between adjacent leaves so they can sit ~8–9° apart
  without the large cards overlapping. Nodes kept at the **same** radius must stay **≥ 17°
  apart** (the `AGENTS.md` rule). The `// θ°, r=…` comment on each node documents its slot.
- When you **add** a node: place it at the correct angle for its category arc, pick `1600` or
  `1900` to stagger against its neighbors, and **re-space the whole arc** if needed so nothing
  overlaps and spacing stays roughly uniform — don't just wedge it into a gap.
- When you **remove** a node: close the gap by re-spacing that category's remaining leaves.
- Set `targetHandle` (and `sourceHandle` if needed) to face the hub, following nearby nodes in
  the same category.

Every leaf needs exactly one **category edge** in `initialEdges`:
```ts
{ id: 'e-cat-<category>-<slug>', source: 'category-<…>', target: '<node-id>', style: { stroke: '<color>', strokeWidth: 2 } }
```
Category edge colors: `llm` `#17C964` · `image` `#7828C8` · `video` `#F5A524` ·
`ai-ide` `#006FEE` · `cli-agent` `#F31260` · `ai-terminal` `#06B6D4` · `assistant` `#EC4899`.
Optional contextual **cross-links** (e.g. a tool → the model it runs) use a dashed style:
`{ stroke: '#3b82f6', strokeWidth: 1, strokeDasharray: '5,5', opacity: 0.5 }`. When you add a
node, add its category edge; when you remove one, delete its category edge **and** any
cross-links that reference it.

### 8. Verify
Run both — they must pass with no errors:
```bash
npm run lint
npm run build
```
`build` runs `tsc -b` (catches bad `category` unions, malformed `variants`, etc.) then the Vite
build. Optionally `npm run dev` and eyeball the graph for overlaps / missing edges / broken icons.

Final checklist:
- [ ] `build` and `lint` pass.
- [ ] Every leaf node has exactly one `e-cat-*` edge; removed nodes left no dangling edges.
- [ ] All node `id`s and edge `id`s are unique; `variants[].id` are real API model IDs.
- [ ] No overlapping nodes (same-radius neighbors ≥17°, or staggered 1600/1900).
- [ ] `isNew` set on this cycle's genuine updates and cleared from stale ones.
- [ ] Inline month stamps in descriptions/notes reflect the refresh date.
- [ ] New providers have a working icon (valid simpleicons slug or reachable favicon URL).

## Schema reference (`AINodeData`)
`id` · `label` · `category` (`'ai-ide' | 'cli-agent' | 'ai-terminal' | 'assistant' | 'llm' | 'image' | 'video' | 'provider' | 'root'`)
· `icon?` · `description?` · `defaultNotes?` · `provider?` · `releaseDate?` · `specs?`
· `variants?: { label; id }[]` · `link?` · `targetHandle?` · `sourceHandle?` · `isDarker?` · `isNew?`.

React Flow `type` convention: hub nodes use their category name (`'llm'`, `'image'`, …);
LLM/image/video leaves use `'model'`; IDE/CLI/terminal/assistant leaves use `'tool'`; center is `'root'`.
(`isDarker` only picks a darker shade variant — it does not mean "deprecated".)

## Scope guardrails
- Keep changes surgical: edit the data (and icons map) only. Don't restyle components or
  refactor unrelated code.
- Don't commit unless explicitly asked — the user owns commits.
- Prefer leaving a node untouched over guessing; cite the primary source for each version bump
  in your summary so the user can spot-check.
