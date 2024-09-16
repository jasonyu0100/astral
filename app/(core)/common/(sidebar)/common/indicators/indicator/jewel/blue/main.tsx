import { effectFx } from '@/style/data';
import { cn } from '@/utils/cn';

export function CommonIndicatorBlueJewel({ active }: { active: boolean }) {
  return (
    <div
      id={CommonIndicatorBlueJewel.name}
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
