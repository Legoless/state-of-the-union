import { useState } from 'react';
import { HeroUIProvider } from "@heroui/react";
import { AIGraph } from './components/AIGraph';
import { Sidebar } from './components/Sidebar';
import type { AINodeData } from './data/ai-graph';

function App() {
  const [selectedNode, setSelectedNode] = useState<AINodeData | null>(null);

  return (
    <HeroUIProvider>
      <main className="dark text-foreground bg-background w-screen h-screen flex relative overflow-hidden">
        <AIGraph onNodeSelect={setSelectedNode} />
        <Sidebar key={selectedNode?.id} selectedNode={selectedNode} onClose={() => setSelectedNode(null)} />
      </main>
    </HeroUIProvider>
  );
}

export default App;
