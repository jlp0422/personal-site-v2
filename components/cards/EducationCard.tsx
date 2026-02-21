'use client';

import { Education } from '@/types';
import { FlipCard } from '@/components/animations';
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
  } = education;

  // Fun alternating colors for education
  const isPrimary = education.id.includes('fullstack');
  const borderColor = isPrimary ? 'border-sbtbYellow' : 'border-sbtbCyan';
  const bgColor = isPrimary ? 'bg-sbtbYellow' : 'bg-sbtbCyan';
  const textColor = isPrimary ? 'text-sbtbYellow' : 'text-sbtbCyan';
  const shadowColor = isPrimary ? 'rgba(255, 217, 61, 0.4)' : 'rgba(0, 217, 255, 0.4)';

  const front = (
    <div
      className={cn(
        'h-full bg-white p-6 border-4 flex flex-col justify-between relative overflow-hidden',
        borderColor
      )}
      style={{ boxShadow: `10px 10px 0px ${shadowColor}` }}
    >
      {/* Decorative geometric shape */}
      <div className={cn('absolute bottom-0 left-0 w-24 h-24 opacity-10', bgColor)}
           style={{ clipPath: 'polygon(0 100%, 100% 100%, 0 0)' }}></div>

      <div>
        <div className={cn('inline-block px-3 py-1 mb-3 text-white text-xs font-heading', bgColor)}>
          {startDate} - {endDate}
        </div>
        <h3 className={cn('font-heading text-xl mb-2 leading-tight', textColor)}>
          {school}
        </h3>
        <div className="font-body text-lg font-semibold text-darkText mb-1">
          {degree}
        </div>
        <div className="font-body text-base text-sbtbPurple mb-2">
          {field}
        </div>
        <div className="font-body text-sm text-darkText/70">
          {location}
        </div>
      </div>

      <div className="mt-4 text-center relative z-10">
        <span className="text-xs font-body text-darkText/50">
          👆 Click for more info
        </span>
      </div>
    </div>
  );

  const back = (
    <div
      className="h-full bg-white p-6 border-4 border-darkText overflow-y-auto"
      style={{ boxShadow: `10px 10px 0px ${shadowColor}` }}
    >
      {description && (
        <div className="mb-4 pb-4 border-b-2 border-dashed border-darkText/20">
          <p className="text-sm text-darkText leading-relaxed font-body">
            {description}
          </p>
        </div>
      )}

      {achievements && achievements.length > 0 && (
        <div>
          <div className={cn('text-xs font-heading mb-3', textColor)}>
            HIGHLIGHTS:
          </div>
          <ul className="space-y-2">
            {achievements.map((achievement, idx) => (
              <li key={idx} className="text-sm text-darkText/90 flex gap-2 font-body">
                <span className={cn('mt-1 flex-shrink-0', textColor)}>●</span>
                <span className="leading-relaxed">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-4 text-center">
        <span className="text-xs font-body text-darkText/50">
          👆 Click to flip back
        </span>
      </div>
    </div>
  );

  return (
    <FlipCard
      front={front}
      back={back}
      className={cn('h-96', className)}
    />
  );
}
