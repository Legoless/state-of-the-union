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
      case 'ai-ide': return 'primary';
      case 'cli-agent': return 'danger';
      case 'ide-extension': return 'secondary';
      case 'ai-terminal': return 'primary';
      case 'llm': return 'success';
      case 'video': return 'warning';
      case 'image': return 'secondary';
      case 'provider': return 'default';
      case 'assistant': return 'secondary';
      case 'root': return 'default';
      default: return 'default';
    }
  }, [data.category]);

  const nodeStyles = useMemo(() => {
    switch (data.category) {
      case 'ai-ide': return { bg: '#006FEE', border: '#006FEE', text: '#ffffff', subtext: '#E0E7FF' }; // Primary Blue
      case 'cli-agent': return { bg: '#F31260', border: '#F31260', text: '#ffffff', subtext: '#FFE4E6' }; // Danger Red
      case 'ide-extension': return { bg: '#9333EA', border: '#9333EA', text: '#ffffff', subtext: '#F3E8FF' }; // Purple
      case 'ai-terminal': return { bg: '#06B6D4', border: '#06B6D4', text: '#ffffff', subtext: '#CFFAFE' }; // Cyan
      case 'llm': return { bg: '#17C964', border: '#17C964', text: '#000000', subtext: '#1F2937' }; // Success Green
      case 'video': return { bg: '#F5A524', border: '#F5A524', text: '#000000', subtext: '#431407' }; // Warning Orange
      case 'image': return { bg: '#7828C8', border: '#7828C8', text: '#ffffff', subtext: '#F3E8FF' }; // Secondary Purple
      case 'provider': return { bg: '#E4E4E7', border: '#E4E4E7', text: '#000000', subtext: '#52525B' }; // Zinc 200
      case 'assistant': return { bg: '#EC4899', border: '#EC4899', text: '#ffffff', subtext: '#FCE7F3' }; // Pink 500
      case 'root': return { bg: '#FFFFFF', border: '#E4E4E7', text: '#000000', subtext: '#52525B' }; // White
      default: return { bg: '#27272a', border: '#52525B', text: '#ffffff', subtext: '#a1a1aa' }; // Zinc 800
    }
  }, [data.category]);

  return (
    <div className="relative">
      <Handle type="target" position={Position.Left} className="opacity-0" />
      <div
        className={`min-w-[260px] p-6 border-2 transition-all duration-200 ${selected ? 'scale-105' : ''}`}
        style={{
          backgroundColor: nodeStyles.bg,
          borderColor: nodeStyles.border,
          boxShadow: selected ? `0 0 40px ${nodeStyles.border}80` : `0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1)`,
          color: nodeStyles.text,
          fontFamily: '"Source Sans 3", system-ui, sans-serif',
          borderRadius: '32px',
        }}
      >
        <div className="flex flex-col items-center justify-center gap-4">
          <Chip 
            color={categoryColor} 
            variant="solid" 
            size="sm" 
            className="uppercase text-[10px] font-bold tracking-widest border border-white/20 shadow-sm"
            style={{ 
              color: nodeStyles.text === '#000000' ? '#000000' : '#ffffff',
              backgroundColor: 'rgba(255, 255, 255, 0.2)', // Glassy chip
              backdropFilter: 'blur(8px)',
              fontFamily: '"Source Sans 3", system-ui, sans-serif',
              letterSpacing: '0.1em'
            }}
          >
            {data.category}
          </Chip>
          <div className="font-bold text-center text-xl leading-tight tracking-tight" style={{ 
            color: nodeStyles.text,
            fontFamily: '"Source Sans 3", system-ui, sans-serif',
          }}>{data.label}</div>
          {data.provider && <div className="text-sm font-medium opacity-90" style={{ 
            color: nodeStyles.subtext,
            fontFamily: '"Source Sans 3", system-ui, sans-serif',
          }}>{data.provider}</div>}
        </div>
      </div>
      <Handle type="source" position={Position.Right} className="opacity-0" />
    </div>
  );
};

// --- Main Graph Component ---
interface AIGraphProps {
  onNodeSelect: (node: AINodeData | null) => void;
}

const nodeTypes = {
  'ai-ide': CustomAINode,
  'cli-agent': CustomAINode,
  'ide-extension': CustomAINode,
  'ai-terminal': CustomAINode,
  tool: CustomAINode, // Keeping for backward compatibility or generic use
  model: CustomAINode,
  llm: CustomAINode,
  video: CustomAINode,
  image: CustomAINode,
  assistant: CustomAINode,
  root: CustomAINode,
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
              const cat = (n.data as AINodeData)?.category;
              switch (cat) {
                case 'ai-ide': return '#006FEE';
                case 'cli-agent': return '#F31260';
                case 'ide-extension': return '#9333EA';
                case 'ai-terminal': return '#06B6D4';
                case 'llm': return '#17C964';
                case 'video': return '#F5A524';
                case 'image': return '#7828C8';
                case 'provider': return '#E4E4E7';
                case 'assistant': return '#EC4899';
                case 'root': return '#FFFFFF';
                default: return '#52525B';
              }
            }}
            nodeColor={(n) => {
              const cat = (n.data as AINodeData)?.category;
              switch (cat) {
                case 'ai-ide': return '#006FEE';
                case 'cli-agent': return '#F31260';
                case 'ide-extension': return '#9333EA';
                case 'ai-terminal': return '#06B6D4';
                case 'llm': return '#17C964';
                case 'video': return '#F5A524';
                case 'image': return '#7828C8';
                case 'provider': return '#E4E4E7';
                case 'assistant': return '#EC4899';
                case 'root': return '#FFFFFF';
                default: return '#52525B';
              }
            }}
        />
        <Background gap={12} size={1} />
      </ReactFlow>
    </div>
  );
};
