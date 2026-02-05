import React, { useCallback, useMemo, useEffect } from 'react';
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
    const isDarker = data.isDarker;
    switch (data.category) {
      case 'ai-ide': 
        return isDarker 
          ? { bg: '#003C8F', border: '#003C8F', text: '#ffffff', subtext: '#E0E7FF' } // Darker Blue
          : { bg: '#006FEE', border: '#006FEE', text: '#ffffff', subtext: '#E0E7FF' }; // Primary Blue
      case 'cli-agent': 
        return isDarker 
          ? { bg: '#8F0A36', border: '#8F0A36', text: '#ffffff', subtext: '#FFE4E6' } // Darker Red
          : { bg: '#F31260', border: '#F31260', text: '#ffffff', subtext: '#FFE4E6' }; // Danger Red
      case 'ide-extension': 
        return isDarker 
          ? { bg: '#551A8B', border: '#551A8B', text: '#ffffff', subtext: '#F3E8FF' } // Darker Purple
          : { bg: '#9333EA', border: '#9333EA', text: '#ffffff', subtext: '#F3E8FF' }; // Purple
      case 'ai-terminal': return { bg: '#06B6D4', border: '#06B6D4', text: '#ffffff', subtext: '#CFFAFE' }; // Cyan
      case 'llm': 
        return isDarker 
          ? { bg: '#17C964', border: '#17C964', text: '#000000', subtext: '#1F2937' } // Darker (Standard Success Green)
          : { bg: '#6EE7B7', border: '#6EE7B7', text: '#000000', subtext: '#1F2937' }; // Lighter Green (Emerald 300)
      case 'video': return { bg: '#F5A524', border: '#F5A524', text: '#000000', subtext: '#431407' }; // Warning Orange
      case 'image': 
        return isDarker 
          ? { bg: '#4A157F', border: '#4A157F', text: '#ffffff', subtext: '#F3E8FF' } // Darker Violet
          : { bg: '#7828C8', border: '#7828C8', text: '#ffffff', subtext: '#F3E8FF' }; // Secondary Purple
      case 'provider': return { bg: '#E4E4E7', border: '#E4E4E7', text: '#000000', subtext: '#52525B' }; // Zinc 200
      case 'assistant': return { bg: '#EC4899', border: '#EC4899', text: '#ffffff', subtext: '#FCE7F3' }; // Pink 500
      case 'root': return { bg: '#FFFFFF', border: '#E4E4E7', text: '#000000', subtext: '#52525B' }; // White
      default: return { bg: '#27272a', border: '#52525B', text: '#ffffff', subtext: '#a1a1aa' }; // Zinc 800
    }
  }, [data.category, data.isDarker]);

  const isRoot = data.category === 'root';
  const targetPos = data.targetHandle ? Position[data.targetHandle.charAt(0).toUpperCase() + data.targetHandle.slice(1) as keyof typeof Position] : Position.Left;
  const sourcePos = data.sourceHandle ? Position[data.sourceHandle.charAt(0).toUpperCase() + data.sourceHandle.slice(1) as keyof typeof Position] : (data.targetHandle ? targetPos : Position.Right);

  return (
    <div className="relative">
      {isRoot ? (
        <>
          <Handle type="source" position={Position.Top} id="source-top" className="opacity-0" />
          <Handle type="source" position={Position.Right} id="source-right" className="opacity-0" />
          <Handle type="source" position={Position.Bottom} id="source-bottom" className="opacity-0" />
          <Handle type="source" position={Position.Left} id="source-left" className="opacity-0" />
        </>
      ) : (
        <>
          <Handle type="target" position={targetPos} className="opacity-0" />
          <Handle type="source" position={sourcePos} className="opacity-0" />
        </>
      )}

      {data.isNew && (
        <Chip
          color="danger"
          variant="solid"
          size="sm"
          className="absolute -top-4 -right-4 z-50 shadow-lg border-2 border-white animate-pulse"
        >
          NEW
        </Chip>
      )}

      <div
        className={`min-w-[400px] p-10 border-2 transition-all duration-200 ${selected ? 'scale-105' : ''}`}
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
          {!isRoot && (
          <Chip 
            color={categoryColor} 
            variant="solid" 
            size="lg" 
            className="uppercase text-xl font-bold tracking-widest border border-white/20 shadow-sm"
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
          )}
          <div className="font-bold text-center text-4xl leading-tight tracking-tight" style={{
            color: nodeStyles.text,
            fontFamily: '"Source Sans 3", system-ui, sans-serif',
          }}>{data.label}</div>
          {data.provider && <div className="text-2xl font-medium opacity-90" style={{
            color: nodeStyles.subtext,
            fontFamily: '"Source Sans 3", system-ui, sans-serif',
          }}>{data.provider}</div>}
        </div>
      </div>
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

const STORAGE_KEY = 'ai_graph_node_state';

interface StoredNode {
  id: string;
  label: string;
}

export const AIGraph: React.FC<AIGraphProps> = ({ onNodeSelect }) => {
  // Initialize nodes with "NEW" status check
  const initialNodesWithNewStatus = useMemo(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      const storedNodes: StoredNode[] = stored ? JSON.parse(stored) : [];
      
      // If no stored nodes, assume first visit/cleared cache, so don't mark anything as new
      // unless we want to mark everything as new on first visit. 
      // Plan said: "If storage is empty, assume first visit and show NO badges"
      if (storedNodes.length === 0) {
        return initialNodes;
      }

      const storedMap = new Map(storedNodes.map(n => [n.id, n.label]));

      return initialNodes.map(node => {
        const storedLabel = storedMap.get(node.id);
        const isNew = !storedMap.has(node.id) || storedLabel !== node.data.label;
        
        if (isNew) {
          return {
            ...node,
            data: { ...node.data, isNew: true }
          };
        }
        return node;
      });
    } catch (e) {
      console.error('Failed to parse stored nodes', e);
      return initialNodes;
    }
  }, []);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodesWithNewStatus);

  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  // Save current state to localStorage on mount/update
  useEffect(() => {
    const currentSnapshot: StoredNode[] = initialNodes.map(n => ({
      id: n.id,
      label: n.data.label
    }));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(currentSnapshot));
  }, []);

  const onNodeClick = useCallback((_: React.MouseEvent, node: Node) => {
    const nodeData = node.data as AINodeData;
    
    // Clear the NEW badge if it exists
    if (nodeData.isNew) {
      setNodes((nds) => nds.map((n) => {
        if (n.id === node.id) {
          return {
            ...n,
            data: { ...n.data, isNew: undefined }
          };
        }
        return n;
      }));
    }

    onNodeSelect(nodeData);
  }, [onNodeSelect, setNodes]);

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
              const data = n.data as AINodeData;
              const cat = data?.category;
              const isDarker = data?.isDarker;
              switch (cat) {
                case 'ai-ide': return isDarker ? '#003C8F' : '#006FEE';
                case 'cli-agent': return isDarker ? '#8F0A36' : '#F31260';
                case 'ide-extension': return isDarker ? '#551A8B' : '#9333EA';
                case 'ai-terminal': return '#06B6D4';
                case 'llm': return isDarker ? '#17C964' : '#6EE7B7';
                case 'video': return '#F5A524';
                case 'image': return isDarker ? '#4A157F' : '#7828C8';
                case 'provider': return '#E4E4E7';
                case 'assistant': return '#EC4899';
                case 'root': return '#FFFFFF';
                default: return '#52525B';
              }
            }}
            nodeColor={(n) => {
              const data = n.data as AINodeData;
              const cat = data?.category;
              const isDarker = data?.isDarker;
              switch (cat) {
                case 'ai-ide': return isDarker ? '#003C8F' : '#006FEE';
                case 'cli-agent': return isDarker ? '#8F0A36' : '#F31260';
                case 'ide-extension': return isDarker ? '#551A8B' : '#9333EA';
                case 'ai-terminal': return '#06B6D4';
                case 'llm': return isDarker ? '#17C964' : '#6EE7B7';
                case 'video': return '#F5A524';
                case 'image': return isDarker ? '#4A157F' : '#7828C8';
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
