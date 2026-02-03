import React from 'react';
import { Card, CardHeader, CardBody, Divider } from "@heroui/react";
import type { AINodeData } from '../data/ai-graph';

interface SidebarProps {
  selectedNode: AINodeData | null;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ selectedNode, onClose }) => {
  if (!selectedNode) {
    return (
      <div className="absolute right-4 top-4 w-80 z-10 pointer-events-none">
        {/* Placeholder or empty state if needed */}
      </div>
    );
  }

  return (
    <div className="absolute right-4 top-4 w-80 z-50 h-[calc(100vh-2rem)] flex flex-col pointer-events-auto">
      <Card className="h-full shadow-2xl bg-zinc-900/95 backdrop-blur-md border border-zinc-700 text-white">
        <CardHeader className="flex flex-col items-start gap-1 pb-2 border-b border-zinc-700">
          <div className="flex justify-between w-full items-center">
            <h2 className="text-xl font-bold text-white">{selectedNode.label}</h2>
            <button onClick={onClose} className="text-zinc-400 hover:text-white">✕</button>
          </div>
          <span className="text-small text-zinc-400 uppercase font-bold tracking-wider">
            {selectedNode.category}
          </span>
        </CardHeader>
        <Divider className="bg-zinc-700" />
        <CardBody className="gap-4">
          <p className="text-zinc-300">{selectedNode.description}</p>
          
          {selectedNode.provider && (
            <div>
              <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wide">Provider</h3>
              <p className="text-zinc-200">{selectedNode.provider}</p>
            </div>
          )}
          
          {selectedNode.releaseDate && (
            <div>
              <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wide">Release Date</h3>
              <p className="text-zinc-200">{selectedNode.releaseDate}</p>
            </div>
          )}

          {selectedNode.specs && (
            <div>
              <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wide">Specs</h3>
              <p className="text-sm text-zinc-200">{selectedNode.specs}</p>
            </div>
          )}
        </CardBody>
      </Card>
    </div>
  );
};
