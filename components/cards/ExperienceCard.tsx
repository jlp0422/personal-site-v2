'use client';

import { Experience } from '@/types';
import { FlipCard } from '@/components/animations';
import { cn } from '@/lib/utils';

export interface ExperienceCardProps {
  experience: Experience;
  className?: string;
}

const cardColors = [
  { borderColor: 'var(--color-primary)', bgColor: 'var(--color-primary)', textColor: 'var(--color-primary)', shadow: 'rgba(155, 89, 182, 0.4)' },
  { borderColor: 'var(--color-secondary)', bgColor: 'var(--color-secondary)', textColor: 'var(--color-secondary)', shadow: 'rgba(255, 107, 157, 0.4)' },
  { borderColor: 'var(--color-accent3)', bgColor: 'var(--color-accent3)', textColor: 'var(--color-accent3)', shadow: 'rgba(0, 217, 255, 0.4)' },
  { borderColor: 'var(--color-accent1)', bgColor: 'var(--color-accent1)', textColor: 'var(--color-accent1)', shadow: 'rgba(255, 140, 66, 0.4)' },
  { borderColor: 'var(--color-accent4)', bgColor: 'var(--color-accent4)', textColor: 'var(--color-accent4)', shadow: 'rgba(78, 142, 247, 0.4)' },
  { borderColor: 'var(--color-accent4)', bgColor: 'var(--color-accent4)', textColor: 'var(--color-accent4)', shadow: 'rgba(107, 207, 127, 0.4)' },
];

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
  } = experience;

  // Use ID to consistently pick a color
  const colorIndex = experience.id.length % cardColors.length;
  const colors = cardColors[colorIndex];

  const front = (
    <div
      className="h-full p-6 flex flex-col justify-between relative overflow-hidden"
      style={{
        background: 'var(--color-foreground)',
        border: `4px solid ${colors.borderColor}`,
        boxShadow: `10px 10px 0px ${colors.shadow}`
      }}
    >
      {/* Single decorative geometric shape - safe without transforms */}
      <div className="absolute top-0 right-0 w-24 h-24 opacity-10"
           style={{ background: colors.bgColor, clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}></div>

      <div>
        {/* Date badge with shadow */}
        <div className="inline-block px-3 py-1 mb-4 text-white text-xs font-heading"
             style={{ background: colors.bgColor, boxShadow: '3px 3px 0px rgba(0, 0, 0, 0.2)' }}>
          {startDate} - {endDate}
        </div>

        {/* Bigger title with text shadow */}
        <h3 className="font-heading text-2xl mb-3 leading-tight"
            style={{ color: colors.textColor, textShadow: `3px 3px 0px ${colors.shadow}` }}>
          {title}
        </h3>

        {/* Company and location with better styling */}
        <div className="font-body text-xl font-bold mb-1" style={{ color: 'var(--color-text)' }}>
          {company}
        </div>
        <div className="font-body text-sm flex items-center gap-2 mb-4" style={{ color: 'var(--color-textMuted)' }}>
          📍 {location}
        </div>

        {/* Diagonal divider for visual interest */}
        <div className="w-full h-1 mb-4"
             style={{ background: colors.bgColor, clipPath: 'polygon(0 0, 95% 0, 100% 100%, 5% 100%)' }}></div>

        {/* Preview of top 3 skills */}
        {skills && skills.length > 0 && (
          <div>
            <div className="text-xs font-heading mb-2" style={{ color: 'var(--color-textMuted)' }}>TOP SKILLS:</div>
            <div className="flex flex-wrap gap-2">
              {skills.slice(0, 3).map((skill, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2 py-1 font-body font-semibold"
                  style={{
                    border: `2px solid ${colors.borderColor}`,
                    color: colors.textColor,
                    boxShadow: '2px 2px 0px rgba(0, 0, 0, 0.15)'
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 text-center">
        <span className="text-sm font-heading" style={{ color: colors.textColor }}>
          👆 Click for more!
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
        boxShadow: `10px 10px 0px ${colors.shadow}`
      }}
    >
      <div className="mb-4">
        <p className="text-sm leading-relaxed font-body" style={{ color: 'var(--color-text)' }}>
          {description}
        </p>
      </div>

      {details.length > 0 && (
        <ul className="space-y-2 mb-4">
          {details.map((detail, idx) => (
            <li key={idx} className="text-sm flex gap-2 font-body" style={{ color: 'var(--color-text)' }}>
              <span className="mt-1 flex-shrink-0" style={{ color: colors.textColor }}>▸</span>
              <span className="leading-relaxed">{detail}</span>
            </li>
          ))}
        </ul>
      )}

      {skills && skills.length > 0 && (
        <div className="mt-4 pt-4 border-t-2 border-dashed" style={{ borderColor: 'rgba(0, 0, 0, 0.2)' }}>
          <div className="text-xs font-heading mb-2" style={{ color: colors.textColor }}>SKILLS:</div>
          <div className="flex flex-wrap gap-2">
            {skills.slice(0, 6).map((skill, idx) => (
              <span
                key={idx}
                className="text-xs px-2 py-1 font-body"
                style={{
                  border: `2px solid ${colors.borderColor}`,
                  color: colors.textColor
                }}
              >
                {skill}
              </span>
            ))}
          </div>
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
