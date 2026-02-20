'use client';

import { Experience } from '@/types';
import { FlipCard } from '@/components/animations';
import { PixelBorder } from '@/components/arcade';
import { cn } from '@/lib/utils';

export interface ExperienceCardProps {
  experience: Experience;
  className?: string;
}

export function ExperienceCard({ experience, className }: ExperienceCardProps) {
  const {
    title,
    company,
    location,
    startDate,
    endDate,
    description,
    details,
    skills,
    arcadeRank,
  } = experience;

  const front = (
    <PixelBorder
      color="pink"
      className="h-full bg-deepBlack p-6 flex flex-col justify-between hover:shadow-neonStrong transition-shadow"
    >
      <div>
        {arcadeRank && (
          <div className="text-xs font-pixel text-neonYellow mb-2 animate-blink">
            {arcadeRank}
          </div>
        )}
        <h3 className="font-pixel text-lg text-neonPink mb-2 leading-relaxed">
          {title}
        </h3>
        <div className="font-arcade text-xl text-neonCyan mb-1">
          {company}
        </div>
        <div className="font-arcade text-lg text-screenGreen/70 mb-3">
          {location}
        </div>
        <div className="font-arcade text-base text-coinGold">
          {startDate} - {endDate}
        </div>
      </div>
      <div className="mt-4 text-center">
        <span className="text-xs font-pixel text-screenGreen/50 animate-pulse">
          [ CLICK TO FLIP ]
        </span>
      </div>
    </PixelBorder>
  );

  const back = (
    <PixelBorder
      color="cyan"
      className="h-full bg-deepBlack/95 p-6 overflow-y-auto"
    >
      <div className="mb-4">
        <p className="text-sm text-screenGreen/90 leading-relaxed">
          {description}
        </p>
      </div>

      {details.length > 0 && (
        <ul className="space-y-2 mb-4">
          {details.map((detail, idx) => (
            <li key={idx} className="text-sm text-screenGreen/80 flex gap-2">
              <span className="text-neonPink mt-1 flex-shrink-0">▸</span>
              <span className="leading-relaxed">{detail}</span>
            </li>
          ))}
        </ul>
      )}

      {skills && skills.length > 0 && (
        <div className="mt-4 pt-4 border-t border-neonCyan/30">
          <div className="text-xs font-pixel text-neonCyan mb-2">SKILLS:</div>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className="text-xs px-2 py-1 border border-screenGreen/50 text-screenGreen font-arcade"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="mt-4 text-center">
        <span className="text-xs font-pixel text-screenGreen/50 animate-pulse">
          [ CLICK TO FLIP ]
        </span>
      </div>
    </PixelBorder>
  );

  return (
    <FlipCard
      front={front}
      back={back}
      className={cn('h-96', className)}
    />
  );
}
