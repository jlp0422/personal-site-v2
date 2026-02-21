'use client';

import { Experience } from '@/types';
import { FlipCard } from '@/components/animations';
import { cn } from '@/lib/utils';

export interface ExperienceCardProps {
  experience: Experience;
  className?: string;
}

const cardColors = [
  { border: 'border-sbtbPurple', bg: 'bg-sbtbPurple', text: 'text-sbtbPurple', shadow: 'rgba(155, 89, 182, 0.4)' },
  { border: 'border-sbtbPink', bg: 'bg-sbtbPink', text: 'text-sbtbPink', shadow: 'rgba(255, 107, 157, 0.4)' },
  { border: 'border-sbtbCyan', bg: 'bg-sbtbCyan', text: 'text-sbtbCyan', shadow: 'rgba(0, 217, 255, 0.4)' },
  { border: 'border-sbtbOrange', bg: 'bg-sbtbOrange', text: 'text-sbtbOrange', shadow: 'rgba(255, 140, 66, 0.4)' },
  { border: 'border-sbtbBlue', bg: 'bg-sbtbBlue', text: 'text-sbtbBlue', shadow: 'rgba(78, 142, 247, 0.4)' },
  { border: 'border-sbtbGreen', bg: 'bg-sbtbGreen', text: 'text-sbtbGreen', shadow: 'rgba(107, 207, 127, 0.4)' },
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
      className={cn(
        'h-full bg-white p-6 border-4 flex flex-col justify-between relative overflow-hidden',
        colors.border
      )}
      style={{ boxShadow: `10px 10px 0px ${colors.shadow}` }}
    >
      {/* Single decorative geometric shape - safe without transforms */}
      <div className={cn('absolute top-0 right-0 w-24 h-24 opacity-10', colors.bg)}
           style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}></div>

      <div>
        {/* Date badge with shadow */}
        <div className={cn('inline-block px-3 py-1 mb-4 text-white text-xs font-heading', colors.bg)}
             style={{ boxShadow: '3px 3px 0px rgba(0, 0, 0, 0.2)' }}>
          {startDate} - {endDate}
        </div>

        {/* Bigger title with text shadow */}
        <h3 className={cn('font-heading text-2xl mb-3 leading-tight', colors.text)}
            style={{ textShadow: `3px 3px 0px ${colors.shadow}` }}>
          {title}
        </h3>

        {/* Company and location with better styling */}
        <div className="font-body text-xl font-bold text-darkText mb-1">
          {company}
        </div>
        <div className="font-body text-sm text-darkText/70 flex items-center gap-2 mb-4">
          📍 {location}
        </div>

        {/* Diagonal divider for visual interest */}
        <div className={cn('w-full h-1 mb-4', colors.bg)}
             style={{ clipPath: 'polygon(0 0, 95% 0, 100% 100%, 5% 100%)' }}></div>

        {/* Preview of top 3 skills */}
        {skills && skills.length > 0 && (
          <div>
            <div className="text-xs font-heading text-darkText/60 mb-2">TOP SKILLS:</div>
            <div className="flex flex-wrap gap-2">
              {skills.slice(0, 3).map((skill, idx) => (
                <span
                  key={idx}
                  className={cn('text-xs px-2 py-1 border-2 font-body font-semibold', colors.border, colors.text)}
                  style={{ boxShadow: '2px 2px 0px rgba(0, 0, 0, 0.15)' }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 text-center">
        <span className={cn('text-sm font-heading', colors.text)}>
          👆 Click for more!
        </span>
      </div>
    </div>
  );

  const back = (
    <div
      className="h-full bg-white p-6 border-4 border-darkText overflow-y-auto"
      style={{ boxShadow: `10px 10px 0px ${colors.shadow}` }}
    >
      <div className="mb-4">
        <p className="text-sm text-darkText leading-relaxed font-body">
          {description}
        </p>
      </div>

      {details.length > 0 && (
        <ul className="space-y-2 mb-4">
          {details.map((detail, idx) => (
            <li key={idx} className="text-sm text-darkText/90 flex gap-2 font-body">
              <span className={cn('mt-1 flex-shrink-0', colors.text)}>▸</span>
              <span className="leading-relaxed">{detail}</span>
            </li>
          ))}
        </ul>
      )}

      {skills && skills.length > 0 && (
        <div className="mt-4 pt-4 border-t-2 border-dashed border-darkText/20">
          <div className={cn('text-xs font-heading mb-2', colors.text)}>SKILLS:</div>
          <div className="flex flex-wrap gap-2">
            {skills.slice(0, 6).map((skill, idx) => (
              <span
                key={idx}
                className={cn('text-xs px-2 py-1 border-2 font-body', colors.border, colors.text)}
              >
                {skill}
              </span>
            ))}
          </div>
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
