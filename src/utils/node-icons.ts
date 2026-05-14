import type { AINodeData, AINodeIcon } from '../data/ai-graph';

const providerIcons: Record<string, AINodeIcon> = {
  Alibaba: { type: 'simple', slug: 'alibabadotcom' },
  Anthropic: { type: 'simple', slug: 'claude' },
  'Black Forest Labs': { type: 'url', src: 'https://docs.bfl.ai/favicon.ico' },
  ByteDance: { type: 'simple', slug: 'bytedance' },
  DeepSeek: { type: 'simple', slug: 'deepseek' },
  Google: { type: 'simple', slug: 'google' },
  Higgsfield: { type: 'url', src: 'https://higgsfield.ai/favicon.ico' },
  'Kie.ai': { type: 'url', src: 'https://kie.ai/favicon.ico' },
  Kuaishou: { type: 'simple', slug: 'kuaishou' },
  MiniMax: { type: 'simple', slug: 'minimax' },
  'Moonshot AI': { type: 'url', src: 'https://platform.moonshot.ai/favicon.ico' },
  OpenAI: { type: 'url', src: 'https://developers.openai.com/favicon.svg' },
  'Zhipu AI': {
    type: 'url',
    src: 'https://docs.z.ai/mintlify-assets/_mintlify/favicons/zhipu-32152247/ksfquWFAc8TQf_Hb/_generated/favicon-dark/favicon-32x32.png',
  },
};

export const getNodeIcon = (node: AINodeData): AINodeIcon | undefined => {
  if (node.icon) {
    return node.icon;
  }

  return node.provider ? providerIcons[node.provider] : undefined;
};
