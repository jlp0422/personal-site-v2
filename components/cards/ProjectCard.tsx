'use client';

import { Project } from '@/types';
import { GithubLink, LiveLink } from '@/components/shared';
import { cn } from '@/lib/utils';

export interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const {
    title,
    description,
    longDescription,
    tags,
    year,
    featured,
    githubUrl,
    liveUrl,
    arcadeTheme,
  } = project;

  // Convert hex to rgba for shadows
  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const shadowColor = hexToRgba(arcadeTheme.primaryColor, 0.4);

  return (
    <div
      className={cn(
        'p-6 h-full flex flex-col transition-all duration-300 relative overflow-hidden',
        'hover:-translate-y-2',
        className
      )}
      style={{
        background: 'var(--color-foreground)',
        border: `4px solid ${arcadeTheme.primaryColor}`,
        boxShadow: `8px 8px 0px ${shadowColor}`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `12px 12px 0px ${shadowColor}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = `8px 8px 0px ${shadowColor}`;
      }}
    >
      {/* Decorative shape in corner */}
      <div
        className="absolute top-0 right-0 w-16 h-16 opacity-10"
        style={{
          backgroundColor: arcadeTheme.secondaryColor,
          clipPath: featured
            ? 'polygon(100% 0, 0 0, 100% 100%)'
            : 'polygon(50% 0%, 0% 100%, 100% 100%)'
        }}
      ></div>

      {/* Header */}
      <div className="mb-4 relative z-10">
        {featured && (
          <div className="inline-block px-3 py-1 mb-3 text-white text-xs font-heading"
               style={{ backgroundColor: arcadeTheme.primaryColor }}>
            ⭐ FEATURED
          </div>
        )}

        <div className="flex items-start justify-between gap-4 mb-2">
          <h3
            className="font-heading text-xl leading-tight"
            style={{ color: arcadeTheme.primaryColor }}
          >
            {title}
          </h3>
          <span className="text-3xl flex-shrink-0" aria-hidden="true">
            {arcadeTheme.icon}
          </span>
        </div>

        <div className="font-body text-sm font-semibold mb-3" style={{ color: 'var(--color-textMuted)' }}>
          {year}
        </div>
      </div>

      {/* Description */}
      <div className="flex-1 mb-4">
        <p className="text-sm leading-relaxed font-body" style={{ color: 'var(--color-text)' }}>
          {longDescription || description}
        </p>
      </div>

      {/* Tags */}
      {tags && tags.length > 0 && (
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 4).map((tag, idx) => (
              <span
                key={idx}
                className="text-xs px-2 py-1 font-body"
                style={{
                  border: `2px solid ${arcadeTheme.secondaryColor}`,
                  color: arcadeTheme.secondaryColor,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Links */}
      <div className="flex gap-3 pt-4 border-t-2 border-dashed" style={{ borderColor: 'rgba(0, 0, 0, 0.1)' }}>
        {githubUrl && (
          <GithubLink
            href={githubUrl}
            className="text-xs font-body"
            style={{ color: arcadeTheme.primaryColor }}
          />
        )}
        {liveUrl && (
          <LiveLink
            href={liveUrl}
            text={liveUrl.includes('youtube') ? 'Video' : 'Live'}
            className="text-xs font-body"
            style={{ color: arcadeTheme.secondaryColor }}
          />
        )}
      </div>
    </div>
  );
}
