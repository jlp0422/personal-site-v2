'use client';

import { Project } from '@/types';
import { PixelBorder } from '@/components/arcade';
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

  const borderColor = featured ? 'yellow' : 'cyan';

  return (
    <PixelBorder
      color={borderColor}
      className={cn(
        'bg-deepBlack p-6 h-full flex flex-col transition-all duration-300',
        'hover:shadow-neonStrong hover:-translate-y-1',
        className
      )}
      style={{
        borderColor: arcadeTheme.primaryColor,
      }}
    >
      {/* Header */}
      <div className="mb-4">
        {featured && (
          <div className="text-xs font-pixel text-neonYellow mb-2 animate-blink">
            ⭐ FEATURED
          </div>
        )}

        <div className="flex items-start justify-between gap-4 mb-2">
          <h3
            className="font-pixel text-lg leading-relaxed"
            style={{ color: arcadeTheme.primaryColor }}
          >
            {title}
          </h3>
          <span className="text-2xl flex-shrink-0" aria-hidden="true">
            {arcadeTheme.icon}
          </span>
        </div>

        <div className="font-arcade text-base text-screenGreen/70 mb-3">
          {year}
        </div>
      </div>

      {/* Description */}
      <div className="flex-1 mb-4">
        <p className="text-sm text-screenGreen/90 leading-relaxed mb-3">
          {longDescription || description}
        </p>
      </div>

      {/* Tags */}
      {tags && tags.length > 0 && (
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs px-2 py-1 font-arcade"
                style={{
                  borderWidth: '1px',
                  borderColor: arcadeTheme.secondaryColor,
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
      <div className="flex gap-4 pt-4 border-t border-screenGreen/20">
        {githubUrl && (
          <GithubLink
            href={githubUrl}
            className="text-sm"
            style={{ color: arcadeTheme.primaryColor }}
          />
        )}
        {liveUrl && (
          <LiveLink
            href={liveUrl}
            text={liveUrl.includes('youtube') ? 'Video' : 'Live Site'}
            className="text-sm"
            style={{ color: arcadeTheme.secondaryColor }}
          />
        )}
      </div>
    </PixelBorder>
  );
}
