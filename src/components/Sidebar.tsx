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
      <Card className="h-full shadow-2xl bg-content1/90 backdrop-blur-md border border-default-200">
        <CardHeader className="flex flex-col items-start gap-1 pb-2">
          <div className="flex justify-between w-full items-center">
            <h2 className="text-xl font-bold text-foreground">{selectedNode.label}</h2>
            <button onClick={onClose} className="text-default-400 hover:text-default-600">✕</button>
          </div>
          <span className="text-small text-default-500 uppercase font-bold tracking-wider">
            {selectedNode.category}
          </span>
        </CardHeader>
        <Divider />
        <CardBody className="gap-4">
          <p className="text-default-700">{selectedNode.description}</p>
          
          {selectedNode.provider && (
            <div>
              <h3 className="text-sm font-semibold text-foreground-500">Provider</h3>
              <p>{selectedNode.provider}</p>
            </div>
          )}
          
          {selectedNode.releaseDate && (
            <div>
              <h3 className="text-sm font-semibold text-foreground-500">Release Date</h3>
              <p>{selectedNode.releaseDate}</p>
            </div>
          )}

          {selectedNode.specs && (
            <div>
              <h3 className="text-sm font-semibold text-foreground-500">Specs</h3>
              <p className="text-sm">{selectedNode.specs}</p>
            </div>
          )}
        </CardBody>
      </Card>
    </div>
  );
};
