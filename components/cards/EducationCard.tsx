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
  const borderColor = isPrimary ? 'var(--color-accent2)' : 'var(--color-accent3)';
  const bgColor = isPrimary ? 'var(--color-accent2)' : 'var(--color-accent3)';
  const textColor = isPrimary ? 'var(--color-accent2)' : 'var(--color-accent3)';
  const shadowColor = isPrimary ? 'rgba(255, 217, 61, 0.4)' : 'rgba(0, 217, 255, 0.4)';

  const front = (
    <div
      className="h-full p-6 flex flex-col justify-between relative overflow-hidden"
      style={{
        background: 'var(--color-foreground)',
        border: `4px solid ${borderColor}`,
        boxShadow: `10px 10px 0px ${shadowColor}`
      }}
    >
      {/* Decorative geometric shape */}
      <div className="absolute bottom-0 left-0 w-24 h-24 opacity-10"
           style={{ background: bgColor, clipPath: 'polygon(0 100%, 100% 100%, 0 0)' }}></div>

      <div>
        <div className="inline-block px-3 py-1 mb-3 text-white text-xs font-heading"
             style={{ background: bgColor }}>
          {startDate} - {endDate}
        </div>
        <h3 className="font-heading text-xl mb-2 leading-tight" style={{ color: textColor }}>
          {school}
        </h3>
        <div className="font-body text-lg font-semibold mb-1" style={{ color: 'var(--color-text)' }}>
          {degree}
        </div>
        <div className="font-body text-base mb-2" style={{ color: 'var(--color-primary)' }}>
          {field}
        </div>
        <div className="font-body text-sm" style={{ color: 'var(--color-textMuted)' }}>
          {location}
        </div>
      </div>

      <div className="mt-4 text-center relative z-10">
        <span className="text-xs font-body" style={{ color: 'var(--color-textMuted)' }}>
          👆 Click for more info
        </span>
      </div>
    </div>
  );

  const back = (
    <div
      className="h-full p-6 overflow-y-auto"
      style={{
        background: 'var(--color-foreground)',
        border: '4px solid var(--color-text)',
        boxShadow: `10px 10px 0px ${shadowColor}`
      }}
    >
      {description && (
        <div className="mb-4 pb-4 border-b-2 border-dashed" style={{ borderColor: 'rgba(0, 0, 0, 0.2)' }}>
          <p className="text-sm leading-relaxed font-body" style={{ color: 'var(--color-text)' }}>
            {description}
          </p>
        </div>
      )}

      {achievements && achievements.length > 0 && (
        <div>
          <div className="text-xs font-heading mb-3" style={{ color: textColor }}>
            HIGHLIGHTS:
          </div>
          <ul className="space-y-2">
            {achievements.map((achievement, idx) => (
              <li key={idx} className="text-sm flex gap-2 font-body" style={{ color: 'var(--color-text)' }}>
                <span className="mt-1 flex-shrink-0" style={{ color: textColor }}>●</span>
                <span className="leading-relaxed">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-4 text-center">
        <span className="text-xs font-body" style={{ color: 'var(--color-textMuted)' }}>
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
