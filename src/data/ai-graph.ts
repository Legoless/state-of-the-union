import type { Node, Edge } from '@xyflow/react';

export type AINodeData = {
  id: string;
  label: string;
  category: 'ai-ide' | 'cli-agent' | 'ai-terminal' | 'assistant' | 'llm' | 'image' | 'video' | 'provider' | 'root';
  icon?: AINodeIcon;
  description?: string;
  defaultNotes?: string;
  provider?: string;
  releaseDate?: string;
  specs?: string;
  variants?: { label: string; id: string }[];
  link?: string;
  targetHandle?: 'top' | 'right' | 'bottom' | 'left';
  sourceHandle?: 'top' | 'right' | 'bottom' | 'left';
  isDarker?: boolean;
  isNew?: boolean;
};

export type AINodeIcon =
  | { type: 'simple'; slug: string }
  | { type: 'url'; src: string; monochrome?: boolean };

export type AINode = Node<AINodeData>;

export const initialNodes: AINode[] = [
  // --- Root Node (Center) ---
  {
    id: 'root-ai',
    type: 'root',
    position: { x: 0, y: 0 },
    data: { id: 'root-ai', label: 'AI', category: 'root', description: 'Artificial Intelligence Ecosystem', provider: 'State of the Union', defaultNotes: 'Central node representing the entire ecosystem.' },
  },

  // --- Categories (Ring 1, Radius ~900) ---
  // 1. LLMs (Top, 0°) -> (0, -900)
  {
    id: 'category-llm-all',
    type: 'llm',
    position: { x: 0, y: -900 },
    data: { id: 'category-llm-all', label: 'LLMs', category: 'llm', description: 'All Large Language Models', targetHandle: 'bottom', sourceHandle: 'top' },
  },
  // 2. Image Models (Top-Right, 68°)
  {
    id: 'category-image-all',
    type: 'image',
    position: { x: 834, y: -337 },
    data: { id: 'category-image-all', label: 'Image Models', category: 'image', description: 'Image Generation Models', targetHandle: 'left', sourceHandle: 'right' },
  },
  // 3. Video Models (Bottom-Right, 110.5°)
  {
    id: 'category-video-all',
    type: 'video',
    position: { x: 843, y: 315 },
    data: { id: 'category-video-all', label: 'Video Models', category: 'video', description: 'Video Generation Models', targetHandle: 'left', sourceHandle: 'right' },
  },
  // 4. AI Native IDEs (Bottom-Right, 161.5°)
  {
    id: 'category-ai-ide',
    type: 'ai-ide',
    position: { x: 286, y: 853 },
    data: { id: 'category-ai-ide', label: 'AI Native IDEs', category: 'ai-ide', description: 'Standalone Editors', targetHandle: 'top', sourceHandle: 'bottom' },
  },
  // 5. CLI Agents (Bottom-Left, 229.5°)
  {
    id: 'category-cli-agent',
    type: 'cli-agent',
    position: { x: -684, y: 585 },
    data: { id: 'category-cli-agent', label: 'CLI Agents', category: 'cli-agent', description: 'Terminal-based Agents', targetHandle: 'right', sourceHandle: 'left' },
  },
  // 6. AI Terminals (Top-Left, 289°)
  {
    id: 'category-ai-terminal',
    type: 'ai-terminal',
    position: { x: -851, y: -293 },
    data: { id: 'category-ai-terminal', label: 'AI Terminals', category: 'ai-terminal', description: 'AI-Enhanced Terminals', targetHandle: 'right', sourceHandle: 'left' },
  },
  // 7. Assistants (Top-Left, 306°)
  {
    id: 'category-assistants',
    type: 'assistant',
    position: { x: -728, y: -529 },
    data: { id: 'category-assistants', label: 'Assistants', category: 'assistant', description: 'AI Assistants', targetHandle: 'right', sourceHandle: 'left' },
  },

  // --- Leaf Nodes (Ring 2, Radius ~1600) ---
  
  // 1. LLMs
  {
    id: 'model-gemma-4',
    type: 'model',
    position: { x: -1320, y: -1367 }, // 316°, r=1900
    data: {
      id: 'model-gemma-4',
      label: 'Gemma 4',
      category: 'llm',
      provider: 'Google',
      description: 'Open-weights lightweight model family.',
      releaseDate: '2026',
      link: 'https://ai.google.dev/gemma',
      variants: [
        { label: 'Gemma 4 31B', id: 'gemma-4-31b' },
        { label: 'Gemma 4 26B MoE', id: 'gemma-4-26b-moe' },
        { label: 'Gemma 4 E4B', id: 'gemma-4-e4b' },
        { label: 'Gemma 4 E2B', id: 'gemma-4-e2b' }
      ],
      targetHandle: 'bottom'
    },
  },
  {
    id: 'model-qwen-3-6',
    type: 'model',
    position: { x: -941, y: -1294 }, // 324°
    data: {
      id: 'model-qwen-3-6',
      label: 'Qwen 3.6',
      category: 'llm',
      provider: 'Alibaba',
      description: 'Frontier open-weights model with strong coding + reasoning. New 27B dense weights (Apr 2026).',
      releaseDate: '2026',
      link: 'https://qwen.ai/',
      variants: [
        { label: 'Qwen3.6-Plus', id: 'qwen3.6-plus' },
        { label: 'Qwen3.6-27B', id: 'qwen3.6-27b' },
        { label: 'Qwen3.6-35B-A3B', id: 'qwen3.6-35b-a3b' }
      ],
      targetHandle: 'bottom',
      isNew: true
    },
  },
  {
    id: 'model-minimax',
    type: 'model',
    position: { x: -892, y: -1678 }, // 332°, r=1900
    data: {
      id: 'model-minimax',
      label: 'MiniMax M2.7',
      category: 'llm',
      provider: 'MiniMax',
      description: 'Efficient MoE model optimized for agentic coding.',
      releaseDate: '2026',
      link: 'https://www.minimax.io/platform',
      variants: [
        { label: 'MiniMax-M2.7', id: 'minimax-m2.7' },
        { label: 'MiniMax-M2.7-highspeed', id: 'minimax-m2.7-highspeed' }
      ],
      targetHandle: 'bottom'
    },
  },
  {
    id: 'model-claude-4-6-opus',
    type: 'model',
    position: { x: -547, y: -1504 }, // 340°
    data: {
      id: 'model-claude-4-6-opus',
      label: 'Claude 4.7 Opus',
      category: 'llm',
      provider: 'Anthropic',
      description: 'Flagship model with xhigh effort & 1M context.',
      defaultNotes: 'Opus 4.7 is the smartest model for coding tasks, with 1M context and the new xhigh effort level for the hardest problems.',
      releaseDate: '2026',
      link: 'https://docs.anthropic.com/en/api/overview',
      variants: [
        { label: 'Claude 4.7 Opus', id: 'claude-opus-4-7' },
        { label: 'Claude 4.6 Opus', id: 'claude-opus-4-6' },
        { label: 'Claude 4.6 Sonnet', id: 'claude-sonnet-4-6' },
        { label: 'Claude 4.5 Haiku', id: 'claude-haiku-4-5' }
      ],
      targetHandle: 'bottom'
    },
  },
  {
    id: 'model-glm',
    type: 'model',
    position: { x: -330, y: -1871 }, // 350°, r=1900
    data: {
      id: 'model-glm',
      label: 'GLM 5.1',
      category: 'llm',
      provider: 'Zhipu AI',
      description: 'Open bilingual flagship with strong tool-use.',
      releaseDate: '2026',
      link: 'https://docs.z.ai/',
      variants: [
        { label: 'GLM-5.1', id: 'glm-5.1' },
        { label: 'GLM-5.1-Air', id: 'glm-5.1-air' },
        { label: 'GLM-5.1-Flash', id: 'glm-5.1-flash' }
      ],
      targetHandle: 'bottom'
    },
  },
  {
    id: 'model-gpt5-2',
    type: 'model',
    position: { x: 0, y: -1600 }, // 0°
    data: {
      id: 'model-gpt5-2',
      label: 'GPT-5.5',
      category: 'llm',
      provider: 'OpenAI',
      description: 'Frontier reasoning model for professional work, with computer-use and 1M context.',
      defaultNotes: 'GPT-5.5 (Apr 2026) is the new frontier model. GPT-5.5 Instant (May 2026) is the fast ChatGPT default for everyday tasks.',
      releaseDate: '2026',
      link: 'https://developers.openai.com/api/docs/models',
      variants: [
        { label: 'GPT-5.5', id: 'gpt-5.5' },
        { label: 'GPT-5.5 Pro', id: 'gpt-5.5-pro' },
        { label: 'GPT-5.5 Instant', id: 'gpt-5.5-instant' },
        { label: 'GPT-5.4', id: 'gpt-5.4' },
        { label: 'GPT-5.4 mini', id: 'gpt-5.4-mini' },
        { label: 'GPT-5.3-Codex', id: 'gpt-5.3-codex' },
        { label: 'GPT-5.3-Codex-Spark', id: 'gpt-5.3-codex-spark' }
      ],
      targetHandle: 'bottom',
      isNew: true
    },
  },
  {
    id: 'model-gemini-3',
    type: 'model',
    position: { x: 468, y: -1530 }, // 17°
    data: {
      id: 'model-gemini-3',
      label: 'Gemini 3.1',
      category: 'llm',
      provider: 'Google',
      description: 'Multimodal flagship leading SWE-bench & ARC-AGI-2. Deep Research preview added Apr 2026.',
      releaseDate: '2026',
      link: 'https://ai.google.dev/gemini-api/docs/models',
      variants: [
        { label: 'Gemini 3.1 Pro', id: 'gemini-3-1-pro' },
        { label: 'Gemini 3.1 Flash-Lite', id: 'gemini-3-1-flash-lite' },
        { label: 'Gemini Deep Research', id: 'gemini-deep-research-preview' },
        { label: 'Gemini 3 Pro', id: 'gemini-3-pro' },
        { label: 'Gemini 3 Flash', id: 'gemini-3-flash' },
        { label: 'Gemini 3 Deep Think', id: 'gemini-3-deep-think' }
      ],
      targetHandle: 'bottom'
    },
  },
  {
    id: 'model-deepseek-v4',
    type: 'model',
    position: { x: 803, y: -1722 }, // 25°, r=1900
    data: {
      id: 'model-deepseek-v4',
      label: 'DeepSeek V4',
      category: 'llm',
      provider: 'DeepSeek',
      description: 'Open-source frontier model with Pro + Flash variants.',
      releaseDate: '2026',
      link: 'https://api-docs.deepseek.com/',
      variants: [
        { label: 'DeepSeek-V4 Preview', id: 'deepseek-v4-preview' },
        { label: 'DeepSeek-V4 Pro', id: 'deepseek-v4-pro' },
        { label: 'DeepSeek-V4 Flash', id: 'deepseek-v4-flash' }
      ],
      targetHandle: 'bottom',
      isNew: true
    },
  },
  {
    id: 'model-kimi-2-5',
    type: 'model',
    position: { x: 895, y: -1326 }, // 34°
    data: {
      id: 'model-kimi-2-5',
      label: 'Kimi K2.6',
      category: 'llm',
      provider: 'Moonshot AI',
      description: 'Open-source multimodal agentic model with Instant, Thinking, Agent and Agent Swarm modes.',
      releaseDate: '2026',
      link: 'https://platform.moonshot.ai/docs',
      variants: [
        { label: 'Kimi K2.6 Instant', id: 'kimi-k2.6-instant' },
        { label: 'Kimi K2.6 Thinking', id: 'kimi-k2.6-thinking' },
        { label: 'Kimi K2.6 Agent', id: 'kimi-k2.6-agent' },
        { label: 'Kimi K2.6 Agent Swarm', id: 'kimi-k2.6-agent-swarm' }
      ],
      targetHandle: 'bottom',
      isNew: true
    },
  },

  // 2. Image
  {
    id: 'model-gpt-image-1-5',
    type: 'model',
    position: { x: 1243, y: -1007 }, // 51°
    data: {
      id: 'model-gpt-image-1-5',
      label: 'GPT Image 2',
      category: 'image',
      provider: 'OpenAI',
      description: 'Next-gen photorealistic image generation with sharper text + editing.',
      releaseDate: '2026',
      link: 'https://developers.openai.com/api/docs/guides/image-generation',
      variants: [
        { label: 'GPT Image 2', id: 'gpt-image-2' },
        { label: 'GPT Image 2 (snapshot)', id: 'gpt-image-2-2026-04-21' },
        { label: 'GPT Image 1.5', id: 'gpt-image-1.5' }
      ],
      targetHandle: 'left',
      isNew: true
    },
  },
  {
    id: 'model-nano-banana',
    type: 'model',
    position: { x: 1483, y: -599 }, // 68°
    data: {
      id: 'model-nano-banana',
      label: 'Nano Banana 2',
      category: 'image',
      provider: 'Google',
      description: 'Next-gen image generation with sharper text + editing.',
      releaseDate: '2026',
      link: 'https://ai.google.dev/gemini-api/docs/image-generation',
      variants: [
        { label: 'Nano Banana 2', id: 'gemini-3-1-flash-image' },
        { label: 'Nano Banana Pro', id: 'gemini-3-pro-image' }
      ],
      targetHandle: 'left'
    },
  },
  {
    id: 'model-flux-2',
    type: 'model',
    position: { x: 1594, y: -139 }, // 85°
    data: { 
      id: 'model-flux-2',
      label: 'FLUX.2', 
      category: 'image', 
      provider: 'Black Forest Labs', 
      description: 'State-of-the-art visual intelligence (Pro, Dev, Klein).', 
      releaseDate: '2025',
      link: 'https://docs.bfl.ai/flux_2/flux2_overview',
      variants: [
        { label: 'FLUX.2 [max]', id: 'flux-2-max' },
        { label: 'FLUX.2 [pro]', id: 'flux-2-pro' },
        { label: 'FLUX.2 [flex]', id: 'flux-2-flex' },
        { label: 'FLUX.2 [klein]', id: 'flux-2-klein' }
      ],
      targetHandle: 'left',
      isDarker: true
    },
  },

  // 3. Video
  {
    id: 'model-higgsfield',
    type: 'model',
    position: { x: 1897, y: 99 }, // 93°, r=1900
    data: {
      id: 'model-higgsfield',
      label: 'Higgsfield',
      category: 'video',
      provider: 'Higgsfield',
      description: 'Cinematic AI video & image platform with proprietary engines (Soul, DOP, Cinema Studio) and 30+ integrated models.',
      releaseDate: '2025',
      link: 'https://higgsfield.ai/',
      variants: [
        { label: 'Soul 2.0', id: 'higgsfield-soul-2' },
        { label: 'Soul Cinema', id: 'higgsfield-soul-cinema' },
        { label: 'Higgsfield DOP', id: 'higgsfield-dop' },
        { label: 'Cinema Studio', id: 'higgsfield-cinema-studio' },
        { label: 'Keyframes', id: 'higgsfield-keyframes' }
      ],
      targetHandle: 'left',
      isNew: true
    },
  },
  {
    id: 'model-kling-3',
    type: 'model',
    position: { x: 1575, y: 278 }, // 100°
    data: {
      id: 'model-kling-3',
      label: 'Kling 3.0',
      category: 'video',
      provider: 'Kuaishou',
      description: 'Cinematic video generation with strong motion coherence. 1080p/720p, native audio modes.',
      releaseDate: '2026',
      link: 'https://app.klingai.com/',
      variants: [
        { label: 'Kling V3 Pro', id: 'kling-v3-pro' },
        { label: 'Kling V3 Standard', id: 'kling-v3-standard' },
        { label: 'Kling O3 Pro', id: 'kling-o3-pro' },
        { label: 'Kling O3 Standard', id: 'kling-o3-standard' }
      ],
      targetHandle: 'left'
    },
  },
  {
    id: 'model-kie',
    type: 'model',
    position: { x: 1785, y: 650 }, // 110°, r=1900
    data: {
      id: 'model-kie',
      label: 'Kie',
      category: 'video',
      provider: 'Kie.ai',
      description: 'Unified, credit-based API for top video, image, and music models — Veo 3.1, Runway Aleph, Kling 3.0, Sora 2.',
      releaseDate: '2025',
      link: 'https://kie.ai/',
      variants: [
        { label: 'Veo 3.1 API', id: 'kie-veo-3-1' },
        { label: 'Veo 3.1 Fast API', id: 'kie-veo-3-1-fast' },
        { label: 'Runway Aleph API', id: 'kie-runway-aleph' },
        { label: 'Runway Gen-4 Turbo API', id: 'kie-runway-gen4-turbo' },
        { label: 'Kling 3.0 API', id: 'kie-kling-3' },
        { label: 'Sora 2 API', id: 'kie-sora-2' }
      ],
      targetHandle: 'left',
      isNew: true
    },
  },
  {
    id: 'model-veo-3',
    type: 'model',
    position: { x: 1399, y: 776 }, // 119°
    data: { 
      id: 'model-veo-3',
      label: 'Veo 3.1',
      category: 'video',
      provider: 'Google',
      description: 'High-definition 4K video generation. Lite variant launched Apr 2026.',
      defaultNotes: 'Veo3 can create more generic advertising videos, delivering high-quality visuals for commercial use.',
      releaseDate: '2026',
      link: 'https://ai.google.dev/gemini-api/docs/video',
      variants: [
        { label: 'Veo 3.1', id: 'veo-3.1-generate-001' },
        { label: 'Veo 3.1 Fast', id: 'veo-3.1-fast-generate-001' },
        { label: 'Veo 3.1 Lite', id: 'veo-3.1-lite-generate-001' }
      ],
      targetHandle: 'left'
    },
  },
  {
    id: 'model-seedance-2',
    type: 'model',
    position: { x: 1518, y: 1143 }, // 127°, r=1900
    data: {
      id: 'model-seedance-2',
      label: 'Seedance 2.0',
      category: 'video',
      provider: 'ByteDance',
      description: 'Fast, high-fidelity text/image-to-video generation.',
      releaseDate: '2026',
      link: 'https://seed.bytedance.com/seedance',
      variants: [
        { label: 'Seedance 2.0', id: 'seedance-2-0' },
        { label: 'Seedance 2.0 Fast', id: 'seedance-2-0-fast' }
      ],
      targetHandle: 'left'
    },
  },

  // 4. AI IDEs
  {
    id: 'tool-cursor',
    type: 'tool',
    position: { x: 1111, y: 1151 }, // 136°
    data: { 
      id: 'tool-cursor',
      label: 'Cursor',
      category: 'ai-ide',
      icon: { type: 'simple', slug: 'cursor' },
      description: 'AI Code Editor based on VS Code. Cursor 3.3 (May 2026) adds per-subagent model controls.',
      defaultNotes: 'Cursor is used to debug visual issues with its built-in browser, offering integrated preview capabilities.',
      releaseDate: '2023',
      link: 'https://cursor.com/docs',
      variants: [
        { label: 'Composer 2', id: 'composer-2' },
        { label: 'Claude 4.7 Opus', id: 'claude-opus-4-7' },
        { label: 'GPT-5.5', id: 'gpt-5.5' },
        { label: 'GPT-5.4', id: 'gpt-5.4' },
        { label: 'GPT-5.4 mini', id: 'gpt-5.4-mini' },
        { label: 'Gemini 3.1 Pro', id: 'gemini-3-1-pro' },
        { label: 'Gemini 3.1 Flash-Lite', id: 'gemini-3-1-flash-lite' },
        { label: 'Claude 4.6 Sonnet', id: 'claude-sonnet-4-6' },
        { label: 'Claude 4.5 Haiku', id: 'claude-haiku-4-5' },
        { label: 'GPT-5.3-Codex', id: 'gpt-5.3-codex' },
        { label: 'Grok Code', id: 'grok-code' }
      ],
      targetHandle: 'left'
    },
  },
  {
    id: 'tool-claude-app',
    type: 'tool',
    position: { x: 726, y: 1426 }, // 153°
    data: {
      id: 'tool-claude-app',
      label: 'Claude app',
      category: 'ai-ide',
      icon: { type: 'simple', slug: 'claude' },
      description: "Anthropic's desktop coding environment powered by Claude.",
      releaseDate: '2026',
      link: 'https://code.claude.com/docs/en/desktop',
      variants: [
        { label: 'Claude 4.7 Opus', id: 'claude-opus-4-7' },
        { label: 'Claude 4.6 Sonnet', id: 'claude-sonnet-4-6' },
        { label: 'Claude 4.5 Haiku', id: 'claude-haiku-4-5' }
      ],
      targetHandle: 'left',
      isNew: true
    },
  },
  {
    id: 'tool-antigravity',
    type: 'tool',
    position: { x: 278, y: 1576 }, // 170°
    data: { 
      id: 'tool-antigravity',
      label: 'Antigravity', 
      category: 'ai-ide', 
      icon: { type: 'url', src: 'https://antigravity.google/favicon.ico' },
      description: "Google's AI-native IDE.",
      defaultNotes: 'Antigravity is cheap and is used with Gemini 3 for frontend tasks, providing a cost-effective solution for UI development.',
      releaseDate: '2025',
      link: 'https://antigravity.google/',
      variants: [
        { label: 'Antigravity', id: 'antigravity' },
        { label: 'Gemini Native', id: 'gemini-native' }
      ],
      targetHandle: 'top'
    },
  },
  {
    id: 'tool-codex-app',
    type: 'tool',
    position: { x: -195, y: 1588 }, // 187°
    data: { 
      id: 'tool-codex-app',
      label: 'Codex App',
      category: 'ai-ide',
      icon: { type: 'url', src: 'https://developers.openai.com/favicon.svg' },
      description: "OpenAI's coding environment. Now powered by GPT-5.5 (Apr 2026) with native computer-use and 1M context.",
      releaseDate: '2026',
      link: 'https://developers.openai.com/codex/app',
      variants: [
        { label: 'GPT-5.5', id: 'gpt-5.5' },
        { label: 'GPT-5.4', id: 'gpt-5.4' },
        { label: 'GPT-5.3-Codex', id: 'gpt-5.3-codex' },
        { label: 'GPT-5.3-Codex-Spark', id: 'gpt-5.3-codex-spark' },
        { label: 'Codex', id: 'codex' }
      ],
      targetHandle: 'top'
    },
  },

  // 5. CLI Agents
  {
    id: 'tool-opencode',
    type: 'tool',
    position: { x: -651, y: 1462 }, // 204°
    data: { 
      id: 'tool-opencode',
      label: 'OpenCode',
      category: 'cli-agent',
      icon: { type: 'url', src: 'https://opencode.ai/favicon.svg' },
      description: 'Open Source AI Coding Agent CLI (v1.14, May 2026). 75+ model providers, BYO model.',
      releaseDate: '2025',
      link: 'https://opencode.ai/docs',
      variants: [
        { label: 'OpenCode CLI', id: 'opencode-cli' }
      ],
      targetHandle: 'top'
    },
  },
  {
    id: 'tool-gemini-cli',
    type: 'tool',
    position: { x: -1050, y: 1208 }, // 221°
    data: { 
      id: 'tool-gemini-cli',
      label: 'Gemini CLI',
      category: 'cli-agent',
      icon: { type: 'simple', slug: 'googlegemini' },
      description: "Google's official terminal agent (v0.41, May 2026). Adds experimental Gemma 4 local model support.",
      releaseDate: '2025',
      link: 'https://google-gemini.github.io/gemini-cli/docs/',
      variants: [
        { label: 'Gemini 3.1 Pro', id: 'gemini-3-1-pro' },
        { label: 'Gemini 3.1 Flash-Lite', id: 'gemini-3-1-flash-lite' },
        { label: 'Gemma 4 (experimental)', id: 'gemma-4-experimental' },
        { label: 'Gemini CLI', id: 'gemini-cli' }
      ],
      targetHandle: 'right',
      isDarker: true
    },
  },
  {
    id: 'tool-codex-cli',
    type: 'tool',
    position: { x: -1357, y: 848 }, // 238°
    data: { 
      id: 'tool-codex-cli',
      label: 'Codex CLI',
      category: 'cli-agent',
      icon: { type: 'url', src: 'https://developers.openai.com/favicon.svg' },
      description: "OpenAI's official terminal agent (v0.130, May 2026). Powered by GPT-5.5 with computer-use and 1M context.",
      releaseDate: '2026',
      link: 'https://developers.openai.com/codex/cli',
      variants: [
        { label: 'GPT-5.5', id: 'gpt-5.5' },
        { label: 'GPT-5.4', id: 'gpt-5.4' },
        { label: 'GPT-5.4 mini', id: 'gpt-5.4-mini' },
        { label: 'GPT-5.3-Codex', id: 'gpt-5.3-codex' },
        { label: 'GPT-5.3-Codex-Spark', id: 'gpt-5.3-codex-spark' },
        { label: 'Codex CLI', id: 'codex-cli' }
      ],
      targetHandle: 'right'
    },
  },
  {
    id: 'tool-claude-code',
    type: 'tool',
    position: { x: -1545, y: 414 }, // 255°
    data: { 
      id: 'tool-claude-code',
      label: 'Claude Code',
      category: 'cli-agent',
      icon: { type: 'simple', slug: 'claude' },
      description: "Anthropic's official terminal agent (v2.1, May 2026). Adds xhigh effort for Opus 4.7 + gateway model discovery.",
      releaseDate: '2025',
      link: 'https://code.claude.com/docs',
      variants: [
        { label: 'Claude 4.7 Opus', id: 'claude-opus-4-7' },
        { label: 'Claude 4.6 Sonnet', id: 'claude-sonnet-4-6' },
        { label: 'Claude 4.5 Haiku', id: 'claude-haiku-4-5' },
        { label: 'Claude Code', id: 'claude-code' }
      ],
      targetHandle: 'right'
    },
  },

  // 6. AI Terminals
  {
    id: 'tool-warp',
    type: 'tool',
    position: { x: -1513, y: -521 }, // 289°
    data: { 
      id: 'tool-warp',
      label: 'Warp',
      category: 'ai-terminal',
      icon: { type: 'simple', slug: 'warp' },
      description: 'AI-powered Terminal. Now open source (Apr 2026); supports Claude Code, Codex, Gemini CLI, OpenCode.',
      defaultNotes: 'Warp is used for generic coding agent for anything in terminal, blending command-line power with AI assistance.',
      releaseDate: '2022',
      link: 'https://docs.warp.dev/',
      variants: [
        { label: 'Warp AI', id: 'warp-ai' }
      ],
      targetHandle: 'right'
    },
  },

  // 7. Assistants
  {
    id: 'tool-hermes',
    type: 'tool',
    position: { x: -1648, y: -840 }, // 297°, r=1850
    data: {
      id: 'tool-hermes',
      label: 'Hermes',
      category: 'assistant',
      icon: { type: 'url', src: 'https://hermes-agent.nousresearch.com/favicon.ico' },
      description: 'Autonomous agent for messenger-style task delegation.',
      releaseDate: '2026',
      link: 'https://hermes-agent.nousresearch.com/',
      variants: [
        { label: 'Hermes Agent', id: 'hermes-agent' }
      ],
      targetHandle: 'right',
      isNew: true
    },
  },
  {
    id: 'tool-openclaw',
    type: 'tool',
    position: { x: -1294, y: -940 }, // 306°
    data: { 
      id: 'tool-openclaw',
      label: 'OpenClaw bot', 
      category: 'assistant', 
      icon: { type: 'url', src: 'https://openclaw.ai/favicon.svg', monochrome: true },
      description: 'OpenClaw Automated Assistant.', 
      defaultNotes: 'Openclaw is used for automatization of many repeatable tasks, acting as a reliable assistant for routine operations.',
      link: 'https://docs.openclaw.ai/',
      releaseDate: '2025',
      targetHandle: 'right'
    },
  },
];

export const initialEdges: Edge[] = [
  // --- Root -> Category Connections ---
  { id: 'e-root-llm', source: 'root-ai', target: 'category-llm-all', sourceHandle: 'source-top', style: { stroke: '#17C964', strokeWidth: 3 } },
  { id: 'e-root-image', source: 'root-ai', target: 'category-image-all', sourceHandle: 'source-top', style: { stroke: '#7828C8', strokeWidth: 3 } },
  { id: 'e-root-video', source: 'root-ai', target: 'category-video-all', sourceHandle: 'source-right', style: { stroke: '#F5A524', strokeWidth: 3 } },
  { id: 'e-root-ide', source: 'root-ai', target: 'category-ai-ide', sourceHandle: 'source-right', style: { stroke: '#006FEE', strokeWidth: 3 } },
  { id: 'e-root-cli', source: 'root-ai', target: 'category-cli-agent', sourceHandle: 'source-bottom', style: { stroke: '#F31260', strokeWidth: 3 } },
  { id: 'e-root-term', source: 'root-ai', target: 'category-ai-terminal', sourceHandle: 'source-left', style: { stroke: '#06B6D4', strokeWidth: 3 } },
  { id: 'e-root-assist', source: 'root-ai', target: 'category-assistants', sourceHandle: 'source-left', style: { stroke: '#EC4899', strokeWidth: 3 } },

  // --- Category -> Tool/Model Connections ---
  // AI IDEs
  { id: 'e-cat-ide-cursor', source: 'category-ai-ide', target: 'tool-cursor', style: { stroke: '#006FEE', strokeWidth: 2 } },
  { id: 'e-cat-ide-claudeapp', source: 'category-ai-ide', target: 'tool-claude-app', style: { stroke: '#006FEE', strokeWidth: 2 } },
  { id: 'e-cat-ide-antigravity', source: 'category-ai-ide', target: 'tool-antigravity', style: { stroke: '#006FEE', strokeWidth: 2 } },
  { id: 'e-cat-ide-codexapp', source: 'category-ai-ide', target: 'tool-codex-app', style: { stroke: '#006FEE', strokeWidth: 2 } },

  // CLI Agents
  { id: 'e-cat-cli-opencode', source: 'category-cli-agent', target: 'tool-opencode', style: { stroke: '#F31260', strokeWidth: 2 } },
  { id: 'e-cat-cli-gemini', source: 'category-cli-agent', target: 'tool-gemini-cli', style: { stroke: '#F31260', strokeWidth: 2 } },
  { id: 'e-cat-cli-codex', source: 'category-cli-agent', target: 'tool-codex-cli', style: { stroke: '#F31260', strokeWidth: 2 } },
  { id: 'e-cat-cli-claude', source: 'category-cli-agent', target: 'tool-claude-code', style: { stroke: '#F31260', strokeWidth: 2 } },

  // AI Terminals
  { id: 'e-cat-term-warp', source: 'category-ai-terminal', target: 'tool-warp', style: { stroke: '#06B6D4', strokeWidth: 2 } },

  // Assistants
  { id: 'e-cat-assistants-hermes', source: 'category-assistants', target: 'tool-hermes', style: { stroke: '#EC4899', strokeWidth: 2 } },
  { id: 'e-cat-assistants-openclaw', source: 'category-assistants', target: 'tool-openclaw', style: { stroke: '#EC4899', strokeWidth: 2 } },

  // LLMs
  { id: 'e-cat-llm-gpt52', source: 'category-llm-all', target: 'model-gpt5-2', style: { stroke: '#17C964', strokeWidth: 2 } },
  { id: 'e-cat-llm-claude-opus', source: 'category-llm-all', target: 'model-claude-4-6-opus', style: { stroke: '#17C964', strokeWidth: 2 } },
  { id: 'e-cat-llm-gemini3', source: 'category-llm-all', target: 'model-gemini-3', style: { stroke: '#17C964', strokeWidth: 2 } },
  { id: 'e-cat-llm-gemma', source: 'category-llm-all', target: 'model-gemma-4', style: { stroke: '#17C964', strokeWidth: 2 } },
  { id: 'e-cat-llm-qwen', source: 'category-llm-all', target: 'model-qwen-3-6', style: { stroke: '#17C964', strokeWidth: 2 } },
  { id: 'e-cat-llm-minimax', source: 'category-llm-all', target: 'model-minimax', style: { stroke: '#17C964', strokeWidth: 2 } },
  { id: 'e-cat-llm-glm', source: 'category-llm-all', target: 'model-glm', style: { stroke: '#17C964', strokeWidth: 2 } },
  { id: 'e-cat-llm-kimi', source: 'category-llm-all', target: 'model-kimi-2-5', style: { stroke: '#17C964', strokeWidth: 2 } },
  { id: 'e-cat-llm-deepseek', source: 'category-llm-all', target: 'model-deepseek-v4', style: { stroke: '#17C964', strokeWidth: 2 } },

  // Image Models
  { id: 'e-cat-image-nano', source: 'category-image-all', target: 'model-nano-banana', style: { stroke: '#7828C8', strokeWidth: 2 } },
  { id: 'e-cat-image-flux', source: 'category-image-all', target: 'model-flux-2', style: { stroke: '#7828C8', strokeWidth: 2 } },
  { id: 'e-cat-image-gpt-image-1-5', source: 'category-image-all', target: 'model-gpt-image-1-5', style: { stroke: '#7828C8', strokeWidth: 2 } },

  // Video Models
  { id: 'e-cat-video-higgsfield', source: 'category-video-all', target: 'model-higgsfield', style: { stroke: '#F5A524', strokeWidth: 2 } },
  { id: 'e-cat-video-kling', source: 'category-video-all', target: 'model-kling-3', style: { stroke: '#F5A524', strokeWidth: 2 } },
  { id: 'e-cat-video-kie', source: 'category-video-all', target: 'model-kie', style: { stroke: '#F5A524', strokeWidth: 2 } },
  { id: 'e-cat-video-veo', source: 'category-video-all', target: 'model-veo-3', style: { stroke: '#F5A524', strokeWidth: 2 } },
  { id: 'e-cat-video-seedance', source: 'category-video-all', target: 'model-seedance-2', style: { stroke: '#F5A524', strokeWidth: 2 } },

  // --- Cross-Link Connections (Optional/Contextual) ---
  // Cursor
  { id: 'e-cursor-gpt52', source: 'tool-cursor', target: 'model-gpt5-2', style: { stroke: '#3b82f6', strokeWidth: 1, strokeDasharray: '5,5', opacity: 0.5 } },
  { id: 'e-cursor-claude45', source: 'tool-cursor', target: 'model-claude-4-6-opus', style: { stroke: '#3b82f6', strokeWidth: 1, strokeDasharray: '5,5', opacity: 0.5 } },
  
  // Antigravity (Google) -> Gemini
  { id: 'e-antigravity-gemini3', source: 'tool-antigravity', target: 'model-gemini-3', style: { stroke: '#3b82f6', strokeWidth: 1, strokeDasharray: '5,5', opacity: 0.5 } },

  // Codex App -> GPT
  { id: 'e-codexapp-gpt52', source: 'tool-codex-app', target: 'model-gpt5-2', style: { stroke: '#3b82f6', strokeWidth: 1, strokeDasharray: '5,5', opacity: 0.5 } },

  // Claude app
  { id: 'e-claudeapp-claude', source: 'tool-claude-app', target: 'model-claude-4-6-opus', style: { stroke: '#3b82f6', strokeWidth: 1, strokeDasharray: '5,5', opacity: 0.5 } },

  // Official CLIs
  { id: 'e-geminicli-gemini', source: 'tool-gemini-cli', target: 'model-gemini-3', style: { stroke: '#3b82f6', strokeWidth: 1, strokeDasharray: '5,5', opacity: 0.5 } },
  { id: 'e-codexcli-gpt', source: 'tool-codex-cli', target: 'model-gpt5-2', style: { stroke: '#3b82f6', strokeWidth: 1, strokeDasharray: '5,5', opacity: 0.5 } },
  { id: 'e-claudecode-claude', source: 'tool-claude-code', target: 'model-claude-4-6-opus', style: { stroke: '#3b82f6', strokeWidth: 1, strokeDasharray: '5,5', opacity: 0.5 } },

  // Open Agents (Connect to many)
  { id: 'e-opencode-gpt52', source: 'tool-opencode', target: 'model-gpt5-2', style: { stroke: '#3b82f6', strokeWidth: 1, strokeDasharray: '5,5', opacity: 0.5 } },
];
