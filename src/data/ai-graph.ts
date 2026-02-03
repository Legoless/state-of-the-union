import type { Node, Edge } from '@xyflow/react';

export type AINodeData = {
  label: string;
  category: 'tool' | 'llm' | 'image' | 'video' | 'provider';
  description?: string;
  provider?: string;
  releaseDate?: string;
  specs?: string;
};

export type AINode = Node<AINodeData>;

export const initialNodes: AINode[] = [
  // --- Providers (Center) ---
  {
    id: 'provider-openai',
    type: 'tool', // Reuse existing styling
    position: { x: 0, y: -200 },
    data: { label: 'OpenAI', category: 'provider', description: 'AI Research & Deployment Company', releaseDate: '2015' },
  },
  {
    id: 'provider-anthropic',
    type: 'tool',
    position: { x: -400, y: 400 },
    data: { label: 'Anthropic', category: 'provider', description: 'AI Safety & Research Company', releaseDate: '2021' },
  },
  {
    id: 'provider-google',
    type: 'tool',
    position: { x: 400, y: 400 },
    data: { label: 'Google DeepMind', category: 'provider', description: 'Google AI Division', releaseDate: '2010' },
  },

  // --- Categories (Central) ---
  {
    id: 'category-llm-all',
    type: 'llm',
    position: { x: 0, y: 100 },
    data: { label: 'LLMs', category: 'llm', description: 'All Large Language Models' },
  },

  // --- OpenAI Models (Top Cluster) ---
  {
    id: 'model-gpt5',
    type: 'model',
    position: { x: -250, y: -600 },
    data: { label: 'GPT-5', category: 'llm', provider: 'OpenAI', description: 'Next-gen frontier model.', releaseDate: '2025' },
  },
  {
    id: 'model-gpt5-2',
    type: 'model',
    position: { x: 250, y: -600 },
    data: { label: 'GPT-5.2', category: 'llm', provider: 'OpenAI', description: 'Refined GPT-5 with enhanced reasoning.', releaseDate: '2026' },
  },
  {
    id: 'model-gpt5-2-codex',
    type: 'model',
    position: { x: 0, y: -800 },
    data: { label: 'GPT-5.2 Codex', category: 'llm', provider: 'OpenAI', description: 'Specialized coding model.', releaseDate: '2026' },
  },
  {
    id: 'model-sora-2',
    type: 'model',
    position: { x: 550, y: -400 },
    data: { label: 'Sora 2', category: 'video', provider: 'OpenAI', description: 'Advanced video generation.', releaseDate: '2025' },
  },

  // --- Anthropic Models (Bottom Left Cluster) ---
  {
    id: 'model-claude-4-5-sonnet',
    type: 'model',
    position: { x: -800, y: 300 },
    data: { label: 'Claude 4.5 Sonnet', category: 'llm', provider: 'Anthropic', description: 'Balanced speed and intelligence.', releaseDate: '2025' },
  },
  {
    id: 'model-claude-4-5-opus',
    type: 'model',
    position: { x: -800, y: 600 },
    data: { label: 'Claude 4.5 Opus', category: 'llm', provider: 'Anthropic', description: 'Most capable model for complex tasks.', releaseDate: '2025' },
  },

  // --- Google Models (Bottom Right Cluster) ---
  {
    id: 'model-gemini-3-pro',
    type: 'model',
    position: { x: 800, y: 300 },
    data: { label: 'Gemini 3 Pro', category: 'llm', provider: 'Google', description: 'Scalable multimodal model.', releaseDate: '2025' },
  },
  {
    id: 'model-gemini-3-flash',
    type: 'model',
    position: { x: 800, y: 600 },
    data: { label: 'Gemini 3 Flash', category: 'llm', provider: 'Google', description: 'High-efficiency, low-latency model.', releaseDate: '2025' },
  },
  {
    id: 'model-veo-3',
    type: 'model',
    position: { x: 1100, y: 450 },
    data: { label: 'Veo 3', category: 'video', provider: 'Google', description: 'High-definition video generation.', releaseDate: '2025' },
  },
  {
    id: 'model-nano-banana',
    type: 'model',
    position: { x: 1100, y: 750 },
    data: { label: 'Nano Banana Pro', category: 'image', provider: 'Google', description: 'Next-gen image generation.', releaseDate: '2025' },
  },

  // --- Independent Models (Bottom Center) ---
  {
    id: 'model-deepseek-v3',
    type: 'model',
    position: { x: 0, y: 800 },
    data: { label: 'DeepSeek-V3', category: 'llm', provider: 'DeepSeek', description: 'Open weights mixture-of-experts model.', releaseDate: '2024' },
  },
  {
    id: 'model-kimi-2-5',
    type: 'model',
    position: { x: -300, y: 900 },
    data: { label: 'Kimi 2.5', category: 'llm', provider: 'Moonshot AI', description: 'Long-context Chinese LLM.', releaseDate: '2025' },
  },
  {
    id: 'model-flux',
    type: 'model',
    position: { x: 300, y: 900 },
    data: { label: 'Flux', category: 'image', provider: 'Black Forest Labs', description: 'State-of-the-art open image model.', releaseDate: '2024' },
  },

  // --- Tools (Far Left & Top) ---
  {
    id: 'tool-cursor',
    type: 'tool',
    position: { x: -1200, y: -200 },
    data: { label: 'Cursor', category: 'tool', description: 'AI Code Editor based on VS Code.', releaseDate: '2023' },
  },
  {
    id: 'tool-windsurf',
    type: 'tool',
    position: { x: -1200, y: 100 },
    data: { label: 'Windsurf', category: 'tool', description: 'Agentic IDE by Codeium.', releaseDate: '2024' },
  },
  {
    id: 'tool-warp',
    type: 'tool',
    position: { x: -1200, y: 400 },
    data: { label: 'Warp', category: 'tool', description: 'AI-powered Terminal.', releaseDate: '2021' },
  },
  {
    id: 'tool-zed',
    type: 'tool',
    position: { x: -1200, y: 700 },
    data: { label: 'Zed', category: 'tool', description: 'High-performance multiplayer code editor.', releaseDate: '2024' },
  },
  {
    id: 'tool-opencode',
    type: 'tool',
    position: { x: -1200, y: 1000 },
    data: { label: 'OpenCode', category: 'tool', description: 'Open Source AI Coding Agent CLI.', releaseDate: '2025' },
  },
];

export const initialEdges: Edge[] = [
  // Cursor Connections
  { id: 'e-cursor-gpt5', source: 'tool-cursor', target: 'model-gpt5', style: { stroke: '#3b82f6', strokeWidth: 2 } },
  { id: 'e-cursor-claude45', source: 'tool-cursor', target: 'model-claude-4-5-sonnet', style: { stroke: '#3b82f6', strokeWidth: 2 } },
  { id: 'e-cursor-gpt52', source: 'tool-cursor', target: 'model-gpt5-2', style: { stroke: '#3b82f6', strokeWidth: 2 } },

  // Warp Connections
  { id: 'e-warp-gpt5', source: 'tool-warp', target: 'model-gpt5', style: { stroke: '#3b82f6', strokeWidth: 2 } },
  { id: 'e-warp-claude45', source: 'tool-warp', target: 'model-claude-4-5-sonnet', style: { stroke: '#3b82f6', strokeWidth: 2 } },

  // OpenCode Connections (Many)
  { id: 'e-opencode-gpt52', source: 'tool-opencode', target: 'model-gpt5-2', style: { stroke: '#3b82f6', strokeWidth: 2 } },
  { id: 'e-opencode-gpt52c', source: 'tool-opencode', target: 'model-gpt5-2-codex', style: { stroke: '#3b82f6', strokeWidth: 2 } },
  { id: 'e-opencode-claude45o', source: 'tool-opencode', target: 'model-claude-4-5-opus', style: { stroke: '#3b82f6', strokeWidth: 2 } },
  { id: 'e-opencode-gemini3p', source: 'tool-opencode', target: 'model-gemini-3-pro', style: { stroke: '#3b82f6', strokeWidth: 2 } },
  { id: 'e-opencode-kimi', source: 'tool-opencode', target: 'model-kimi-2-5', style: { stroke: '#3b82f6', strokeWidth: 2 } },
  { id: 'e-opencode-deepseek', source: 'tool-opencode', target: 'model-deepseek-v3', style: { stroke: '#3b82f6', strokeWidth: 2 } },

  // Windsurf
  { id: 'e-windsurf-gpt5', source: 'tool-windsurf', target: 'model-gpt5', style: { stroke: '#3b82f6', strokeWidth: 2 } },
  { id: 'e-windsurf-claude45', source: 'tool-windsurf', target: 'model-claude-4-5-sonnet', style: { stroke: '#3b82f6', strokeWidth: 2 } },

  // Provider -> Model Connections (Green)
  { id: 'e-openai-gpt5', source: 'provider-openai', target: 'model-gpt5', style: { stroke: '#22c55e', strokeWidth: 2 } },
  { id: 'e-openai-gpt5-2', source: 'provider-openai', target: 'model-gpt5-2', style: { stroke: '#22c55e', strokeWidth: 2 } },
  { id: 'e-openai-gpt5-2-codex', source: 'provider-openai', target: 'model-gpt5-2-codex', style: { stroke: '#22c55e', strokeWidth: 2 } },
  { id: 'e-openai-sora2', source: 'provider-openai', target: 'model-sora-2', style: { stroke: '#eab308', strokeWidth: 2 } },

  { id: 'e-anthropic-sonnet', source: 'provider-anthropic', target: 'model-claude-4-5-sonnet', style: { stroke: '#22c55e', strokeWidth: 2 } },
  { id: 'e-anthropic-opus', source: 'provider-anthropic', target: 'model-claude-4-5-opus', style: { stroke: '#22c55e', strokeWidth: 2 } },

  { id: 'e-google-gemini3pro', source: 'provider-google', target: 'model-gemini-3-pro', style: { stroke: '#22c55e', strokeWidth: 2 } },
  { id: 'e-google-gemini3flash', source: 'provider-google', target: 'model-gemini-3-flash', style: { stroke: '#22c55e', strokeWidth: 2 } },
  { id: 'e-google-veo3', source: 'provider-google', target: 'model-veo-3', style: { stroke: '#eab308', strokeWidth: 2 } },
  { id: 'e-google-nanobanana', source: 'provider-google', target: 'model-nano-banana', style: { stroke: '#22c55e', strokeWidth: 2 } },

  // Category -> LLM Connections (Green)
  { id: 'e-cat-llm-gpt5', source: 'category-llm-all', target: 'model-gpt5', style: { stroke: '#17C964', strokeWidth: 2 } },
  { id: 'e-cat-llm-gpt52', source: 'category-llm-all', target: 'model-gpt5-2', style: { stroke: '#17C964', strokeWidth: 2 } },
  { id: 'e-cat-llm-gpt52c', source: 'category-llm-all', target: 'model-gpt5-2-codex', style: { stroke: '#17C964', strokeWidth: 2 } },
  { id: 'e-cat-llm-claude-sonnet', source: 'category-llm-all', target: 'model-claude-4-5-sonnet', style: { stroke: '#17C964', strokeWidth: 2 } },
  { id: 'e-cat-llm-claude-opus', source: 'category-llm-all', target: 'model-claude-4-5-opus', style: { stroke: '#17C964', strokeWidth: 2 } },
  { id: 'e-cat-llm-gemini-pro', source: 'category-llm-all', target: 'model-gemini-3-pro', style: { stroke: '#17C964', strokeWidth: 2 } },
  { id: 'e-cat-llm-gemini-flash', source: 'category-llm-all', target: 'model-gemini-3-flash', style: { stroke: '#17C964', strokeWidth: 2 } },
  { id: 'e-cat-llm-deepseek', source: 'category-llm-all', target: 'model-deepseek-v3', style: { stroke: '#17C964', strokeWidth: 2 } },
  { id: 'e-cat-llm-kimi', source: 'category-llm-all', target: 'model-kimi-2-5', style: { stroke: '#17C964', strokeWidth: 2 } },
];
