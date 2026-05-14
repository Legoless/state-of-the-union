import { useMemo, useState, type CSSProperties } from 'react';
import { AppWindow } from 'lucide-react';
import type { AINodeIcon } from '../data/ai-graph';

interface BrandIconProps {
  icon: AINodeIcon;
  label: string;
  tone: 'light' | 'dark';
  size?: 'node' | 'panel';
  className?: string;
}

const sizeStyles = {
  node: {
    wrapper: 'h-20 w-20 p-2 rounded-xl',
    image: 'h-16 w-16 rounded-lg',
    fallback: 44,
  },
  panel: {
    wrapper: 'h-12 w-12 p-2.5 rounded-xl',
    image: 'h-7 w-7 rounded-md',
    fallback: 24,
  },
};

export const BrandIcon = ({ icon, label, tone, size = 'panel', className = '' }: BrandIconProps) => {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const styles = sizeStyles[size];
  const isDarkIcon = tone === 'dark';

  const src = useMemo(() => {
    if (icon.type === 'simple') {
      return `https://cdn.simpleicons.org/${icon.slug}/${isDarkIcon ? '000000' : 'ffffff'}?viewbox=auto`;
    }

    return icon.src;
  }, [icon, isDarkIcon]);

  const failed = failedSrc === src;
  const isNodeIcon = size === 'node';

  const imageStyle: CSSProperties = {
    filter: icon.type === 'url' && icon.monochrome
      ? isDarkIcon
        ? 'brightness(0)'
        : 'brightness(0) invert(1)'
      : undefined,
  };

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center overflow-hidden ${isNodeIcon ? '' : 'border shadow-sm'} ${styles.wrapper} ${className}`}
      style={{
        backgroundColor: isNodeIcon
          ? 'transparent'
          : isDarkIcon
            ? 'rgba(255, 255, 255, 0.55)'
            : 'rgba(0, 0, 0, 0.2)',
        borderColor: isNodeIcon
          ? 'transparent'
          : isDarkIcon
            ? 'rgba(0, 0, 0, 0.08)'
            : 'rgba(255, 255, 255, 0.24)',
        color: isDarkIcon ? '#000000' : '#ffffff',
      }}
    >
      {failed ? (
        <AppWindow size={styles.fallback} strokeWidth={1.8} aria-label={`${label} icon fallback`} />
      ) : (
        <img
          src={src}
          alt={`${label} icon`}
          className={`${styles.image} object-contain`}
          style={imageStyle}
          loading="lazy"
          decoding="async"
          onError={() => setFailedSrc(src)}
        />
      )}
    </span>
  );
};
