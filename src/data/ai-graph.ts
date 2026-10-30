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
    position: { x: 0, y: -900 }, // 0°, r=900
    data: { id: 'category-llm-all', label: 'LLMs', category: 'llm', description: 'All Large Language Models', targetHandle: 'bottom', sourceHandle: 'top' },
  },
  // 2. Image Models (Top-Right, 70°)
  {
    id: 'category-image-all',
    type: 'image',
    position: { x: 846, y: -308 }, // 70°, r=900
    data: { id: 'category-image-all', label: 'Image Models', category: 'image', description: 'Image Generation Models', targetHandle: 'left', sourceHandle: 'right' },
  },
  // 3. Video Models (Bottom-Right, 120°)
  {
    id: 'category-video-all',
    type: 'video',
    position: { x: 779, y: 450 }, // 120°, r=900
    data: { id: 'category-video-all', label: 'Video Models', category: 'video', description: 'Video Generation Models', targetHandle: 'left', sourceHandle: 'right' },
  },
  // 4. AI Native IDEs (Bottom, 180°)
  {
    id: 'category-ai-ide',
    type: 'ai-ide',
    position: { x: -0.11, y: 900 }, // 180°, r=900
    data: { id: 'category-ai-ide', label: 'AI Native IDEs', category: 'ai-ide', description: 'Standalone Editors', targetHandle: 'top', sourceHandle: 'bottom' },
  },
  // 5. CLI Agents (Bottom-Left, 240°)
  {
    id: 'category-cli-agent',
    type: 'cli-agent',
    position: { x: -779, y: 450 }, // 240°, r=900
    data: { id: 'category-cli-agent', label: 'CLI Agents', category: 'cli-agent', description: 'Terminal-based Agents', targetHandle: 'right', sourceHandle: 'left' },
  },
  // 6. AI Terminals (Left, 280°)
  {
    id: 'category-ai-terminal',
    type: 'ai-terminal',
    position: { x: -886, y: -156 }, // 280°, r=900
    data: { id: 'category-ai-terminal', label: 'AI Terminals', category: 'ai-terminal', description: 'AI-Enhanced Terminals', targetHandle: 'right', sourceHandle: 'left' },
  },
  // 7. Assistants (Top-Left, 300°)
  {
    id: 'category-assistants',
    type: 'assistant',
    position: { x: -779, y: -450 }, // 300°, r=900
    data: { id: 'category-assistants', label: 'Assistants', category: 'assistant', description: 'AI Assistants', targetHandle: 'right', sourceHandle: 'left' },
  },

  // --- Leaf Nodes (Ring 2, staggered radii 1600/2200; 10° slots) ---
  
  // 1. LLMs
  {
    id: 'model-gemma-4',
    type: 'model',
    position: { x: -1131, y: -1131 }, // 315°, r=1600
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
    position: { x: -1262, y: -1802 }, // 325°, r=2200
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
      targetHandle: 'bottom'
    },
  },
  {
    id: 'model-minimax',
    type: 'model',
    position: { x: -676, y: -1450 }, // 335°, r=1600
    data: {
      id: 'model-minimax',
      label: 'MiniMax M3',
      category: 'llm',
      provider: 'MiniMax',
      description: 'M3 is the open-weights multimodal MoE (1M context). M3.1-Flash-Preview (Sep 2026) is the newer coding model, on M Plan and MiniMax Code only.',
      releaseDate: '2026',
      link: 'https://platform.minimax.io/docs/guides/models-intro',
      variants: [
        { label: 'MiniMax-M3.1-Flash-Preview', id: 'MiniMax-M3.1-Flash-Preview' },
        { label: 'MiniMax-M3', id: 'MiniMax-M3' },
        { label: 'MiniMax-M2.7', id: 'MiniMax-M2.7' },
        { label: 'MiniMax-M2.7-highspeed', id: 'MiniMax-M2.7-highspeed' }
      ],
      targetHandle: 'bottom',
      defaultNotes: 'M3.1 Flash Preview remains available only through M Plan and MiniMax Code. MiniMax M2.5 and M2.7 close to new users on Oct 19 2026 and retire on Nov 18; M Plan and Token Plan requests to those names route to M3.1 Flash Preview from Oct 19.',
    },
  },
  {
    id: 'model-claude-4-6-opus',
    type: 'model',
    position: { x: -569, y: -2125 }, // 345°, r=2200
    data: {
      id: 'model-claude-4-6-opus',
      label: 'Claude Fable 5.1',
      category: 'llm',
      provider: 'Anthropic',
      description: 'Anthropic\'s public flagship for demanding reasoning and long-horizon agents (Sep 2026). Opus 5.5 is the recommended default; Sonnet 5.5 is the fast tier, and Haiku 5.5 (Oct 7) adds low-cost adaptive reasoning with 1M context.',
      defaultNotes: 'Claude Fable 5.1 (Sep 1 2026, claude-fable-5-1, $10/$50, 1M context) is the public flagship. Start with Opus 5.5 (Sep 22, claude-opus-5-5, $4/$20); Sonnet 5.5 (Sep 28, claude-sonnet-5-5, $2/$10) is faster. Haiku 5.5 (Oct 7, claude-haiku-5-5) supports adaptive thinking and 1M context for high-volume work; pricing starts at $0.10/$0.50 per million input/output tokens for prompts up to 100K tokens.',
      releaseDate: '2026',
      link: 'https://platform.claude.com/docs/en/models/overview',
      variants: [
        { label: 'Claude Fable 5.1', id: 'claude-fable-5-1' },
        { label: 'Claude Opus 5.5', id: 'claude-opus-5-5' },
        { label: 'Claude Sonnet 5.5', id: 'claude-sonnet-5-5' },
        { label: 'Claude Haiku 5.5', id: 'claude-haiku-5-5' }
      ],
      targetHandle: 'bottom',
      isNew: true
    },
  },
  {
    id: 'model-glm',
    type: 'model',
    position: { x: -139, y: -1594 }, // 355°, r=1600
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
      targetHandle: 'bottom'
    },
  },
  {
    id: 'model-gpt5-2',
    type: 'model',
    position: { x: 192, y: -2192 }, // 5°, r=2200
    data: {
      id: 'model-gpt5-2',
      label: 'GPT-6 Astra',
      category: 'llm',
      provider: 'OpenAI',
      description: 'OpenAI flagship for coding, computer use and agents; 1.05M context. GPT-6.1 Sol adds Ultrafast (Oct 8 2026); GPT-6 Luna supports the beta Decisions API.',
      defaultNotes: 'Oct 2026: GPT-6 Astra remains the flagship ($10/$50 per million input/output tokens). GPT-6.1 Sol is the cost-balanced tier ($2/$10), with Ultrafast added Oct 8. GPT-6 Luna is the high-volume tier ($0.10/$0.50); its beta Decisions API launched Oct 6.',
      releaseDate: '2026',
      link: 'https://developers.openai.com/api/docs/models',
      variants: [
        { label: 'GPT-6 Astra', id: 'gpt-6-astra' },
        { label: 'GPT-6.1 Sol', id: 'gpt-6.1-sol' },
        { label: 'GPT-6 Sol', id: 'gpt-6-sol' },
        { label: 'GPT-6 Luna', id: 'gpt-6-luna' }
      ],
      targetHandle: 'bottom',
      isNew: true
    },
  },
  {
    id: 'model-gemini-3',
    type: 'model',
    position: { x: 414, y: -1545 }, // 15°, r=1600
    data: {
      id: 'model-gemini-3',
      label: 'Gemini 4 Argon',
      category: 'llm',
      provider: 'Google',
      description: 'Google\'s public flagship (GA Oct 13 2026) for complex coding, agents, math, and science; unified 1M context and optional long decode up to 1M tokens. Gemini 3.8 Flash remains the workhorse, while 3.1 Pro is the preview Pro tier.',
      releaseDate: '2026',
      link: 'https://ai.google.dev/gemini-api/docs/models',
      variants: [
        { label: 'Gemini 4 Argon', id: 'gemini-4-argon' },
        { label: 'Gemini 3.8 Flash', id: 'gemini-3.8-flash' },
        { label: 'Gemini 3.1 Pro', id: 'gemini-3.1-pro-preview' },
        { label: 'Gemini 3.6 Flash', id: 'gemini-3.6-flash' },
        { label: 'Gemini 3.5 Flash-Lite', id: 'gemini-3.5-flash-lite' },
        { label: 'Gemini 3.1 Flash-Lite', id: 'gemini-3.1-flash-lite' },
        { label: 'Gemini Deep Research', id: 'deep-research-preview-04-2026' }
      ],
      targetHandle: 'bottom',
      defaultNotes: 'Argon became generally available Oct 13 2026. Its 1,048,576-token window is shared by input, thinking and output; optional long decode requires background execution. Gemini 3.7 Flash was deprecated Oct 8 and routes to 3.8 Flash.',
      isNew: true,
    },
  },
  {
    id: 'model-deepseek-v4',
    type: 'model',
    position: { x: 930, y: -1994 }, // 25°, r=2200
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
      targetHandle: 'bottom'
    },
  },
  {
    id: 'model-kimi-2-5',
    type: 'model',
    position: { x: 918, y: -1311 }, // 35°, r=1600
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
    position: { x: 1556, y: -1556 }, // 45°, r=2200
    data: {
      id: 'model-grok-4-5',
      label: 'Grok 4.7',
      category: 'llm',
      provider: 'xAI',
      description: "xAI's flagship for coding, agents, and knowledge work (Sep 21 2026); text/image input, 500K context, $2/$6. Default on the API and in Grok Build.",
      releaseDate: '2026',
      link: 'https://docs.x.ai/developers/models',
      variants: [
        { label: 'Grok 4.7', id: 'grok-4.7' },
        { label: 'Grok 4.6', id: 'grok-4.6' }
      ],
      targetHandle: 'bottom',
    },
  },

  // 2. Image
  {
    id: 'model-gpt-image-1-5',
    type: 'model',
    position: { x: 1311, y: -918 }, // 55°, r=1600
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
      targetHandle: 'left'
    },
  },
  {
    id: 'model-nano-banana',
    type: 'model',
    position: { x: 1994, y: -930 }, // 65°, r=2200
    data: {
      id: 'model-nano-banana',
      label: 'Nano Banana 2.1',
      category: 'image',
      provider: 'Google',
      description: 'Image generation and conversational editing (GA Oct 2026), with stronger text rendering, multi-turn consistency, search grounding, and 1K–4K output.',
      releaseDate: '2026',
      link: 'https://ai.google.dev/gemini-api/docs/image-generation',
      variants: [
        { label: 'Nano Banana 2.1', id: 'gemini-nano-banana-2.1' },
        { label: 'Nano Banana Pro', id: 'gemini-3-pro-image' },
        { label: 'Nano Banana 2 Lite', id: 'gemini-3.1-flash-lite-image' }
      ],
      targetHandle: 'left',
      isNew: true,
    },
  },
  {
    id: 'model-flux-2',
    type: 'model',
    position: { x: 1545, y: -414 }, // 75°, r=1600
    data: { 
      id: 'model-flux-2',
      label: 'FLUX 3 Image',
      category: 'image', 
      provider: 'Black Forest Labs', 
      description: 'Unified image generation and editing (Oct 2026), with bounding-box layout control, precise local edits, up to ten references, and 4K output.',
      releaseDate: '2026',
      link: 'https://docs.bfl.ai/flux_3/flux3_image_overview',
      variants: [
        { label: 'FLUX 3 Image', id: 'flux-3-image' },
        { label: 'FLUX.2 [max]', id: 'flux-2-max' },
        { label: 'FLUX.2 [pro]', id: 'flux-2-pro' },
        { label: 'FLUX.2 [flex]', id: 'flux-2-flex' },
        { label: 'FLUX.2 [klein] 9B', id: 'flux-2-klein-9b' },
        { label: 'FLUX.2 [klein] 4B', id: 'flux-2-klein-4b' }
      ],
      targetHandle: 'left',
      isDarker: true,
      isNew: true,
    },
  },
  {
    id: 'model-seedream-5',
    type: 'model',
    position: { x: 2192, y: -192 }, // 85°, r=2200
    data: {
      id: 'model-seedream-5',
      label: 'Seedream 5.0 Pro',
      category: 'image',
      provider: 'ByteDance',
      description: 'Multimodal reasoning for image generation and editing (Pro, Jul 2026), with precise local control and layer decomposition; Flash and Lite round out the 5.0 family.',
      releaseDate: '2026',
      link: 'https://seed.bytedance.com/en/seedream5_0_pro',
      variants: [
        { label: 'Seedream 5.0 Pro', id: 'doubao-seedream-5-0-pro-260628' },
        { label: 'Seedream 5.0 Flash', id: 'doubao-seedream-5-0-flash-260915' },
        { label: 'Seedream 5.0 Lite', id: 'doubao-seedream-5-0-lite-260128' }
      ],
      targetHandle: 'left',
      defaultNotes: 'Model IDs shown are for Volcengine Model Ark; BytePlus uses its dola-* equivalents.',
      isNew: true,
    },
  },

  // 3. Video
  {
    id: 'model-higgsfield',
    type: 'model',
    position: { x: 1594, y: 139 }, // 95°, r=1600
    data: {
      id: 'model-higgsfield',
      label: 'Higgsfield',
      category: 'video',
      provider: 'Higgsfield',
      description: 'AI creative suite and model aggregator. Cinema Studio 4.0 (Aug 2026) supports 30-second scenes; Ad Multiplier (Oct 2026) recreates video ads with your assets.',
      releaseDate: '2025',
      link: 'https://higgsfield.ai/',
      variants: [
        { label: 'Cinema Studio 4.0', id: 'higgsfield/cinema-studio/4.0' },
        { label: 'Soul 2.0', id: 'higgsfield-ai/soul/v2/standard' },
        { label: 'Genjutsu Motion Transfer', id: 'higgsfield/genjutsu/motion-transfer/v1.0' }
      ],
      targetHandle: 'left',
      isNew: true,
    },
  },
  {
    id: 'model-kling-3',
    type: 'model',
    position: { x: 2125, y: 569 }, // 105°, r=2200
    data: {
      id: 'model-kling-3',
      label: 'Kling 3.0',
      category: 'video',
      provider: 'Kuaishou',
      description: 'Kling 3.0 is the documented API lineup (Oct 2026). Kling 4.0 Flash has limited early access; full 4.0 rollout and 10-bit HDR remain announced for October.',
      releaseDate: '2026',
      link: 'https://kling.ai/feature/kling-4-ai-video-generation',
      variants: [
        { label: 'Kling 3.0', id: 'kling-v3' },
        { label: 'Kling 3.0 Omni', id: 'kling-v3-omni' },
        { label: 'Kling 3.0 Turbo', id: 'kling-3.0-turbo' }
      ],
      targetHandle: 'left',
      defaultNotes: 'Kling 4.0 Flash began limited access Sep 28. Full Kling 4.0 promises 30s clips and up to 10 keyframes, but official pages still call it coming soon; no confirmed public model ID.',
    },
  },
  {
    id: 'model-kie',
    type: 'model',
    position: { x: 1450, y: 676 }, // 115°, r=1600
    data: {
      id: 'model-kie',
      label: 'Kie',
      category: 'video',
      provider: 'Kie.ai',
      description: 'Model aggregator with a unified credit-based API (Oct 2026) for video, image, and music generation, including Veo 3.1, Kling 3.0, Seedance 2.5, and MiniMax H3.',
      releaseDate: '2026',
      link: 'https://docs.kie.ai/',
      variants: [
        { label: 'Veo 3.1 API', id: 'veo-3-1' },
        { label: 'Kling 3.0 API', id: 'kling-3.0/video' },
        { label: 'Seedance 2.5 API', id: 'bytedance/seedance-2-5' },
        { label: 'MiniMax H3 Text-to-Video API', id: 'minimax-h3/text-to-video' }
      ],
      targetHandle: 'left'
    },
  },
  {
    id: 'model-veo-3',
    type: 'model',
    position: { x: 1802, y: 1262 }, // 125°, r=2200
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
    position: { x: 1131, y: 1131 }, // 135°, r=1600
    data: {
      id: 'model-seedance-2',
      label: 'Seedance 2.5',
      category: 'video',
      provider: 'ByteDance',
      description: 'One-take audio-video (Jul 2026): 30s per pass with multi-round extend; up to 30 images / 10 videos / 10 audios as references.',
      releaseDate: '2026',
      link: 'https://seed.bytedance.com/seedance2_5',
      variants: [
        { label: 'Seedance 2.5', id: 'dreamina-seedance-2-5-260628' },
        { label: 'Seedance 2.0', id: 'dreamina-seedance-2-0-260128' },
        { label: 'Seedance 2.0 Fast', id: 'dreamina-seedance-2-0-fast-260128' }
      ],
      targetHandle: 'left'
    },
  },
  {
    id: 'model-minimax-h3',
    type: 'model',
    position: { x: 1262, y: 1802 }, // 145°, r=2200
    data: {
      id: 'model-minimax-h3',
      label: 'MiniMax H3',
      category: 'video',
      provider: 'MiniMax',
      description: 'Open multimodal video model (Jul 2026): text/image/video/audio in, native stereo audio out, up to 15s at 2K. H3 Max is the faster fal.ai post-train.',
      releaseDate: '2026',
      link: 'https://www.minimax.io/blog/minimax-h3',
      variants: [
        { label: 'MiniMax H3', id: 'MiniMax-H3' },
        { label: 'MiniMax H3 Max', id: 'MiniMax-H3-Max' }
      ],
      targetHandle: 'left'
    },
  },

  // 4. AI IDEs
  {
    id: 'tool-cursor',
    type: 'tool',
    position: { x: 676, y: 1450 }, // 155°, r=1600
    data: { 
      id: 'tool-cursor',
      label: 'Cursor',
      category: 'ai-ide',
      icon: { type: 'simple', slug: 'cursor' },
      description: 'AI code editor with Composer 2.5 and multi-provider models. Oct 6, 2026 adds iOS remote control for local agents; Projects delegates long-running work to cloud agents.',
      defaultNotes: 'Cursor is used to debug visual issues with its built-in browser. Projects maintain shared context across months of work; iOS remote control reaches local agents while their computer stays online. Haiku 5.5 and Gemini 4 Argon are confirmed in the current model catalog; availability of every existing GPT-6 entry is not independently confirmed.',
      releaseDate: '2023',
      link: 'https://cursor.com/docs',
      variants: [
        { label: 'Composer 2.5', id: 'composer-2.5' },
        { label: 'GPT-6 Astra', id: 'gpt-6-astra' },
        { label: 'GPT-6.1 Sol', id: 'gpt-6.1-sol' },
        { label: 'Claude Fable 5.1', id: 'claude-fable-5-1' },
        { label: 'Claude Opus 5.5', id: 'claude-opus-5-5' },
        { label: 'Claude Sonnet 5.5', id: 'claude-sonnet-5-5' },
        { label: 'Gemini 3.8 Flash', id: 'gemini-3.8-flash' },
        { label: 'Gemini 3.1 Pro', id: 'gemini-3.1-pro-preview' },
        { label: 'Grok 4.7', id: 'grok-4.7' },
        { label: 'Claude Haiku 5.5', id: 'claude-haiku-5-5' },
        { label: 'Gemini 4 Argon', id: 'gemini-4-argon' }
      ],
      targetHandle: 'left',
      isNew: true
    },
  },
  {
    id: 'tool-claude-app',
    type: 'tool',
    position: { x: 569, y: 2125 }, // 165°, r=2200
    data: {
      id: 'tool-claude-app',
      label: 'Claude app',
      category: 'ai-ide',
      icon: { type: 'simple', slug: 'claude' },
      description: 'Anthropic desktop coding environment with local, cloud, and SSH sessions. Fable 5.1, Opus 5.5, Sonnet 5.5, and Haiku 5.5 (Oct 2026).',
      releaseDate: '2026',
      link: 'https://code.claude.com/docs/en/desktop',
      variants: [
        { label: 'Claude Fable 5.1', id: 'claude-fable-5-1' },
        { label: 'Claude Opus 5.5', id: 'claude-opus-5-5' },
        { label: 'Claude Sonnet 5.5', id: 'claude-sonnet-5-5' },
        { label: 'Claude Haiku 5.5', id: 'claude-haiku-5-5' }
      ],
      targetHandle: 'left',
      isNew: true
    },
  },
  {
    id: 'tool-antigravity',
    type: 'tool',
    position: { x: 139, y: 1594 }, // 175°, r=1600
    data: { 
      id: 'tool-antigravity',
      label: 'Antigravity', 
      category: 'ai-ide', 
      icon: { type: 'url', src: 'https://antigravity.google/favicon.ico' },
      description: 'Google\'s AI-native IDE (v2.5.5, Aug 2026). Runs Gemini 3.8 Flash and Claude Opus/Sonnet 5.5; Gemini 3.1 Pro is Enterprise-only.',
      defaultNotes: 'Gemini 4 Argon works in the separate Antigravity 2.0 workspace, CLI, and IDE extensions, but not the dedicated IDE. Claude 5.5 requires Pro (non-trial), Ultra, or Enterprise.',
      releaseDate: '2025',
      link: 'https://antigravity.google/',
      variants: [
        { label: 'Gemini 3.8 Flash', id: 'gemini-3.8-flash' },
        { label: 'Claude Opus 5.5', id: 'claude-opus-5-5' },
        { label: 'Claude Sonnet 5.5', id: 'claude-sonnet-5-5' },
        { label: 'Gemini 3.1 Pro', id: 'gemini-3.1-pro-preview' },
        { label: 'Antigravity IDE', id: 'antigravity' }
      ],
      targetHandle: 'top'
    },
  },
  {
    id: 'tool-codex-app',
    type: 'tool',
    position: { x: -192, y: 2192 }, // 185°, r=2200
    data: { 
      id: 'tool-codex-app',
      label: 'Codex App',
      category: 'ai-ide',
      icon: { type: 'url', src: 'https://developers.openai.com/favicon.svg' },
      description: "OpenAI's coding workspace in the ChatGPT desktop app on macOS and Windows. GPT-6.1 Sol Ultrafast became available on eligible plans in Oct 2026.",
      releaseDate: '2026',
      link: 'https://learn.chatgpt.com/docs/app',
      variants: [
        { label: 'GPT-6 Astra', id: 'gpt-6-astra' },
        { label: 'GPT-6.1 Sol', id: 'gpt-6.1-sol' },
        { label: 'GPT-6 Sol', id: 'gpt-6-sol' },
        { label: 'GPT-6 Luna', id: 'gpt-6-luna' }
      ],
      targetHandle: 'top',
      isNew: true
    },
  },
  {
    id: 'tool-orca',
    type: 'tool',
    position: { x: -414, y: 1545 }, // 195°, r=1600
    data: {
      id: 'tool-orca',
      label: 'Orca',
      category: 'ai-ide',
      icon: { type: 'url', src: 'https://www.onorca.dev/favicon.ico' },
      description: 'Agent development environment (v1.4.224, Oct 2026). Parallel CLI agents in git worktrees; managed SSH runtimes, per-automation model arguments, and inline chat visuals.',
      defaultNotes: 'Orca is used to orchestrate coding agents in parallel worktrees. Desktop and mobile expose terminals, browser, diffs, and remote projects; Oct 10 adds managed SSH servers and richer structured chats.',
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
      isNew: true,
    },
  },
  {
    id: 'tool-paseo',
    type: 'tool',
    position: { x: -930, y: 1994 }, // 205°, r=2200
    data: {
      id: 'tool-paseo',
      label: 'Paseo',
      category: 'ai-ide',
      icon: { type: 'url', src: 'https://paseo.sh/favicon.svg' },
      description: 'Self-hosted agent workspace (v0.11.2, Oct 2026). Desktop, mobile, web, and CLI drive local agents; new plugin registry, Antigravity integration, and subscription-usage views.',
      defaultNotes: 'Paseo runs a local daemon that its clients connect to. Oct 7 adds a community plugin registry and usage views; Claude Haiku 5.5 requires Claude Code 2.1.293 or newer.',
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
      isNew: true,
    },
  },

  // 5. CLI Agents
  {
    id: 'tool-opencode',
    type: 'tool',
    position: { x: -918, y: 1311 }, // 215°, r=1600
    data: { 
      id: 'tool-opencode',
      label: 'OpenCode',
      category: 'cli-agent',
      icon: { type: 'url', src: 'https://opencode.ai/favicon.svg' },
      description: 'Open-source coding agent with terminal, desktop, and IDE interfaces; 75+ model providers. Maintained 1.x is v1.19.0 (Oct 2026), with an explicit upgrade path to OpenCode 2.',
      releaseDate: '2025',
      link: 'https://opencode.ai/docs',
      variants: [
        { label: 'OpenCode CLI', id: 'opencode-cli' }
      ],
      targetHandle: 'top',
      isDarker: true,
      defaultNotes: 'OpenCode 1.19.0 adds the OpenCode 2 major-upgrade path and accepts the OpenAI ultrafast service tier. Updates are now requested explicitly rather than installed automatically.',
      isNew: true,
    },
  },
  {
    id: 'tool-antigravity-cli',
    type: 'tool',
    position: { x: -1556, y: 1556 }, // 225°, r=2200
    data: { 
      id: 'tool-antigravity-cli',
      label: 'Antigravity CLI',
      category: 'cli-agent',
      icon: { type: 'url', src: 'https://antigravity.google/favicon.ico' },
      description: 'Google\'s terminal agent (agy, v1.4.11, Oct 2026), with subagents, plugins, remote control, and enhanced diff navigation. Gemini 4 Argon is available on Ultra/Enterprise; Gemini 3.8 Flash is available on every plan.',
      releaseDate: '2026',
      link: 'https://antigravity.google/',
      variants: [
        { label: 'Gemini 4 Argon', id: 'gemini-4-argon' },
        { label: 'Gemini 3.8 Flash', id: 'gemini-3.8-flash' },
        { label: 'Claude Opus 5.5', id: 'claude-opus-5-5' },
        { label: 'Claude Sonnet 5.5', id: 'claude-sonnet-5-5' },
        { label: 'Gemini 3.1 Pro', id: 'gemini-3.1-pro-preview' },
        { label: 'Antigravity CLI', id: 'antigravity-cli' }
      ],
      targetHandle: 'right',
      defaultNotes: 'Gemini 3.1 Pro is Enterprise-only. Claude Opus/Sonnet 5.5 require Pro (non-trial), Ultra, or Enterprise. Gemini 3.7 Flash is deprecated and routes to 3.8 Flash.',
      isNew: true,
    },
  },
  {
    id: 'tool-codex-cli',
    type: 'tool',
    position: { x: -1311, y: 918 }, // 235°, r=1600
    data: { 
      id: 'tool-codex-cli',
      label: 'Codex CLI',
      category: 'cli-agent',
      icon: { type: 'url', src: 'https://developers.openai.com/favicon.svg' },
      description: "OpenAI's terminal agent (v0.162.1, Oct 9 2026), with managed worktrees, task pinning and TUI reliability fixes. GPT-6.1 Sol Ultrafast supports eligible plans.",
      releaseDate: '2026',
      link: 'https://learn.chatgpt.com/docs/codex/cli',
      variants: [
        { label: 'GPT-6 Astra', id: 'gpt-6-astra' },
        { label: 'GPT-6.1 Sol', id: 'gpt-6.1-sol' },
        { label: 'GPT-6 Sol', id: 'gpt-6-sol' },
        { label: 'GPT-6 Luna', id: 'gpt-6-luna' },
        { label: 'Codex CLI', id: 'codex-cli' }
      ],
      targetHandle: 'right',
      isDarker: true,
      isNew: true
    },
  },
  {
    id: 'tool-claude-code',
    type: 'tool',
    position: { x: -1994, y: 930 }, // 245°, r=2200
    data: { 
      id: 'tool-claude-code',
      label: 'Claude Code',
      category: 'cli-agent',
      icon: { type: 'simple', slug: 'claude' },
      description: 'Anthropic\'s official terminal agent (v2.1.296, Oct 2026). Fable 5.1, Opus 5.5, Sonnet 5.5, and Haiku 5.5; model aliases depend on the provider.',
      releaseDate: '2025',
      link: 'https://code.claude.com/docs',
      variants: [
        { label: 'Claude Fable 5.1', id: 'claude-fable-5-1' },
        { label: 'Claude Opus 5.5', id: 'claude-opus-5-5' },
        { label: 'Claude Sonnet 5.5', id: 'claude-sonnet-5-5' },
        { label: 'Claude Haiku 5.5', id: 'claude-haiku-5-5' },
        { label: 'Claude Code', id: 'claude-code' }
      ],
      targetHandle: 'right',
      isDarker: true,
      isNew: true,
      defaultNotes: 'Haiku 5.5 needs Claude Code 2.1.293 or newer. Anthropic API aliases select the latest models; some third-party providers still resolve Sonnet/Haiku aliases to older versions.',
    },
  },
  {
    id: 'tool-kimi-code',
    type: 'tool',
    position: { x: -1545, y: 414 }, // 255°, r=1600
    data: {
      id: 'tool-kimi-code',
      label: 'Kimi Code CLI',
      category: 'cli-agent',
      icon: { type: 'url', src: 'https://platform.moonshot.ai/favicon.ico' },
      description: 'Moonshot AI\'s open-source terminal agent (kimi, v2.4.0, Oct 2026). Subagents, MCP, video input, Claude Code/Codex session imports, explicit plan review, and ACP integration.',
      releaseDate: '2026',
      link: 'https://github.com/MoonshotAI/kimi-code',
      variants: [
        { label: 'Kimi K3 (Coding API)', id: 'k3' },
        { label: 'Kimi for Coding', id: 'kimi-for-coding' },
        { label: 'Kimi for Coding Highspeed', id: 'kimi-for-coding-highspeed' },
        { label: 'Kimi Code CLI', id: 'kimi-code-cli' }
      ],
      targetHandle: 'right',
      defaultNotes: 'The managed Coding API uses k3, kimi-for-coding, and kimi-for-coding-highspeed. The public Moonshot API uses kimi-k3; provider/model IDs must match the selected endpoint.',
      isNew: true,
    },
  },
  {
    id: 'tool-grok-build',
    type: 'tool',
    position: { x: -2192, y: 192 }, // 265°, r=2200
    data: {
      id: 'tool-grok-build',
      label: 'Grok Build',
      category: 'cli-agent',
      icon: { type: 'url', src: 'https://x.ai/favicon.ico' },
      description: 'xAI\'s open-source terminal coding agent (grok, v1.0.70, Oct 2026; Rust, Apache-2.0). Full-screen TUI, parallel subagents, headless workflows, and ACP; Grok 4.7 remains current.',
      releaseDate: '2026',
      link: 'https://github.com/xai-org/grok-build',
      variants: [
        { label: 'Grok 4.7', id: 'grok-4.7' },
        { label: 'Grok 4.6', id: 'grok-4.6' },
        { label: 'Grok Build', id: 'grok-build' }
      ],
      targetHandle: 'right',
      isNew: true,
      defaultNotes: 'The CLI includes session export, cross-session memory, plugins, managed worktrees, and an agent dashboard.',
    },
  },

  // 6. AI Terminals
  {
    id: 'tool-cmux',
    type: 'tool',
    position: { x: -1594, y: -139 }, // 275°, r=1600
    data: {
      id: 'tool-cmux',
      label: 'Cmux',
      category: 'ai-terminal',
      icon: { type: 'url', src: 'https://cmux.com/favicon.ico' },
      description: 'Ghostty-based native macOS terminal for parallel agents (v0.65.1, Oct 2026; GPL). Vertical tabs, notifications, scriptable browser, restored agent sessions, and an iOS companion beta.',
      releaseDate: '2026',
      link: 'https://cmux.com/',
      variants: [
        { label: 'Cmux', id: 'cmux' }
      ],
      targetHandle: 'right',
      isNew: true,
    },
  },
  {
    id: 'tool-warp',
    type: 'tool',
    position: { x: -2125, y: -569 }, // 285°, r=2200
    data: { 
      id: 'tool-warp',
      label: 'Warp',
      category: 'ai-terminal',
      icon: { type: 'simple', slug: 'warp' },
      description: 'Open-source AI terminal (v0.2026.10.07.08.29, Oct 2026). Third-party agent support now includes Kiro CLI alongside Claude Code, Codex, Gemini CLI, and OpenCode.',
      defaultNotes: 'Warp blends terminal work with agent workflows. Oct 7 adds Kiro CLI support; Oz improves default-runner selection and unattended runs, plus video recording on Windows cloud runners.',
      releaseDate: '2022',
      link: 'https://docs.warp.dev/',
      variants: [
        { label: 'Warp AI', id: 'warp-ai' }
      ],
      targetHandle: 'right',
      isNew: true,
    },
  },

  // 7. Assistants
  {
    id: 'tool-hermes',
    type: 'tool',
    position: { x: -1450, y: -676 }, // 295°, r=1600
    data: {
      id: 'tool-hermes',
      label: 'Hermes',
      category: 'assistant',
      icon: { type: 'url', src: 'https://hermes-agent.nousresearch.com/favicon.ico' },
      description: 'Model-agnostic autonomous agent (v0.21.7, Oct 2026) with persistent memory, desktop app, and messaging gateways. Source installs now follow stable tagged releases by default.',
      releaseDate: '2026',
      link: 'https://hermes-agent.nousresearch.com/',
      variants: [
        { label: 'Hermes Agent', id: 'hermes-agent' }
      ],
      targetHandle: 'right',
      defaultNotes: 'Oct 11 release preserves reasoning across resumed chats and adds stable/main update-channel controls for source installs. Desktop, CLI, Docker, and Hermes Cloud update through their respective channels.',
      isNew: true,
    },
  },
  {
    id: 'tool-openclaw',
    type: 'tool',
    position: { x: -1802, y: -1262 }, // 305°, r=2200
    data: { 
      id: 'tool-openclaw',
      label: 'OpenClaw bot', 
      category: 'assistant', 
      icon: { type: 'url', src: 'https://openclaw.ai/favicon.svg', monochrome: true },
      description: 'Self-hosted multi-channel AI gateway (v2026.10.3, Oct 2026) for Discord, Slack, Telegram, WhatsApp, Signal, and more; persistent agents and scheduled automation.',
      defaultNotes: 'OpenClaw automates repeatable tasks. Oct 13 improves update recovery, preserves credentials and memory during repair, and makes Gateway restarts and resumed agent turns more reliable.',
      link: 'https://docs.openclaw.ai/',
      releaseDate: '2026',
      targetHandle: 'right',
      isNew: true,
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
  { id: 'e-cat-image-seedream', source: 'category-image-all', target: 'model-seedream-5', style: { stroke: '#7828C8', strokeWidth: 2 } },
  { id: 'e-cat-image-gpt-image-1-5', source: 'category-image-all', target: 'model-gpt-image-1-5', style: { stroke: '#7828C8', strokeWidth: 2 } },

  // Video Models
  { id: 'e-cat-video-higgsfield', source: 'category-video-all', target: 'model-higgsfield', style: { stroke: '#F5A524', strokeWidth: 2 } },
  { id: 'e-cat-video-kling', source: 'category-video-all', target: 'model-kling-3', style: { stroke: '#F5A524', strokeWidth: 2 } },
  { id: 'e-cat-video-kie', source: 'category-video-all', target: 'model-kie', style: { stroke: '#F5A524', strokeWidth: 2 } },
  { id: 'e-cat-video-veo', source: 'category-video-all', target: 'model-veo-3', style: { stroke: '#F5A524', strokeWidth: 2 } },
  { id: 'e-cat-video-seedance', source: 'category-video-all', target: 'model-seedance-2', style: { stroke: '#F5A524', strokeWidth: 2 } },
  { id: 'e-cat-video-minimax-h3', source: 'category-video-all', target: 'model-minimax-h3', style: { stroke: '#F5A524', strokeWidth: 2 } },

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
