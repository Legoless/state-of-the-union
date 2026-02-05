import type { Node, Edge } from '@xyflow/react';

export type AINodeData = {
  label: string;
  category: 'ai-ide' | 'cli-agent' | 'ide-extension' | 'ai-terminal' | 'assistant' | 'llm' | 'image' | 'video' | 'provider';
  description?: string;
  provider?: string;
  releaseDate?: string;
  specs?: string;
  variants?: string[];
  link?: string;
};

export type AINode = Node<AINodeData>;

export const initialNodes: AINode[] = [
  // --- Providers (Center) ---
  {
    id: 'provider-openai',
    type: 'tool', // Reuse existing styling
    position: { x: 0, y: -200 },
    data: { 
      label: 'OpenAI', 
      category: 'provider', 
      description: 'AI Research & Deployment Company', 
      releaseDate: '2015',
      link: 'https://openai.com'
    },
  },
  {
    id: 'provider-anthropic',
    type: 'tool',
    position: { x: -400, y: 400 },
    data: { 
      label: 'Anthropic', 
      category: 'provider', 
      description: 'AI Safety & Research Company', 
      releaseDate: '2021',
      link: 'https://www.anthropic.com'
    },
  },
  {
    id: 'provider-google',
    type: 'tool',
    position: { x: 400, y: 400 },
    data: { 
      label: 'Google', 
      category: 'provider', 
      description: 'Google AI Division', 
      releaseDate: '2010',
      link: 'https://deepmind.google'
    },
  },
  {
    id: 'provider-deepseek',
    type: 'tool',
    position: { x: 0, y: 550 },
    data: { 
      label: 'DeepSeek', 
      category: 'provider', 
      description: 'Open Source AI Lab', 
      releaseDate: '2023',
      link: 'https://deepseekv3.org'
    },
  },
  {
    id: 'provider-moonshot',
    type: 'tool',
    position: { x: -300, y: 700 },
    data: { 
      label: 'Moonshot AI', 
      category: 'provider', 
      description: 'Chinese AI Startup', 
      releaseDate: '2023',
      link: 'https://www.moonshot.cn'
    },
  },

  // --- Categories (Central) ---
  {
    id: 'category-llm-all',
    type: 'llm',
    position: { x: 0, y: 100 },
    data: { label: 'LLMs', category: 'llm', description: 'All Large Language Models' },
  },
  {
    id: 'category-image-all',
    type: 'image',
    position: { x: -250, y: 100 },
    data: { label: 'Image Models', category: 'image', description: 'Image Generation Models' },
  },
  {
    id: 'category-video-all',
    type: 'video',
    position: { x: 250, y: 100 },
    data: { label: 'Video Models', category: 'video', description: 'Video Generation Models' },
  },

  // --- OpenAI Models (Top Cluster) ---
  {
    id: 'model-gpt5-2',
    type: 'model',
    position: { x: 0, y: -600 },
    data: { 
      label: 'GPT-5.2', 
      category: 'llm', 
      provider: 'OpenAI', 
      description: 'Flagship reasoning & coding model.', 
      releaseDate: '2026',
      link: 'https://openai.com',
      variants: ['GPT-5.2', 'GPT-5.2 Codex']
    },
  },
  {
    id: 'model-sora-2',
    type: 'model',
    position: { x: 550, y: -400 },
    data: { 
      label: 'Sora 2', 
      category: 'video', 
      provider: 'OpenAI', 
      description: 'Advanced video generation.', 
      releaseDate: '2025',
      link: 'https://openai.com/sora',
      variants: ['Sora 2', 'Sora 2 Turbo']
    },
  },
  {
    id: 'model-gpt-image-1-5',
    type: 'model',
    position: { x: 550, y: -200 },
    data: { 
      label: 'GPT Image 1.5', 
      category: 'image', 
      provider: 'OpenAI', 
      description: 'Next-gen photorealistic image generation.', 
      releaseDate: '2025',
      link: 'https://openai.com',
      variants: ['Standard', 'HD']
    },
  },

  // --- Anthropic Models (Bottom Left Cluster) ---
  {
    id: 'model-claude-4-5-opus',
    type: 'model',
    position: { x: -800, y: 600 },
    data: { 
      label: 'Claude 4.5 Opus', 
      category: 'llm', 
      provider: 'Anthropic', 
      description: 'Most capable model for complex tasks.', 
      releaseDate: '2025',
      link: 'https://www.anthropic.com/claude',
      variants: ['Claude 4.5 Opus', 'Claude 4.5 Sonnet', 'Claude 4.5 Haiku']
    },
  },

  // --- Google Models (Bottom Right Cluster) ---
  {
    id: 'model-gemini-3',
    type: 'model',
    position: { x: 800, y: 300 },
    data: { 
      label: 'Gemini 3', 
      category: 'llm', 
      provider: 'Google', 
      description: 'Scalable multimodal family.', 
      releaseDate: '2025',
      link: 'https://deepmind.google/technologies/gemini/',
      variants: ['Gemini 3 Pro', 'Gemini 3 Flash', 'Gemini 3 Ultra']
    },
  },
  {
    id: 'model-veo-3',
    type: 'model',
    position: { x: 1100, y: 450 },
    data: { 
      label: 'Veo 3', 
      category: 'video', 
      provider: 'Google', 
      description: 'High-definition video generation.', 
      releaseDate: '2025',
      link: 'https://deepmind.google/technologies/veo/',
      variants: ['Veo 3', 'Veo 3 Pro']
    },
  },
  {
    id: 'model-nano-banana',
    type: 'model',
    position: { x: 1100, y: 750 },
    data: { 
      label: 'Nano Banana Pro', 
      category: 'image', 
      provider: 'Google', 
      description: 'Next-gen image generation.', 
      releaseDate: '2025',
      link: 'https://deepmind.google',
      variants: ['Nano', 'Banana']
    },
  },

  // --- Independent Models (Bottom Center) ---
  {
    id: 'model-deepseek-v3',
    type: 'model',
    position: { x: 0, y: 800 },
    data: { 
      label: 'DeepSeek-V3', 
      category: 'llm', 
      provider: 'DeepSeek', 
      description: 'Open weights mixture-of-experts model.', 
      releaseDate: '2024',
      link: 'https://deepseekv3.org',
      variants: ['DeepSeek-V3-Base', 'DeepSeek-V3', 'DeepSeek-R1', 'DeepSeek-R1-Zero']
    },
  },
  {
    id: 'model-kimi-2-5',
    type: 'model',
    position: { x: -300, y: 900 },
    data: { 
      label: 'Kimi 2.5', 
      category: 'llm', 
      provider: 'Moonshot AI', 
      description: 'Long-context Chinese LLM.', 
      releaseDate: '2025',
      link: 'https://kimi.moonshot.cn',
      variants: ['Kimi 2.5', 'Kimi 2.5 Chat']
    },
  },
  {
    id: 'model-flux-2',
    type: 'model',
    position: { x: 300, y: 900 },
    data: { 
      label: 'FLUX.2', 
      category: 'image', 
      provider: 'Black Forest Labs', 
      description: 'State-of-the-art visual intelligence (Pro, Dev, Klein).', 
      releaseDate: '2025',
      link: 'https://blackforestlabs.ai',
      variants: ['FLUX.2 Pro', 'FLUX.2 Dev', 'FLUX.2 Schnell']
    },
  },

  // --- Tool Categories (Left) ---
  {
    id: 'category-ai-ide',
    type: 'ai-ide',
    position: { x: -1000, y: -200 },
    data: { label: 'AI Native IDEs', category: 'ai-ide', description: 'Standalone Editors' },
  },
  {
    id: 'category-cli-agent',
    type: 'cli-agent',
    position: { x: -1000, y: 300 },
    data: { label: 'CLI Agents', category: 'cli-agent', description: 'Terminal-based Agents' },
  },
  {
    id: 'category-ide-extension',
    type: 'ide-extension',
    position: { x: -1000, y: 800 },
    data: { label: 'IDE Extensions', category: 'ide-extension', description: 'VS Code Extensions' },
  },
  {
    id: 'category-ai-terminal',
    type: 'ai-terminal',
    position: { x: -1000, y: 1200 },
    data: { label: 'AI Terminals', category: 'ai-terminal', description: 'AI-Enhanced Terminals' },
  },
  {
    id: 'category-assistants',
    type: 'assistant',
    position: { x: -1000, y: 2200 },
    data: { label: 'Assistants', category: 'assistant', description: 'AI Assistants' },
  },

  // --- AI Native IDEs ---
  {
    id: 'tool-cursor',
    type: 'tool',
    position: { x: -1400, y: -400 },
    data: { 
      label: 'Cursor', 
      category: 'ai-ide', 
      description: 'AI Code Editor based on VS Code.', 
      releaseDate: '2023',
      link: 'https://cursor.com',
      variants: ['Claude 4.5 Opus', 'Claude 4.5 Sonnet', 'Composer 1', 'Gemini 3 Flash', 'Gemini 3 Pro', 'GPT-5.2', 'GPT-5.2 Codex', 'Grok Code']
    },
  },
  {
    id: 'tool-windsurf',
    type: 'tool',
    position: { x: -1400, y: -200 },
    data: { 
      label: 'Windsurf', 
      category: 'ai-ide', 
      description: 'Agentic IDE by Codeium.', 
      releaseDate: '2024',
      link: 'https://windsurf.com',
      variants: ['Cascade', 'GPT-5.2-Codex']
    },
  },
  {
    id: 'tool-antigravity',
    type: 'tool',
    position: { x: -1400, y: 200 },
    data: { 
      label: 'Antigravity', 
      category: 'ai-ide', 
      description: "Google's AI-native IDE.",
      releaseDate: '2025',
      link: 'https://deepmind.google',
      variants: ['Antigravity', 'Gemini Native']
    },
  },
  {
    id: 'tool-codex-app',
    type: 'tool',
    position: { x: -1400, y: 400 },
    data: { 
      label: 'Codex App', 
      category: 'ai-ide', 
      description: "OpenAI's coding environment.",
      releaseDate: '2025',
      link: 'https://openai.com',
      variants: ['Codex']
    },
  },

  // --- CLI Agents ---
  {
    id: 'tool-opencode',
    type: 'tool',
    position: { x: -1400, y: 600 },
    data: { 
      label: 'OpenCode', 
      category: 'cli-agent', 
      description: 'Open Source AI Coding Agent CLI.', 
      releaseDate: '2025',
      link: 'https://opencode.ai',
      variants: ['OpenCode CLI']
    },
  },
  {
    id: 'tool-gemini-cli',
    type: 'tool',
    position: { x: -1400, y: 1050 },
    data: { 
      label: 'Gemini CLI', 
      category: 'cli-agent', 
      description: "Google's official terminal agent.",
      releaseDate: '2025',
      link: 'https://deepmind.google',
      variants: ['Gemini CLI']
    },
  },
  {
    id: 'tool-codex-cli',
    type: 'tool',
    position: { x: -1400, y: 1200 },
    data: { 
      label: 'Codex CLI', 
      category: 'cli-agent', 
      description: "OpenAI's official terminal agent.",
      releaseDate: '2025',
      link: 'https://openai.com',
      variants: ['Codex CLI']
    },
  },
  {
    id: 'tool-claude-code',
    type: 'tool',
    position: { x: -1400, y: 1350 },
    data: { 
      label: 'Claude Code', 
      category: 'cli-agent', 
      description: "Anthropic's official terminal agent.",
      releaseDate: '2025',
      link: 'https://www.anthropic.com',
      variants: ['Claude Code']
    },
  },

  // --- IDE Extensions ---
  {
    id: 'tool-cline',
    type: 'tool',
    position: { x: -1400, y: 1500 },
    data: { 
      label: 'Cline', 
      category: 'ide-extension', 
      description: 'Autonomous coding agent extension.', 
      releaseDate: '2024',
      link: 'https://cline.bot',
      variants: ['Cline']
    },
  },

  // --- AI Terminals ---
  {
    id: 'tool-warp',
    type: 'tool',
    position: { x: -1400, y: 1800 },
    data: { 
      label: 'Warp', 
      category: 'ai-terminal', 
      description: 'AI-powered Terminal.', 
      releaseDate: '2021',
      link: 'https://www.warp.dev',
      variants: ['Warp AI']
    },
  },

  // --- Assistants ---
  {
    id: 'tool-openclaw',
    type: 'tool',
    position: { x: -1400, y: 2200 },
    data: { 
      label: 'OpenClaw bot', 
      category: 'assistant', 
      description: 'OpenClaw Automated Assistant.', 
      releaseDate: '2025',
    },
  },
];

export const initialEdges: Edge[] = [
  // --- Category -> Tool Connections (Blue-ish) ---
  // AI IDEs
  { id: 'e-cat-ide-cursor', source: 'category-ai-ide', target: 'tool-cursor', style: { stroke: '#006FEE', strokeWidth: 2 } },
  { id: 'e-cat-ide-windsurf', source: 'category-ai-ide', target: 'tool-windsurf', style: { stroke: '#006FEE', strokeWidth: 2 } },
  { id: 'e-cat-ide-antigravity', source: 'category-ai-ide', target: 'tool-antigravity', style: { stroke: '#006FEE', strokeWidth: 2 } },
  { id: 'e-cat-ide-codexapp', source: 'category-ai-ide', target: 'tool-codex-app', style: { stroke: '#006FEE', strokeWidth: 2 } },

  // CLI Agents
  { id: 'e-cat-cli-opencode', source: 'category-cli-agent', target: 'tool-opencode', style: { stroke: '#F31260', strokeWidth: 2 } },
  { id: 'e-cat-cli-gemini', source: 'category-cli-agent', target: 'tool-gemini-cli', style: { stroke: '#F31260', strokeWidth: 2 } },
  { id: 'e-cat-cli-codex', source: 'category-cli-agent', target: 'tool-codex-cli', style: { stroke: '#F31260', strokeWidth: 2 } },
  { id: 'e-cat-cli-claude', source: 'category-cli-agent', target: 'tool-claude-code', style: { stroke: '#F31260', strokeWidth: 2 } },

  // IDE Extensions
  { id: 'e-cat-ext-cline', source: 'category-ide-extension', target: 'tool-cline', style: { stroke: '#9333EA', strokeWidth: 2 } },

  // AI Terminals
  { id: 'e-cat-term-warp', source: 'category-ai-terminal', target: 'tool-warp', style: { stroke: '#06B6D4', strokeWidth: 2 } },

  // --- Tool -> Model Connections ---
  // Cursor
  { id: 'e-cursor-gpt52', source: 'tool-cursor', target: 'model-gpt5-2', style: { stroke: '#3b82f6', strokeWidth: 1 } },
  { id: 'e-cursor-claude45', source: 'tool-cursor', target: 'model-claude-4-5-opus', style: { stroke: '#3b82f6', strokeWidth: 1 } },
  
  // Antigravity (Google) -> Gemini
  { id: 'e-antigravity-gemini3', source: 'tool-antigravity', target: 'model-gemini-3', style: { stroke: '#3b82f6', strokeWidth: 1 } },

  // Codex App -> GPT
  { id: 'e-codexapp-gpt52', source: 'tool-codex-app', target: 'model-gpt5-2', style: { stroke: '#3b82f6', strokeWidth: 1 } },

  // Windsurf
  { id: 'e-windsurf-gpt52', source: 'tool-windsurf', target: 'model-gpt5-2', style: { stroke: '#3b82f6', strokeWidth: 1 } },
  { id: 'e-windsurf-claude45', source: 'tool-windsurf', target: 'model-claude-4-5-opus', style: { stroke: '#3b82f6', strokeWidth: 1 } },

  // Official CLIs
  { id: 'e-geminicli-gemini', source: 'tool-gemini-cli', target: 'model-gemini-3', style: { stroke: '#3b82f6', strokeWidth: 1 } },
  { id: 'e-codexcli-gpt', source: 'tool-codex-cli', target: 'model-gpt5-2', style: { stroke: '#3b82f6', strokeWidth: 1 } },
  { id: 'e-claudecode-claude', source: 'tool-claude-code', target: 'model-claude-4-5-opus', style: { stroke: '#3b82f6', strokeWidth: 1 } },

  // Open Agents (Connect to many)
  { id: 'e-opencode-gpt52', source: 'tool-opencode', target: 'model-gpt5-2', style: { stroke: '#3b82f6', strokeWidth: 1, strokeDasharray: '5,5' } },

  // Provider -> Model Connections (Green)
  { id: 'e-openai-gpt5-2', source: 'provider-openai', target: 'model-gpt5-2', style: { stroke: '#22c55e', strokeWidth: 2 } },
  { id: 'e-openai-sora2', source: 'provider-openai', target: 'model-sora-2', style: { stroke: '#eab308', strokeWidth: 2 } },
  { id: 'e-openai-gpt-image-1-5', source: 'provider-openai', target: 'model-gpt-image-1-5', style: { stroke: '#7828C8', strokeWidth: 2 } },

  { id: 'e-anthropic-opus', source: 'provider-anthropic', target: 'model-claude-4-5-opus', style: { stroke: '#22c55e', strokeWidth: 2 } },

  { id: 'e-google-gemini3', source: 'provider-google', target: 'model-gemini-3', style: { stroke: '#22c55e', strokeWidth: 2 } },
  { id: 'e-google-veo3', source: 'provider-google', target: 'model-veo-3', style: { stroke: '#eab308', strokeWidth: 2 } },
  { id: 'e-google-nanobanana', source: 'provider-google', target: 'model-nano-banana', style: { stroke: '#22c55e', strokeWidth: 2 } },

  { id: 'e-deepseek-v3', source: 'provider-deepseek', target: 'model-deepseek-v3', style: { stroke: '#22c55e', strokeWidth: 2 } },
  { id: 'e-moonshot-kimi', source: 'provider-moonshot', target: 'model-kimi-2-5', style: { stroke: '#22c55e', strokeWidth: 2 } },

  // Category -> LLM Connections (Green)
  { id: 'e-cat-llm-gpt52', source: 'category-llm-all', target: 'model-gpt5-2', style: { stroke: '#17C964', strokeWidth: 2 } },
  { id: 'e-cat-llm-claude-opus', source: 'category-llm-all', target: 'model-claude-4-5-opus', style: { stroke: '#17C964', strokeWidth: 2 } },
  { id: 'e-cat-llm-gemini3', source: 'category-llm-all', target: 'model-gemini-3', style: { stroke: '#17C964', strokeWidth: 2 } },
  { id: 'e-cat-llm-deepseek', source: 'category-llm-all', target: 'model-deepseek-v3', style: { stroke: '#17C964', strokeWidth: 2 } },
  { id: 'e-cat-llm-kimi', source: 'category-llm-all', target: 'model-kimi-2-5', style: { stroke: '#17C964', strokeWidth: 2 } },

  // Category -> Image Connections (Purple)
  { id: 'e-cat-image-nano', source: 'category-image-all', target: 'model-nano-banana', style: { stroke: '#7828C8', strokeWidth: 2 } },
  { id: 'e-cat-image-flux', source: 'category-image-all', target: 'model-flux-2', style: { stroke: '#7828C8', strokeWidth: 2 } },
  { id: 'e-cat-image-gpt-image-1-5', source: 'category-image-all', target: 'model-gpt-image-1-5', style: { stroke: '#7828C8', strokeWidth: 2 } },

  // Category -> Video Connections (Orange)
  { id: 'e-cat-video-sora', source: 'category-video-all', target: 'model-sora-2', style: { stroke: '#F5A524', strokeWidth: 2 } },
  { id: 'e-cat-video-veo', source: 'category-video-all', target: 'model-veo-3', style: { stroke: '#F5A524', strokeWidth: 2 } },

  // Assistants
  { id: 'e-cat-assistants-openclaw', source: 'category-assistants', target: 'tool-openclaw', style: { stroke: '#EC4899', strokeWidth: 2 } },
];
