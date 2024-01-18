import { effectStyles } from '@/(common)/styles/data';
import clsx from 'clsx';

export function IndicatorGreenJewel({ active }: { active: boolean }) {
  return (
    <div
      id={IndicatorGreenJewel.name}
      className={clsx(
        'w-[2.5rem] h-[2.5rem] bg-gradient-to-br from-amber-300 to-emerald-400 rounded-full',
        {
          [`${effectStyles['glow-lg']} animate-activate`]: active,
          ['opacity-50']: !active,
        },
      )}
    />
  );
}
