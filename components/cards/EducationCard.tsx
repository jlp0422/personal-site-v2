'use client';

import { Education } from '@/types';
import { FlipCard } from '@/components/animations';
import { PixelBorder } from '@/components/arcade';
import { cn } from '@/lib/utils';

export interface EducationCardProps {
  education: Education;
  className?: string;
}

export function EducationCard({ education, className }: EducationCardProps) {
  const {
    school,
    degree,
    field,
    location,
    startDate,
    endDate,
    description,
    achievements,
    arcadeRank,
  } = education;

  const front = (
    <PixelBorder
      color="cyan"
      className="h-full bg-deepBlack p-6 flex flex-col justify-between hover:shadow-neonStrong transition-shadow"
    >
      <div>
        {arcadeRank && (
          <div className="text-xs font-pixel text-neonYellow mb-2 animate-blink">
            {arcadeRank}
          </div>
        )}
        <h3 className="font-pixel text-lg text-neonCyan mb-2 leading-relaxed">
          {school}
        </h3>
        <div className="font-arcade text-xl text-neonPink mb-1">
          {degree}
        </div>
        <div className="font-arcade text-lg text-screenGreen mb-3">
          {field}
        </div>
        <div className="font-arcade text-base text-screenGreen/70 mb-1">
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
      color="purple"
      className="h-full bg-deepBlack/95 p-6 overflow-y-auto"
    >
      {description && (
        <div className="mb-4">
          <p className="text-sm text-screenGreen/90 leading-relaxed">
            {description}
          </p>
        </div>
      )}

      {achievements && achievements.length > 0 && (
        <div>
          <div className="text-xs font-pixel text-neonCyan mb-3">
            ACHIEVEMENTS:
          </div>
          <ul className="space-y-2">
            {achievements.map((achievement, idx) => (
              <li key={idx} className="text-sm text-screenGreen/80 flex gap-2">
                <span className="text-neonPink mt-1 flex-shrink-0">▸</span>
                <span className="leading-relaxed">{achievement}</span>
              </li>
            ))}
          </ul>
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
