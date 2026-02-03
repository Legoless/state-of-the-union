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
  // --- Tools ---
  {
    id: 'tool-cursor',
    type: 'tool',
    position: { x: 0, y: 100 },
    data: { label: 'Cursor', category: 'tool', description: 'AI Code Editor based on VS Code.', releaseDate: '2023' },
  },
  {
    id: 'tool-warp',
    type: 'tool',
    position: { x: 0, y: 300 },
    data: { label: 'Warp', category: 'tool', description: 'AI-powered Terminal.', releaseDate: '2021' },
  },
  {
    id: 'tool-opencode',
    type: 'tool',
    position: { x: 0, y: 500 },
    data: { label: 'OpenCode', category: 'tool', description: 'Open Source AI Coding Agent CLI.', releaseDate: '2025' },
  },
  {
    id: 'tool-windsurf',
    type: 'tool',
    position: { x: 0, y: 700 },
    data: { label: 'Windsurf', category: 'tool', description: 'Agentic IDE by Codeium.', releaseDate: '2024' },
  },
  {
    id: 'tool-zed',
    type: 'tool',
    position: { x: 0, y: 900 },
    data: { label: 'Zed', category: 'tool', description: 'High-performance multiplayer code editor.', releaseDate: '2024' },
  },

  // --- LLMs ---
  // OpenAI
  {
    id: 'model-gpt5',
    type: 'model',
    position: { x: 600, y: 0 },
    data: { label: 'GPT-5', category: 'llm', provider: 'OpenAI', description: 'Next-gen frontier model.', releaseDate: '2025' },
  },
  {
    id: 'model-gpt5-2',
    type: 'model',
    position: { x: 600, y: 100 },
    data: { label: 'GPT-5.2', category: 'llm', provider: 'OpenAI', description: 'Refined GPT-5 with enhanced reasoning.', releaseDate: '2026' },
  },
  {
    id: 'model-gpt5-2-codex',
    type: 'model',
    position: { x: 600, y: 200 },
    data: { label: 'GPT-5.2 Codex', category: 'llm', provider: 'OpenAI', description: 'Specialized coding model.', releaseDate: '2026' },
  },
  // Anthropic
  {
    id: 'model-claude-4-5-sonnet',
    type: 'model',
    position: { x: 600, y: 350 },
    data: { label: 'Claude 4.5 Sonnet', category: 'llm', provider: 'Anthropic', description: 'Balanced speed and intelligence.', releaseDate: '2025' },
  },
  {
    id: 'model-claude-4-5-opus',
    type: 'model',
    position: { x: 600, y: 450 },
    data: { label: 'Claude 4.5 Opus', category: 'llm', provider: 'Anthropic', description: 'Most capable model for complex tasks.', releaseDate: '2025' },
  },
  // Google
  {
    id: 'model-gemini-3-pro',
    type: 'model',
    position: { x: 600, y: 600 },
    data: { label: 'Gemini 3 Pro', category: 'llm', provider: 'Google', description: 'Scalable multimodal model.', releaseDate: '2025' },
  },
  {
    id: 'model-gemini-3-flash',
    type: 'model',
    position: { x: 600, y: 700 },
    data: { label: 'Gemini 3 Flash', category: 'llm', provider: 'Google', description: 'High-efficiency, low-latency model.', releaseDate: '2025' },
  },
  // Others
  {
    id: 'model-kimi-2-5',
    type: 'model',
    position: { x: 600, y: 850 },
    data: { label: 'Kimi 2.5', category: 'llm', provider: 'Moonshot AI', description: 'Long-context Chinese LLM.', releaseDate: '2025' },
  },
  {
    id: 'model-deepseek-v3',
    type: 'model',
    position: { x: 600, y: 950 },
    data: { label: 'DeepSeek-V3', category: 'llm', provider: 'DeepSeek', description: 'Open weights mixture-of-experts model.', releaseDate: '2024' },
  },

  // --- Video/Image Models ---
  {
    id: 'model-sora-2',
    type: 'model',
    position: { x: 900, y: 100 },
    data: { label: 'Sora 2', category: 'video', provider: 'OpenAI', description: 'Advanced video generation.', releaseDate: '2025' },
  },
  {
    id: 'model-veo-3',
    type: 'model',
    position: { x: 900, y: 600 },
    data: { label: 'Veo 3', category: 'video', provider: 'Google', description: 'High-definition video generation.', releaseDate: '2025' },
  },
  {
    id: 'model-nano-banana',
    type: 'model',
    position: { x: 900, y: 700 },
    data: { label: 'Nano Banana Pro', category: 'image', provider: 'Google', description: 'Next-gen image generation.', releaseDate: '2025' },
  },
  {
    id: 'model-flux',
    type: 'model',
    position: { x: 900, y: 900 },
    data: { label: 'Flux', category: 'image', provider: 'Black Forest Labs', description: 'State-of-the-art open image model.', releaseDate: '2024' },
  },
];

export const initialEdges: Edge[] = [
  // Cursor Connections
  { id: 'e-cursor-gpt5', source: 'tool-cursor', target: 'model-gpt5' },
  { id: 'e-cursor-claude45', source: 'tool-cursor', target: 'model-claude-4-5-sonnet' },
  { id: 'e-cursor-gpt52', source: 'tool-cursor', target: 'model-gpt5-2' },

  // Warp Connections
  { id: 'e-warp-gpt5', source: 'tool-warp', target: 'model-gpt5' },
  { id: 'e-warp-claude45', source: 'tool-warp', target: 'model-claude-4-5-sonnet' },

  // OpenCode Connections (Many)
  { id: 'e-opencode-gpt52', source: 'tool-opencode', target: 'model-gpt5-2' },
  { id: 'e-opencode-gpt52c', source: 'tool-opencode', target: 'model-gpt5-2-codex' },
  { id: 'e-opencode-claude45o', source: 'tool-opencode', target: 'model-claude-4-5-opus' },
  { id: 'e-opencode-gemini3p', source: 'tool-opencode', target: 'model-gemini-3-pro' },
  { id: 'e-opencode-kimi', source: 'tool-opencode', target: 'model-kimi-2-5' },
  { id: 'e-opencode-deepseek', source: 'tool-opencode', target: 'model-deepseek-v3' },

  // Windsurf
  { id: 'e-windsurf-gpt5', source: 'tool-windsurf', target: 'model-gpt5' },
  { id: 'e-windsurf-claude45', source: 'tool-windsurf', target: 'model-claude-4-5-sonnet' },

  // Relationships between models (e.g. Provider grouping could be implicit or explicit edges)
  // For now, we leave them as independent nodes on the right side.
];
