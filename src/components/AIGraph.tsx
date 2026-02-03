import React, { useCallback, useMemo } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  Handle,
  Position,
  type Node,
  type NodeProps,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { initialNodes, initialEdges, type AINodeData } from '../data/ai-graph';
import { Card, Chip } from "@heroui/react";

// --- Custom Node Component ---
const CustomAINode = ({ data, selected }: NodeProps<Node<AINodeData>>) => {
  const categoryColor = useMemo(() => {
    switch (data.category) {
      case 'tool': return 'primary';
      case 'llm': return 'success';
      case 'video': return 'warning';
      case 'image': return 'secondary';
      default: return 'default';
    }
  }, [data.category]);

  return (
    <div className="relative">
      <Handle type="target" position={Position.Left} className="!bg-default-400" />
      <Card
        className={`min-w-[150px] p-2 border-2 transition-transform ${selected ? 'border-primary scale-105' : 'border-transparent hover:border-default-300'}`}
        shadow="sm"
      >
        <div className="flex flex-col items-center justify-center gap-1">
          <Chip color={categoryColor} variant="flat" size="sm" className="uppercase text-[10px]">
            {data.category}
          </Chip>
          <div className="font-bold text-center text-sm">{data.label}</div>
          {data.provider && <div className="text-[10px] text-default-400">{data.provider}</div>}
        </div>
      </Card>
      <Handle type="source" position={Position.Right} className="!bg-default-400" />
    </div>
  );
};

// --- Main Graph Component ---
interface AIGraphProps {
  onNodeSelect: (node: AINodeData | null) => void;
}

const nodeTypes = {
  tool: CustomAINode,
  model: CustomAINode, // We can reuse or specialize
  llm: CustomAINode,   // just in case type matches category
  video: CustomAINode,
  image: CustomAINode,
};

export const AIGraph: React.FC<AIGraphProps> = ({ onNodeSelect }) => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  const onNodeClick = useCallback((_: React.MouseEvent, node: Node) => {
    onNodeSelect(node.data as AINodeData);
  }, [onNodeSelect]);

  const onPaneClick = useCallback(() => {
    onNodeSelect(null);
  }, [onNodeSelect]);

  return (
    <div className="w-full h-full bg-background">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        onPaneClick={onPaneClick}
        nodeTypes={nodeTypes}
        fitView
        attributionPosition="bottom-left"
        className="bg-background"
        colorMode="dark" // Force dark mode for cool AI look
      >
        <Controls />
        <MiniMap 
            nodeStrokeColor={(n) => {
                if (n.type === 'tool') return '#006FEE';
                if (n.data.category === 'llm') return '#17C964';
                if (n.data.category === 'video') return '#F5A524';
                return '#eee';
            }}
            nodeColor={(n) => {
                if (n.type === 'tool') return '#006FEE';
                return '#fff';
            }}
        />
        <Background gap={12} size={1} />
      </ReactFlow>
    </div>
  );
};
