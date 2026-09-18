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
  // 4. AI Native IDEs (Bottom-Right, 158.5°)
  {
    id: 'category-ai-ide',
    type: 'ai-ide',
    position: { x: 330, y: 837 },
    data: { id: 'category-ai-ide', label: 'AI Native IDEs', category: 'ai-ide', description: 'Standalone Editors', targetHandle: 'top', sourceHandle: 'bottom' },
  },
  // 5. CLI Agents (Bottom-Left, 229.5°)
  {
    id: 'category-cli-agent',
    type: 'cli-agent',
    position: { x: -684, y: 585 },
    data: { id: 'category-cli-agent', label: 'CLI Agents', category: 'cli-agent', description: 'Terminal-based Agents', targetHandle: 'right', sourceHandle: 'left' },
  },
  // 6. AI Terminals (Top-Left, 284.5°)
  {
    id: 'category-ai-terminal',
    type: 'ai-terminal',
    position: { x: -871, y: -225 },
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
      description: 'Open-weights multimodal family (Apache 2.0), E2B to 31B incl. 26B MoE; up to 256K context, 140+ languages.',
      releaseDate: '2026',
      link: 'https://ai.google.dev/gemma',
      variants: [
        { label: 'Gemma 4 31B', id: 'gemma-4-31B-it' },
        { label: 'Gemma 4 26B MoE', id: 'gemma-4-26B-it' },
        { label: 'Gemma 4 12B', id: 'gemma-4-12B-it' },
        { label: 'Gemma 4 E4B', id: 'gemma-4-E4B-it' },
        { label: 'Gemma 4 E2B', id: 'gemma-4-E2B-it' }
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
      label: 'Qwen 3.8',
      category: 'llm',
      provider: 'Alibaba',
      description: 'Qwen3.8-Max (Aug 2026) is a 2.4T MoE flagship (95B active, 1M context, native vision); first Max-class open weights, plus dense Qwen3.8-27B.',
      releaseDate: '2026',
      link: 'https://qwen.ai/',
      variants: [
        { label: 'Qwen3.8-Max', id: 'qwen3.8-max' },
        { label: 'Qwen3.8-27B', id: 'qwen3.8-27b' },
        { label: 'Qwen3.7-Max', id: 'qwen3.7-max' },
        { label: 'Qwen3.7-Plus', id: 'qwen3.7-plus' }
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
      label: 'MiniMax M3',
      category: 'llm',
      provider: 'MiniMax',
      description: 'Natively multimodal MoE with Sparse Attention and 1M context; frontier coding/agentic. Open weights released June 2026.',
      releaseDate: '2026',
      link: 'https://www.minimax.io/platform',
      variants: [
        { label: 'MiniMax-M3', id: 'MiniMax-M3' },
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
      label: 'Claude Fable 5.1',
      category: 'llm',
      provider: 'Anthropic',
      description: "Anthropic's most capable widely released model (Sep 2026) for long-horizon agents; Opus 5 is the daily coding/enterprise workhorse at half the price.",
      defaultNotes: "Claude Fable 5.1 (Sep 1 2026, $10/$50, 1M context) is Anthropic's Mythos-class public flagship. Opus 5 (Jul 24 2026, $5/$25) is the default in Claude Code and on Claude Max; effort defaults to high.",
      releaseDate: '2026',
      link: 'https://platform.claude.com/docs/en/models/overview',
      variants: [
        { label: 'Claude Fable 5.1', id: 'claude-fable-5-1' },
        { label: 'Claude Opus 5', id: 'claude-opus-5' },
        { label: 'Claude Sonnet 5', id: 'claude-sonnet-5' },
        { label: 'Claude 4.5 Haiku', id: 'claude-haiku-4-5' }
      ],
      targetHandle: 'bottom',
      isNew: true
    },
  },
  {
    id: 'model-glm',
    type: 'model',
    position: { x: -330, y: -1871 }, // 350°, r=1900
    data: {
      id: 'model-glm',
      label: 'GLM 5.3',
      category: 'llm',
      provider: 'Zhipu AI',
      description: 'Open-weights flagship (Aug 2026) for agentic coding; GLM-5.3-Flash is the natively multimodal, low-cost sibling (FlashX at 200 tok/s, Sep 2026).',
      releaseDate: '2026',
      link: 'https://docs.z.ai/',
      variants: [
        { label: 'GLM-5.3', id: 'glm-5.3' },
        { label: 'GLM-5.3-Flash', id: 'glm-5.3-flash' },
        { label: 'GLM-5.3-FlashX', id: 'glm-5.3-flashx' },
        { label: 'GLM-5.2', id: 'glm-5.2' }
      ],
      targetHandle: 'bottom',
      isNew: true
    },
  },
  {
    id: 'model-gpt5-2',
    type: 'model',
    position: { x: 0, y: -1600 }, // 0°
    data: {
      id: 'model-gpt5-2',
      label: 'GPT-6 Astra',
      category: 'llm',
      provider: 'OpenAI',
      description: 'OpenAI flagship for computer use, coding, and long-horizon agents (Sep 2026); 1M context. GPT-5.6 Sol/Terra/Luna remain the cost tiers.',
      defaultNotes: 'GPT-6 Astra (Sep 3 2026, gpt-6-astra, $10/$50) is the API flagship for the hardest end-to-end work. GPT-5.6 Sol stays the price-rational coding workhorse; Terra balances intelligence and cost, Luna is the high-volume tier.',
      releaseDate: '2026',
      link: 'https://developers.openai.com/api/docs/models',
      variants: [
        { label: 'GPT-6 Astra', id: 'gpt-6-astra' },
        { label: 'GPT-5.6 Sol', id: 'gpt-5.6-sol' },
        { label: 'GPT-5.6 Terra', id: 'gpt-5.6-terra' },
        { label: 'GPT-5.6 Luna', id: 'gpt-5.6-luna' }
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
      label: 'Gemini 3.8 Flash',
      category: 'llm',
      provider: 'Google',
      description: 'Current Gemini workhorse (Sep 2026) for long-horizon coding and agents; 3.1 Pro remains the preview Pro tier. 3.5 Pro has not shipped.',
      releaseDate: '2026',
      link: 'https://ai.google.dev/gemini-api/docs/models',
      variants: [
        { label: 'Gemini 3.8 Flash', id: 'gemini-3.8-flash' },
        { label: 'Gemini 3.1 Pro', id: 'gemini-3.1-pro-preview' },
        { label: 'Gemini 3.7 Flash', id: 'gemini-3.7-flash' },
        { label: 'Gemini 3.5 Flash-Lite', id: 'gemini-3.5-flash-lite' },
        { label: 'Gemini 3.1 Flash-Lite', id: 'gemini-3.1-flash-lite' },
        { label: 'Gemini Deep Research', id: 'deep-research-preview-04-2026' }
      ],
      targetHandle: 'bottom',
      isNew: true
    },
  },
  {
    id: 'model-deepseek-v4',
    type: 'model',
    position: { x: 803, y: -1722 }, // 25°, r=1900
    data: {
      id: 'model-deepseek-v4',
      label: 'DeepSeek V4.1 Flash',
      category: 'llm',
      provider: 'DeepSeek',
      description: 'New Causal Encoder–Decoder MoE (Sep 2026) with native vision and 1M context; MIT weights. V4 Pro remains on deepseek-v4-pro.',
      releaseDate: '2026',
      link: 'https://api-docs.deepseek.com/',
      variants: [
        { label: 'DeepSeek-V4.1 Flash', id: 'deepseek-flash' },
        { label: 'DeepSeek-V4 Pro', id: 'deepseek-v4-pro' }
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
      label: 'Kimi K3',
      category: 'llm',
      provider: 'Moonshot AI',
      description: 'Open-weights 2.8T-param MoE, multimodal with 1M context; #1 on WebDev Arena. Launched Jul 16, 2026; weights released Jul 27.',
      releaseDate: '2026',
      link: 'https://platform.kimi.ai/docs',
      variants: [
        { label: 'Kimi K3', id: 'kimi-k3' },
        { label: 'Kimi K2.7-Code', id: 'kimi-k2.7-code' },
        { label: 'Kimi K2.6', id: 'kimi-k2.6' }
      ],
      targetHandle: 'bottom'
    },
  },
  {
    id: 'model-grok-4-5',
    type: 'model',
    position: { x: 1271, y: -1412 }, // 42°, r=1900
    data: {
      id: 'model-grok-4-5',
      label: 'Grok 4.6',
      category: 'llm',
      provider: 'xAI',
      description: "xAI's flagship for long-running agents, coding, and visual work (Aug 2026); text/image input, 500K context; default in Grok Build and Cursor.",
      releaseDate: '2026',
      link: 'https://docs.x.ai/docs/models',
      variants: [
        { label: 'Grok 4.6', id: 'grok-4.6' },
        { label: 'Grok 4.5', id: 'grok-4.5' }
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
      label: 'GPT Image 2.5',
      category: 'image',
      provider: 'OpenAI',
      description: 'ChatGPT Images 2.5 (Sep 2026): Sunburst for precision edits, Flare for faster everyday generation at ~50% lower latency than Image 2.',
      releaseDate: '2026',
      link: 'https://developers.openai.com/api/docs/guides/image-generation',
      variants: [
        { label: 'GPT Image 2.5 Sunburst', id: 'gpt-image-2.5-sunburst' },
        { label: 'GPT Image 2.5 Flare', id: 'gpt-image-2.5-flare' },
        { label: 'GPT Image 2', id: 'gpt-image-2' }
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
      description: 'Next-gen image generation (GA Feb 2026) with sharper text and editing; low-cost Lite tier added Jun 2026.',
      releaseDate: '2026',
      link: 'https://ai.google.dev/gemini-api/docs/image-generation',
      variants: [
        { label: 'Nano Banana 2', id: 'gemini-3.1-flash-image' },
        { label: 'Nano Banana Pro', id: 'gemini-3-pro-image' },
        { label: 'Nano Banana 2 Lite', id: 'gemini-3.1-flash-lite-image' }
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
      description: 'State-of-the-art visual intelligence (Max, Pro, Flex, Klein).', 
      releaseDate: '2025',
      link: 'https://docs.bfl.ai/flux_2/flux2_overview',
      variants: [
        { label: 'FLUX.2 [max]', id: 'flux-2-max' },
        { label: 'FLUX.2 [pro]', id: 'flux-2-pro' },
        { label: 'FLUX.2 [flex]', id: 'flux-2-flex' },
        { label: 'FLUX.2 [klein]', id: 'flux-2-klein-9b' },
        { label: 'FLUX.2 [dev]', id: 'flux-2-dev' }
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
      description: 'Cinematic AI platform; Cinema Studio 3.5 (May 2026) adds optical-physics camera controls. Aggregates Veo 3.1, Kling 3.0, Seedance 2.0, Soul 2.0.',
      releaseDate: '2025',
      link: 'https://higgsfield.ai/',
      variants: [
        { label: 'Cinema Studio 3.5', id: 'higgsfield-cinema-studio' },
        { label: 'Soul 2.0', id: 'higgsfield-soul-2' },
        { label: 'Soul Cinema', id: 'higgsfield-soul-cinema' },
        { label: 'Higgsfield DOP', id: 'higgsfield-dop' },
        { label: 'Keyframes', id: 'higgsfield-keyframes' }
      ],
      targetHandle: 'left'
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
      description: 'Cinematic video generation with strong motion coherence. 1080p/720p, native audio modes; fast low-cost Turbo tier added Jun 2026.',
      releaseDate: '2026',
      link: 'https://app.klingai.com/',
      variants: [
        { label: 'Kling V3 Pro', id: 'kling-v3-pro' },
        { label: 'Kling V3 Standard', id: 'kling-v3-standard' },
        { label: 'Kling V3 Turbo', id: 'kling-v3-turbo' },
        { label: 'Kling V3 Omni Pro', id: 'kling-v3-omni-pro' },
        { label: 'Kling V3 Omni Standard', id: 'kling-v3-omni-std' }
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
      description: 'Unified, credit-based API for top video, image, and music models — Veo 3.1, Runway Aleph, Kling 3.0, Sora 2 Pro, Seedance 2.0 (Jun 2026).',
      releaseDate: '2026',
      link: 'https://kie.ai/',
      variants: [
        { label: 'Veo 3.1 API', id: 'kie-veo-3-1' },
        { label: 'Veo 3.1 Fast API', id: 'kie-veo-3-1-fast' },
        { label: 'Veo 3.1 Lite API', id: 'kie-veo-3-1-lite' },
        { label: 'Runway Aleph API', id: 'kie-runway-aleph' },
        { label: 'Runway Gen-4 Turbo API', id: 'kie-runway-gen4-turbo' },
        { label: 'Kling 3.0 API', id: 'kie-kling-3' },
        { label: 'Sora 2 Pro API', id: 'kie-sora-2-pro' },
        { label: 'Seedance 2.0 Fast API', id: 'kie-seedance-2-fast' }
      ],
      targetHandle: 'left'
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
      description: 'Cinematic 4K video with native audio; Veo 3.1 plus Lite. Gemini Omni Flash (Aug 2026) is the fast generate/edit/extend path.',
      defaultNotes: 'Veo 3.1 can create more generic advertising videos, delivering high-quality visuals for commercial use. Omni Flash is the lower-latency Gemini video model.',
      releaseDate: '2026',
      link: 'https://ai.google.dev/gemini-api/docs/video',
      variants: [
        { label: 'Veo 3.1', id: 'veo-3.1-generate-preview' },
        { label: 'Veo 3.1 Lite', id: 'veo-3.1-lite-generate-preview' },
        { label: 'Gemini Omni Flash', id: 'gemini-omni-1.1-flash' }
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
      description: 'Fast, high-fidelity text/image-to-video with synced stereo audio (up to 15s).',
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
      description: 'AI Code Editor based on VS Code. Cursor 3.21 (Sep 2026) adds Projects (coordinator + cloud agents); Composer 2.5 remains the in-house model.',
      defaultNotes: 'Cursor is used to debug visual issues with its built-in browser, offering integrated preview capabilities. Projects (Sep 10 2026) keep shared context across months of work.',
      releaseDate: '2023',
      link: 'https://cursor.com/docs',
      variants: [
        { label: 'Composer 2.5', id: 'composer-2.5' },
        { label: 'GPT-6 Astra', id: 'gpt-6-astra' },
        { label: 'Claude Fable 5.1', id: 'claude-fable-5-1' },
        { label: 'Claude Opus 5', id: 'claude-opus-5' },
        { label: 'GPT-5.6 Sol', id: 'gpt-5.6-sol' },
        { label: 'Gemini 3.8 Flash', id: 'gemini-3.8-flash' },
        { label: 'Gemini 3.1 Pro', id: 'gemini-3.1-pro-preview' },
        { label: 'Claude Sonnet 5', id: 'claude-sonnet-5' },
        { label: 'Grok 4.6', id: 'grok-4.6' }
      ],
      targetHandle: 'left',
      isNew: true
    },
  },
  {
    id: 'tool-claude-app',
    type: 'tool',
    position: { x: 1090, y: 1556 }, // 145°, r=1900
    data: {
      id: 'tool-claude-app',
      label: 'Claude app',
      category: 'ai-ide',
      icon: { type: 'simple', slug: 'claude' },
      description: "Anthropic's desktop coding environment powered by Claude — Fable 5.1 and Opus 5 (Sep 2026).",
      releaseDate: '2026',
      link: 'https://code.claude.com/docs/en/desktop',
      variants: [
        { label: 'Claude Fable 5.1', id: 'claude-fable-5-1' },
        { label: 'Claude Opus 5', id: 'claude-opus-5' },
        { label: 'Claude Sonnet 5', id: 'claude-sonnet-5' },
        { label: 'Claude 4.5 Haiku', id: 'claude-haiku-4-5' }
      ],
      targetHandle: 'left',
      isNew: true
    },
  },
  {
    id: 'tool-antigravity',
    type: 'tool',
    position: { x: 701, y: 1438 }, // 154°
    data: { 
      id: 'tool-antigravity',
      label: 'Antigravity', 
      category: 'ai-ide', 
      icon: { type: 'url', src: 'https://antigravity.google/favicon.ico' },
      description: "Google's AI-native IDE. Agent-first; runs Gemini 3.8 Flash / 3.1 Pro (Sep 2026).",
      defaultNotes: 'Antigravity is cheap and is used with Gemini 3 for frontend tasks, providing a cost-effective solution for UI development.',
      releaseDate: '2025',
      link: 'https://antigravity.google/',
      variants: [
        { label: 'Gemini 3.8 Flash', id: 'gemini-3.8-flash' },
        { label: 'Gemini 3.1 Pro', id: 'gemini-3.1-pro-preview' },
        { label: 'Antigravity', id: 'antigravity' }
      ],
      targetHandle: 'left'
    },
  },
  {
    id: 'tool-codex-app',
    type: 'tool',
    position: { x: 556, y: 1817 }, // 163°, r=1900
    data: { 
      id: 'tool-codex-app',
      label: 'Codex App',
      category: 'ai-ide',
      icon: { type: 'url', src: 'https://developers.openai.com/favicon.svg' },
      description: "OpenAI's coding environment, merged into the ChatGPT desktop app on macOS & Windows. Powered by GPT-6 Astra (Sep 2026) with native computer-use and 1M context.",
      releaseDate: '2026',
      link: 'https://developers.openai.com/codex/app',
      variants: [
        { label: 'GPT-6 Astra', id: 'gpt-6-astra' },
        { label: 'GPT-5.6 Sol', id: 'gpt-5.6-sol' },
        { label: 'GPT-5.6 Terra', id: 'gpt-5.6-terra' },
        { label: 'GPT-5.6 Luna', id: 'gpt-5.6-luna' }
      ],
      targetHandle: 'top',
      isNew: true
    },
  },
  {
    id: 'tool-orca',
    type: 'tool',
    position: { x: 223, y: 1584 }, // 172°
    data: {
      id: 'tool-orca',
      label: 'Orca',
      category: 'ai-ide',
      icon: { type: 'url', src: 'https://www.onorca.dev/favicon.ico' },
      description: 'Agent development environment (v1.4.205, Sep 2026). Isolated git worktrees for parallel Claude Code, Codex, OpenCode, and other CLIs; desktop, CLI, and mobile.',
      defaultNotes: 'Orca is used to orchestrate coding agents in parallel worktrees — fan a prompt across agents, review diffs, and merge the winner.',
      provider: 'Stably',
      releaseDate: '2026',
      link: 'https://www.onorca.dev/',
      variants: [
        { label: 'Orca Desktop', id: 'orca-desktop' },
        { label: 'Orca CLI', id: 'orca-cli' },
        { label: 'Claude Code', id: 'claude-code' },
        { label: 'Codex CLI', id: 'codex-cli' },
        { label: 'OpenCode', id: 'opencode-cli' }
      ],
      targetHandle: 'top',
      isNew: true
    },
  },
  {
    id: 'tool-paseo',
    type: 'tool',
    position: { x: -33, y: 1900 }, // 181°, r=1900
    data: {
      id: 'tool-paseo',
      label: 'Paseo',
      category: 'ai-ide',
      icon: { type: 'url', src: 'https://paseo.sh/favicon.svg' },
      description: 'Self-hosted agent workspace (v0.8.0, Sep 2026). Desktop, Neo, mobile, web, and CLI drive Claude Code, Codex, OpenCode, and others on your machine.',
      defaultNotes: 'Paseo runs a local daemon; desktop/Neo, phone, and web clients connect to it. Agents, terminals, and browsers sit in split panes.',
      provider: 'Paseo',
      releaseDate: '2026',
      link: 'https://paseo.sh/',
      variants: [
        { label: 'Paseo Desktop', id: 'paseo-desktop' },
        { label: 'Paseo Neo', id: 'paseo-neo' },
        { label: 'Paseo CLI', id: 'paseo-cli' },
        { label: 'Claude Code', id: 'claude-code' },
        { label: 'Codex CLI', id: 'codex-cli' }
      ],
      targetHandle: 'top',
      isNew: true
    },
  },

  // 5. CLI Agents
  {
    id: 'tool-opencode',
    type: 'tool',
    position: { x: -726, y: 1426 }, // 207°
    data: { 
      id: 'tool-opencode',
      label: 'OpenCode',
      category: 'cli-agent',
      icon: { type: 'url', src: 'https://opencode.ai/favicon.svg' },
      description: 'Open Source AI Coding Agent CLI (v1.18.31, Sep 2026). 75+ model providers, BYO model.',
      releaseDate: '2025',
      link: 'https://opencode.ai/docs',
      variants: [
        { label: 'OpenCode CLI', id: 'opencode-cli' }
      ],
      targetHandle: 'top'
    },
  },
  {
    id: 'tool-antigravity-cli',
    type: 'tool',
    position: { x: -1117, y: 1537 }, // 216°, r=1900
    data: { 
      id: 'tool-antigravity-cli',
      label: 'Antigravity CLI',
      category: 'cli-agent',
      icon: { type: 'url', src: 'https://antigravity.google/favicon.ico' },
      description: "Google's official terminal agent — Antigravity CLI, the GA successor to Gemini CLI (I/O 2026). Runs Gemini 3.8 Flash / 3.1 Pro; legacy Gemini CLI consumer access ended Jun 18, 2026.",
      releaseDate: '2026',
      link: 'https://antigravity.google/',
      variants: [
        { label: 'Gemini 3.8 Flash', id: 'gemini-3.8-flash' },
        { label: 'Gemini 3.1 Pro', id: 'gemini-3.1-pro-preview' },
        { label: 'Gemini 3.7 Flash', id: 'gemini-3.7-flash' },
        { label: 'Antigravity CLI', id: 'antigravity-cli' }
      ],
      targetHandle: 'right',
      isDarker: true
    },
  },
  {
    id: 'tool-codex-cli',
    type: 'tool',
    position: { x: -1131, y: 1131 }, // 225°
    data: { 
      id: 'tool-codex-cli',
      label: 'Codex CLI',
      category: 'cli-agent',
      icon: { type: 'url', src: 'https://developers.openai.com/favicon.svg' },
      description: "OpenAI's official terminal agent (v0.155.0, Sep 2026). Powered by GPT-6 Astra with computer-use and 1M context.",
      releaseDate: '2026',
      link: 'https://developers.openai.com/codex/cli',
      variants: [
        { label: 'GPT-6 Astra', id: 'gpt-6-astra' },
        { label: 'GPT-5.6 Sol', id: 'gpt-5.6-sol' },
        { label: 'GPT-5.6 Terra', id: 'gpt-5.6-terra' },
        { label: 'GPT-5.6 Luna', id: 'gpt-5.6-luna' },
        { label: 'Codex CLI', id: 'codex-cli' }
      ],
      targetHandle: 'right',
      isNew: true
    },
  },
  {
    id: 'tool-claude-code',
    type: 'tool',
    position: { x: -1537, y: 1117 }, // 234°, r=1900
    data: { 
      id: 'tool-claude-code',
      label: 'Claude Code',
      category: 'cli-agent',
      icon: { type: 'simple', slug: 'claude' },
      description: "Anthropic's official terminal agent (v2.1.276, Sep 2026). Fable 5.1 / Opus 5 with /effort xhigh; Opus 5 is the default.",
      releaseDate: '2025',
      link: 'https://code.claude.com/docs',
      variants: [
        { label: 'Claude Fable 5.1', id: 'claude-fable-5-1' },
        { label: 'Claude Opus 5', id: 'claude-opus-5' },
        { label: 'Claude Sonnet 5', id: 'claude-sonnet-5' },
        { label: 'Claude 4.5 Haiku', id: 'claude-haiku-4-5' },
        { label: 'Claude Code', id: 'claude-code' }
      ],
      targetHandle: 'right',
      isNew: true
    },
  },
  {
    id: 'tool-kimi-code',
    type: 'tool',
    position: { x: -1426, y: 726 }, // 243°
    data: {
      id: 'tool-kimi-code',
      label: 'Kimi Code',
      category: 'cli-agent',
      icon: { type: 'url', src: 'https://platform.moonshot.ai/favicon.ico' },
      description: "Moonshot AI's official terminal agent — open-source (MIT) successor to Kimi CLI (Jul 2026). Subagents, MCP, video input; ACP for Zed/JetBrains.",
      releaseDate: '2026',
      link: 'https://github.com/MoonshotAI/kimi-code',
      variants: [
        { label: 'Kimi K3', id: 'kimi-k3' },
        { label: 'Kimi for Coding', id: 'kimi-for-coding' },
        { label: 'Kimi K2.7-Code', id: 'kimi-k2.7-code' },
        { label: 'Kimi Code CLI', id: 'kimi-code-cli' }
      ],
      targetHandle: 'right'
    },
  },
  {
    id: 'tool-grok-build',
    type: 'tool',
    position: { x: -1807, y: 587 }, // 252°, r=1900
    data: {
      id: 'tool-grok-build',
      label: 'Grok Build',
      category: 'cli-agent',
      icon: { type: 'url', src: 'https://x.ai/favicon.ico' },
      description: "xAI's official terminal agent (Rust; open-sourced Apache-2.0). Full-screen TUI, up to 8 parallel sub-agents; Grok 4.6 by default (Aug 2026).",
      releaseDate: '2026',
      link: 'https://github.com/xai-org/grok-build',
      variants: [
        { label: 'Grok 4.6', id: 'grok-4.6' },
        { label: 'Grok 4.5', id: 'grok-4.5' },
        { label: 'Grok Build', id: 'grok-build' }
      ],
      targetHandle: 'right',
      isNew: true
    },
  },

  // 6. AI Terminals
  {
    id: 'tool-cmux',
    type: 'tool',
    position: { x: -1871, y: -330 }, // 280°, r=1900
    data: {
      id: 'tool-cmux',
      label: 'Cmux',
      category: 'ai-terminal',
      icon: { type: 'url', src: 'https://cmux.com/favicon.ico' },
      description: 'Ghostty-based macOS terminal built for parallel AI coding agents (Feb 2026) — vertical tabs, notification rings, built-in browser pane. Open source (GPL-3).',
      releaseDate: '2026',
      link: 'https://cmux.com/',
      variants: [
        { label: 'Cmux', id: 'cmux' }
      ],
      targetHandle: 'right'
    },
  },
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
      description: 'Self-improving autonomous agent (v0.18.2, Jul 2026) with persistent memory and a native desktop app; messenger-style task delegation. Model-agnostic.',
      releaseDate: '2026',
      link: 'https://hermes-agent.nousresearch.com/',
      variants: [
        { label: 'Hermes Agent', id: 'hermes-agent' }
      ],
      targetHandle: 'right'
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
      description: 'Self-hosted multi-channel AI gateway — message your AI agent from Discord, Slack, Telegram, WhatsApp, Signal & more (Jun 2026).',
      defaultNotes: 'Openclaw is used for automatization of many repeatable tasks, acting as a reliable assistant for routine operations.',
      link: 'https://docs.openclaw.ai/',
      releaseDate: '2026',
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
  { id: 'e-cat-ide-orca', source: 'category-ai-ide', target: 'tool-orca', style: { stroke: '#006FEE', strokeWidth: 2 } },
  { id: 'e-cat-ide-paseo', source: 'category-ai-ide', target: 'tool-paseo', style: { stroke: '#006FEE', strokeWidth: 2 } },

  // CLI Agents
  { id: 'e-cat-cli-opencode', source: 'category-cli-agent', target: 'tool-opencode', style: { stroke: '#F31260', strokeWidth: 2 } },
  { id: 'e-cat-cli-antigravity-cli', source: 'category-cli-agent', target: 'tool-antigravity-cli', style: { stroke: '#F31260', strokeWidth: 2 } },
  { id: 'e-cat-cli-codex', source: 'category-cli-agent', target: 'tool-codex-cli', style: { stroke: '#F31260', strokeWidth: 2 } },
  { id: 'e-cat-cli-claude', source: 'category-cli-agent', target: 'tool-claude-code', style: { stroke: '#F31260', strokeWidth: 2 } },
  { id: 'e-cat-cli-kimi-code', source: 'category-cli-agent', target: 'tool-kimi-code', style: { stroke: '#F31260', strokeWidth: 2 } },
  { id: 'e-cat-cli-grok-build', source: 'category-cli-agent', target: 'tool-grok-build', style: { stroke: '#F31260', strokeWidth: 2 } },

  // AI Terminals
  { id: 'e-cat-term-cmux', source: 'category-ai-terminal', target: 'tool-cmux', style: { stroke: '#06B6D4', strokeWidth: 2 } },
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
  { id: 'e-cat-llm-grok', source: 'category-llm-all', target: 'model-grok-4-5', style: { stroke: '#17C964', strokeWidth: 2 } },
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

  // Orca / Paseo orchestrate official CLIs
  { id: 'e-orca-claudecode', source: 'tool-orca', target: 'tool-claude-code', style: { stroke: '#3b82f6', strokeWidth: 1, strokeDasharray: '5,5', opacity: 0.5 } },
  { id: 'e-orca-codexcli', source: 'tool-orca', target: 'tool-codex-cli', style: { stroke: '#3b82f6', strokeWidth: 1, strokeDasharray: '5,5', opacity: 0.5 } },
  { id: 'e-paseo-claudecode', source: 'tool-paseo', target: 'tool-claude-code', style: { stroke: '#3b82f6', strokeWidth: 1, strokeDasharray: '5,5', opacity: 0.5 } },
  { id: 'e-paseo-codexcli', source: 'tool-paseo', target: 'tool-codex-cli', style: { stroke: '#3b82f6', strokeWidth: 1, strokeDasharray: '5,5', opacity: 0.5 } },

  // Official CLIs
  { id: 'e-antigravitycli-gemini', source: 'tool-antigravity-cli', target: 'model-gemini-3', style: { stroke: '#3b82f6', strokeWidth: 1, strokeDasharray: '5,5', opacity: 0.5 } },
  { id: 'e-codexcli-gpt', source: 'tool-codex-cli', target: 'model-gpt5-2', style: { stroke: '#3b82f6', strokeWidth: 1, strokeDasharray: '5,5', opacity: 0.5 } },
  { id: 'e-claudecode-claude', source: 'tool-claude-code', target: 'model-claude-4-6-opus', style: { stroke: '#3b82f6', strokeWidth: 1, strokeDasharray: '5,5', opacity: 0.5 } },
  { id: 'e-kimicode-kimi', source: 'tool-kimi-code', target: 'model-kimi-2-5', style: { stroke: '#3b82f6', strokeWidth: 1, strokeDasharray: '5,5', opacity: 0.5 } },
  { id: 'e-grokbuild-grok45', source: 'tool-grok-build', target: 'model-grok-4-5', style: { stroke: '#3b82f6', strokeWidth: 1, strokeDasharray: '5,5', opacity: 0.5 } },

  // Open Agents (Connect to many)
  { id: 'e-opencode-gpt52', source: 'tool-opencode', target: 'model-gpt5-2', style: { stroke: '#3b82f6', strokeWidth: 1, strokeDasharray: '5,5', opacity: 0.5 } },
];
