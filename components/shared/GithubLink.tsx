import { OutboundLink, OutboundLinkProps } from './OutboundLink';
import { cn } from '@/lib/utils';

export interface GithubLinkProps extends Omit<OutboundLinkProps, 'children'> {
  showIcon?: boolean;
  text?: string;
}

export function GithubLink({
  showIcon = true,
  text = 'GitHub',
  className,
  ...props
}: GithubLinkProps) {
  return (
    <OutboundLink
      variant="neon"
      className={cn('font-arcade inline-flex items-center gap-2', className)}
      {...props}
    >
      {showIcon && <span aria-hidden="true">{'</>'}</span>}
      <span>{text}</span>
    </OutboundLink>
  );
}
