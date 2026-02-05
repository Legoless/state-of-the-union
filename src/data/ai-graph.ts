import type { Node, Edge } from '@xyflow/react';

export type AINodeData = {
  label: string;
  category: 'ai-ide' | 'cli-agent' | 'ide-extension' | 'ai-terminal' | 'assistant' | 'llm' | 'image' | 'video' | 'provider' | 'root';
  description?: string;
  provider?: string;
  releaseDate?: string;
  specs?: string;
  variants?: string[];
  link?: string;
  targetHandle?: 'top' | 'right' | 'bottom' | 'left';
  sourceHandle?: 'top' | 'right' | 'bottom' | 'left';
  isDarker?: boolean;
};

export type AINode = Node<AINodeData>;

export const initialNodes: AINode[] = [
  // --- Root Node (Center) ---
  {
    id: 'root-ai',
    type: 'root',
    position: { x: 0, y: 0 },
    data: { label: 'AI', category: 'root', description: 'Artificial Intelligence Ecosystem', provider: 'State of the Union' },
  },

  // --- Categories (Ring 1, Radius ~900) ---
  // 1. LLMs (Top, 0°) -> (0, -900)
  {
    id: 'category-llm-all',
    type: 'llm',
    position: { x: 0, y: -900 },
    data: { label: 'LLMs', category: 'llm', description: 'All Large Language Models', targetHandle: 'bottom', sourceHandle: 'top' },
  },
  // 2. Image Models (Top-Right, 68°)
  {
    id: 'category-image-all',
    type: 'image',
    position: { x: 834, y: -337 },
    data: { label: 'Image Models', category: 'image', description: 'Image Generation Models', targetHandle: 'left', sourceHandle: 'right' },
  },
  // 3. Video Models (Bottom-Right, 110.5°)
  {
    id: 'category-video-all',
    type: 'video',
    position: { x: 843, y: 315 },
    data: { label: 'Video Models', category: 'video', description: 'Video Generation Models', targetHandle: 'left', sourceHandle: 'right' },
  },
  // 4. AI Native IDEs (Bottom-Right, 161.5°)
  {
    id: 'category-ai-ide',
    type: 'ai-ide',
    position: { x: 286, y: 853 },
    data: { label: 'AI Native IDEs', category: 'ai-ide', description: 'Standalone Editors', targetHandle: 'top', sourceHandle: 'bottom' },
  },
  // 5. CLI Agents (Bottom-Left, 229.5°)
  {
    id: 'category-cli-agent',
    type: 'cli-agent',
    position: { x: -684, y: 585 },
    data: { label: 'CLI Agents', category: 'cli-agent', description: 'Terminal-based Agents', targetHandle: 'right', sourceHandle: 'left' },
  },
  // 6. IDE Extensions (Left, 272°)
  {
    id: 'category-ide-extension',
    type: 'ide-extension',
    position: { x: -899, y: -31 },
    data: { label: 'IDE Extensions', category: 'ide-extension', description: 'VS Code Extensions', targetHandle: 'right', sourceHandle: 'left' },
  },
  // 7. AI Terminals (Top-Left, 289°)
  {
    id: 'category-ai-terminal',
    type: 'ai-terminal',
    position: { x: -851, y: -293 },
    data: { label: 'AI Terminals', category: 'ai-terminal', description: 'AI-Enhanced Terminals', targetHandle: 'right', sourceHandle: 'left' },
  },
  // 8. Assistants (Top-Left, 306°)
  {
    id: 'category-assistants',
    type: 'assistant',
    position: { x: -728, y: -529 },
    data: { label: 'Assistants', category: 'assistant', description: 'AI Assistants', targetHandle: 'right', sourceHandle: 'left' },
  },

  // --- Leaf Nodes (Ring 2, Radius ~1600) ---
  
  // 1. LLMs
  {
    id: 'model-deepseek-v3',
    type: 'model',
    position: { x: -963, y: -1278 }, // 323°
    data: { 
      label: 'DeepSeek-V3', 
      category: 'llm', 
      provider: 'DeepSeek', 
      description: 'Open weights mixture-of-experts model.', 
      releaseDate: '2024',
      link: 'https://deepseekv3.org',
      variants: ['DeepSeek-V3-Base', 'DeepSeek-V3', 'DeepSeek-R1', 'DeepSeek-R1-Zero'],
      targetHandle: 'bottom',
      isDarker: true
    },
  },
  {
    id: 'model-claude-4-5-opus',
    type: 'model',
    position: { x: -547, y: -1504 }, // 340°
    data: { 
      label: 'Claude 4.5 Opus', 
      category: 'llm', 
      provider: 'Anthropic', 
      description: 'Most capable model for complex tasks.', 
      releaseDate: '2025',
      link: 'https://www.anthropic.com/claude',
      variants: ['Claude 4.5 Opus', 'Claude 4.5 Sonnet', 'Claude 4.5 Haiku'],
      targetHandle: 'bottom'
    },
  },
  {
    id: 'model-gpt5-2',
    type: 'model',
    position: { x: 0, y: -1600 }, // 0°
    data: { 
      label: 'GPT-5.2', 
      category: 'llm', 
      provider: 'OpenAI', 
      description: 'Flagship reasoning & coding model.', 
      releaseDate: '2026',
      link: 'https://openai.com',
      variants: ['GPT-5.2', 'GPT-5.2 Codex'],
      targetHandle: 'bottom'
    },
  },
  {
    id: 'model-gemini-3',
    type: 'model',
    position: { x: 468, y: -1530 }, // 17°
    data: { 
      label: 'Gemini 3', 
      category: 'llm', 
      provider: 'Google', 
      description: 'Scalable multimodal family.', 
      releaseDate: '2025',
      link: 'https://deepmind.google/technologies/gemini/',
      variants: ['Gemini 3 Pro', 'Gemini 3 Flash', 'Gemini 3 Ultra'],
      targetHandle: 'bottom'
    },
  },
  {
    id: 'model-kimi-2-5',
    type: 'model',
    position: { x: 895, y: -1326 }, // 34°
    data: { 
      label: 'Kimi 2.5', 
      category: 'llm', 
      provider: 'Moonshot AI', 
      description: 'Long-context Chinese LLM.', 
      releaseDate: '2025',
      link: 'https://kimi.moonshot.cn',
      variants: ['Kimi 2.5', 'Kimi 2.5 Chat'],
      targetHandle: 'bottom',
      isDarker: true
    },
  },

  // 2. Image
  {
    id: 'model-gpt-image-1-5',
    type: 'model',
    position: { x: 1243, y: -1007 }, // 51°
    data: { 
      label: 'GPT Image 1.5', 
      category: 'image', 
      provider: 'OpenAI', 
      description: 'Next-gen photorealistic image generation.', 
      releaseDate: '2025',
      link: 'https://openai.com',
      variants: ['Standard', 'HD'],
      targetHandle: 'left'
    },
  },
  {
    id: 'model-nano-banana',
    type: 'model',
    position: { x: 1483, y: -599 }, // 68°
    data: { 
      label: 'Nano Banana Pro', 
      category: 'image', 
      provider: 'Google', 
      description: 'Next-gen image generation.', 
      releaseDate: '2025',
      link: 'https://deepmind.google',
      variants: ['Nano', 'Banana'],
      targetHandle: 'left'
    },
  },
  {
    id: 'model-flux-2',
    type: 'model',
    position: { x: 1594, y: -139 }, // 85°
    data: { 
      label: 'FLUX.2', 
      category: 'image', 
      provider: 'Black Forest Labs', 
      description: 'State-of-the-art visual intelligence (Pro, Dev, Klein).', 
      releaseDate: '2025',
      link: 'https://blackforestlabs.ai',
      variants: ['FLUX.2 Pro', 'FLUX.2 Dev', 'FLUX.2 Schnell'],
      targetHandle: 'left',
      isDarker: true
    },
  },

  // 3. Video
  {
    id: 'model-sora-2',
    type: 'model',
    position: { x: 1565, y: 333 }, // 102°
    data: { 
      label: 'Sora 2', 
      category: 'video', 
      provider: 'OpenAI', 
      description: 'Advanced video generation.', 
      releaseDate: '2025',
      link: 'https://openai.com/sora',
      variants: ['Sora 2', 'Sora 2 Turbo'],
      targetHandle: 'left'
    },
  },
  {
    id: 'model-veo-3',
    type: 'model',
    position: { x: 1399, y: 776 }, // 119°
    data: { 
      label: 'Veo 3', 
      category: 'video', 
      provider: 'Google', 
      description: 'High-definition video generation.', 
      releaseDate: '2025',
      link: 'https://deepmind.google/technologies/veo/',
      variants: ['Veo 3', 'Veo 3 Pro'],
      targetHandle: 'left'
    },
  },

  // 4. AI IDEs
  {
    id: 'tool-cursor',
    type: 'tool',
    position: { x: 1111, y: 1151 }, // 136°
    data: { 
      label: 'Cursor', 
      category: 'ai-ide', 
      description: 'AI Code Editor based on VS Code.', 
      releaseDate: '2023',
      link: 'https://cursor.com',
      variants: ['Claude 4.5 Opus', 'Claude 4.5 Sonnet', 'Composer 1', 'Gemini 3 Flash', 'Gemini 3 Pro', 'GPT-5.2', 'GPT-5.2 Codex', 'Grok Code'],
      targetHandle: 'left'
    },
  },
  {
    id: 'tool-windsurf',
    type: 'tool',
    position: { x: 726, y: 1426 }, // 153°
    data: { 
      label: 'Windsurf', 
      category: 'ai-ide', 
      description: 'Agentic IDE by Codeium.', 
      releaseDate: '2024',
      link: 'https://windsurf.com',
      variants: ['Cascade', 'GPT-5.2-Codex'],
      targetHandle: 'left',
      isDarker: true
    },
  },
  {
    id: 'tool-antigravity',
    type: 'tool',
    position: { x: 278, y: 1576 }, // 170°
    data: { 
      label: 'Antigravity', 
      category: 'ai-ide', 
      description: "Google's AI-native IDE.",
      releaseDate: '2025',
      link: 'https://deepmind.google',
      variants: ['Antigravity', 'Gemini Native'],
      targetHandle: 'top'
    },
  },
  {
    id: 'tool-codex-app',
    type: 'tool',
    position: { x: -195, y: 1588 }, // 187°
    data: { 
      label: 'Codex App', 
      category: 'ai-ide', 
      description: "OpenAI's coding environment.",
      releaseDate: '2025',
      link: 'https://openai.com',
      variants: ['Codex'],
      targetHandle: 'top'
    },
  },

  // 5. CLI Agents
  {
    id: 'tool-opencode',
    type: 'tool',
    position: { x: -651, y: 1462 }, // 204°
    data: { 
      label: 'OpenCode', 
      category: 'cli-agent', 
      description: 'Open Source AI Coding Agent CLI.', 
      releaseDate: '2025',
      link: 'https://opencode.ai',
      variants: ['OpenCode CLI'],
      targetHandle: 'top',
      isDarker: true
    },
  },
  {
    id: 'tool-gemini-cli',
    type: 'tool',
    position: { x: -1050, y: 1208 }, // 221°
    data: { 
      label: 'Gemini CLI', 
      category: 'cli-agent', 
      description: "Google's official terminal agent.",
      releaseDate: '2025',
      link: 'https://deepmind.google',
      variants: ['Gemini CLI'],
      targetHandle: 'right',
      isDarker: true
    },
  },
  {
    id: 'tool-codex-cli',
    type: 'tool',
    position: { x: -1357, y: 848 }, // 238°
    data: { 
      label: 'Codex CLI', 
      category: 'cli-agent', 
      description: "OpenAI's official terminal agent.",
      releaseDate: '2025',
      link: 'https://openai.com',
      variants: ['Codex CLI'],
      targetHandle: 'right',
      isDarker: true
    },
  },
  {
    id: 'tool-claude-code',
    type: 'tool',
    position: { x: -1545, y: 414 }, // 255°
    data: { 
      label: 'Claude Code', 
      category: 'cli-agent', 
      description: "Anthropic's official terminal agent.",
      releaseDate: '2025',
      link: 'https://www.anthropic.com',
      variants: ['Claude Code'],
      targetHandle: 'right',
      isDarker: true
    },
  },

  // 6. IDE Extensions
  {
    id: 'tool-cline',
    type: 'tool',
    position: { x: -1599, y: -56 }, // 272°
    data: { 
      label: 'Cline', 
      category: 'ide-extension', 
      description: 'Autonomous coding agent extension.', 
      releaseDate: '2024',
      link: 'https://cline.bot',
      variants: ['Cline'],
      targetHandle: 'right',
      isDarker: true
    },
  },

  // 7. AI Terminals
  {
    id: 'tool-warp',
    type: 'tool',
    position: { x: -1513, y: -521 }, // 289°
    data: { 
      label: 'Warp', 
      category: 'ai-terminal', 
      description: 'AI-powered Terminal.', 
      releaseDate: '2021',
      link: 'https://www.warp.dev',
      variants: ['Warp AI'],
      targetHandle: 'right'
    },
  },

  // 8. Assistants
  {
    id: 'tool-openclaw',
    type: 'tool',
    position: { x: -1294, y: -940 }, // 306°
    data: { 
      label: 'OpenClaw bot', 
      category: 'assistant', 
      description: 'OpenClaw Automated Assistant.', 
      releaseDate: '2025',
      targetHandle: 'right'
    },
  },
];

export const initialEdges: Edge[] = [
  // --- Root -> Category Connections ---
  { id: 'e-root-llm', source: 'root-ai', target: 'category-llm-all', sourceHandle: 'source-top', style: { stroke: '#E4E4E7', strokeWidth: 3 } },
  { id: 'e-root-image', source: 'root-ai', target: 'category-image-all', sourceHandle: 'source-top', style: { stroke: '#E4E4E7', strokeWidth: 3 } },
  { id: 'e-root-video', source: 'root-ai', target: 'category-video-all', sourceHandle: 'source-right', style: { stroke: '#E4E4E7', strokeWidth: 3 } },
  { id: 'e-root-ide', source: 'root-ai', target: 'category-ai-ide', sourceHandle: 'source-right', style: { stroke: '#E4E4E7', strokeWidth: 3 } },
  { id: 'e-root-cli', source: 'root-ai', target: 'category-cli-agent', sourceHandle: 'source-bottom', style: { stroke: '#E4E4E7', strokeWidth: 3 } },
  { id: 'e-root-ext', source: 'root-ai', target: 'category-ide-extension', sourceHandle: 'source-left', style: { stroke: '#E4E4E7', strokeWidth: 3 } },
  { id: 'e-root-term', source: 'root-ai', target: 'category-ai-terminal', sourceHandle: 'source-left', style: { stroke: '#E4E4E7', strokeWidth: 3 } },
  { id: 'e-root-assist', source: 'root-ai', target: 'category-assistants', sourceHandle: 'source-left', style: { stroke: '#E4E4E7', strokeWidth: 3 } },

  // --- Category -> Tool/Model Connections ---
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

  // Assistants
  { id: 'e-cat-assistants-openclaw', source: 'category-assistants', target: 'tool-openclaw', style: { stroke: '#EC4899', strokeWidth: 2 } },

  // LLMs
  { id: 'e-cat-llm-gpt52', source: 'category-llm-all', target: 'model-gpt5-2', style: { stroke: '#17C964', strokeWidth: 2 } },
  { id: 'e-cat-llm-claude-opus', source: 'category-llm-all', target: 'model-claude-4-5-opus', style: { stroke: '#17C964', strokeWidth: 2 } },
  { id: 'e-cat-llm-gemini3', source: 'category-llm-all', target: 'model-gemini-3', style: { stroke: '#17C964', strokeWidth: 2 } },
  { id: 'e-cat-llm-deepseek', source: 'category-llm-all', target: 'model-deepseek-v3', style: { stroke: '#17C964', strokeWidth: 2 } },
  { id: 'e-cat-llm-kimi', source: 'category-llm-all', target: 'model-kimi-2-5', style: { stroke: '#17C964', strokeWidth: 2 } },

  // Image Models
  { id: 'e-cat-image-nano', source: 'category-image-all', target: 'model-nano-banana', style: { stroke: '#7828C8', strokeWidth: 2 } },
  { id: 'e-cat-image-flux', source: 'category-image-all', target: 'model-flux-2', style: { stroke: '#7828C8', strokeWidth: 2 } },
  { id: 'e-cat-image-gpt-image-1-5', source: 'category-image-all', target: 'model-gpt-image-1-5', style: { stroke: '#7828C8', strokeWidth: 2 } },

  // Video Models
  { id: 'e-cat-video-sora', source: 'category-video-all', target: 'model-sora-2', style: { stroke: '#F5A524', strokeWidth: 2 } },
  { id: 'e-cat-video-veo', source: 'category-video-all', target: 'model-veo-3', style: { stroke: '#F5A524', strokeWidth: 2 } },

  // --- Cross-Link Connections (Optional/Contextual) ---
  // Cursor
  { id: 'e-cursor-gpt52', source: 'tool-cursor', target: 'model-gpt5-2', style: { stroke: '#3b82f6', strokeWidth: 1, strokeDasharray: '5,5', opacity: 0.5 } },
  { id: 'e-cursor-claude45', source: 'tool-cursor', target: 'model-claude-4-5-opus', style: { stroke: '#3b82f6', strokeWidth: 1, strokeDasharray: '5,5', opacity: 0.5 } },
  
  // Antigravity (Google) -> Gemini
  { id: 'e-antigravity-gemini3', source: 'tool-antigravity', target: 'model-gemini-3', style: { stroke: '#3b82f6', strokeWidth: 1, strokeDasharray: '5,5', opacity: 0.5 } },

  // Codex App -> GPT
  { id: 'e-codexapp-gpt52', source: 'tool-codex-app', target: 'model-gpt5-2', style: { stroke: '#3b82f6', strokeWidth: 1, strokeDasharray: '5,5', opacity: 0.5 } },

  // Windsurf
  { id: 'e-windsurf-gpt52', source: 'tool-windsurf', target: 'model-gpt5-2', style: { stroke: '#3b82f6', strokeWidth: 1, strokeDasharray: '5,5', opacity: 0.5 } },
  { id: 'e-windsurf-claude45', source: 'tool-windsurf', target: 'model-claude-4-5-opus', style: { stroke: '#3b82f6', strokeWidth: 1, strokeDasharray: '5,5', opacity: 0.5 } },

  // Official CLIs
  { id: 'e-geminicli-gemini', source: 'tool-gemini-cli', target: 'model-gemini-3', style: { stroke: '#3b82f6', strokeWidth: 1, strokeDasharray: '5,5', opacity: 0.5 } },
  { id: 'e-codexcli-gpt', source: 'tool-codex-cli', target: 'model-gpt5-2', style: { stroke: '#3b82f6', strokeWidth: 1, strokeDasharray: '5,5', opacity: 0.5 } },
  { id: 'e-claudecode-claude', source: 'tool-claude-code', target: 'model-claude-4-5-opus', style: { stroke: '#3b82f6', strokeWidth: 1, strokeDasharray: '5,5', opacity: 0.5 } },

  // Open Agents (Connect to many)
  { id: 'e-opencode-gpt52', source: 'tool-opencode', target: 'model-gpt5-2', style: { stroke: '#3b82f6', strokeWidth: 1, strokeDasharray: '5,5', opacity: 0.5 } },
];
