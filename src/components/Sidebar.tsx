import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Divider, Chip, Button } from "@heroui/react";
import { ExternalLink } from 'lucide-react';
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
    <div className="absolute right-4 top-4 w-80 z-50 max-h-[calc(100vh-250px)] flex flex-col pointer-events-auto">
      <Card className="h-auto max-h-full shadow-2xl bg-zinc-900/95 backdrop-blur-md border border-zinc-700 text-white">
        <CardHeader className="flex flex-col items-start gap-1 pb-2 border-b border-zinc-700 shrink-0">
          <div className="flex justify-between w-full items-center">
            <h2 className="text-xl font-bold text-white">{selectedNode.label}</h2>
            <button onClick={onClose} className="text-zinc-400 hover:text-white">✕</button>
          </div>
          <span className="text-small text-zinc-400 uppercase font-bold tracking-wider">
            {selectedNode.category}
          </span>
        </CardHeader>
        <Divider className="bg-zinc-700" />
        <CardBody className="gap-4 overflow-y-auto">
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

          {selectedNode.variants && selectedNode.variants.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-2">Variants</h3>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-zinc-700">
                    <th className="py-2 text-xs font-semibold text-zinc-500 uppercase">Model</th>
                    <th className="py-2 text-xs font-semibold text-zinc-500 uppercase">ID</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedNode.variants.map((variant) => (
                    <tr key={variant.id} className="border-b border-zinc-800 last:border-0">
                      <td className="py-2 text-sm text-zinc-200">{variant.label}</td>
                      <td className="py-2 text-xs text-zinc-400 font-mono">{variant.id}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardBody>
        
        {selectedNode.link && (
          <>
            <Divider className="bg-zinc-700" />
            <CardFooter>
              <Button 
                as="a" 
                href={selectedNode.link} 
                target="_blank" 
                rel="noopener noreferrer"
                color="primary" 
                variant="solid" 
                className="w-full"
                endContent={<ExternalLink size={16} />}
              >
                Visit Website
              </Button>
            </CardFooter>
          </>
        )}
      </Card>
    </div>
  );
};
