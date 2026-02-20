import { OutboundLink, OutboundLinkProps } from './OutboundLink';
import { cn } from '@/lib/utils';

export interface LiveLinkProps extends Omit<OutboundLinkProps, 'children'> {
  showIcon?: boolean;
  text?: string;
}

export function LiveLink({
  showIcon = true,
  text = 'Live Site',
  className,
  ...props
}: LiveLinkProps) {
  return (
    <OutboundLink
      variant="neon"
      className={cn('font-arcade inline-flex items-center gap-2', className)}
      {...props}
    >
      {showIcon && <span aria-hidden="true">{'▶'}</span>}
      <span>{text}</span>
    </OutboundLink>
  );
}
