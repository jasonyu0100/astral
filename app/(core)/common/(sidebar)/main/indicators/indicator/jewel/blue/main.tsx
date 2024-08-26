import { effectFx } from '@/style/data';
import { cn } from '@/utils/cn';

export function IndicatorBlueJewel({ active }: { active: boolean }) {
  return (
    <div
      id={IndicatorBlueJewel.name}
      className={cn(
        'h-[2.5rem] w-[2.5rem] rounded-full bg-gradient-to-br from-cyan-500 to-violet-500',
        {
          [`${effectFx['glow-lg']} animate-activate`]: active,
          ['opacity-50']: !active,
        },
      )}
    />
  );
}
