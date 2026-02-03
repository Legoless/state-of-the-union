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
import { Chip } from "@heroui/react";

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
      <div
        className={`min-w-[180px] p-3 rounded-xl border-2 transition-transform ${selected ? 'scale-105' : ''}`}
        style={{
          backgroundColor: '#18181b', // zinc-900
          borderColor: selected ? '#3b82f6' : '#3f3f46', // blue-500 : zinc-700
          color: '#ffffff',
        }}
      >
        <div className="flex flex-col items-center justify-center gap-2">
          <Chip 
            color={categoryColor} 
            variant="solid" 
            size="sm" 
            className="uppercase text-[10px] font-bold tracking-wider"
            style={{ color: '#ffffff' }}
          >
            {data.category}
          </Chip>
          <div className="font-bold text-center text-md" style={{ color: '#ffffff' }}>{data.label}</div>
          {data.provider && <div className="text-[11px] font-medium" style={{ color: '#a1a1aa' }}>{data.provider}</div>}
        </div>
      </div>
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
