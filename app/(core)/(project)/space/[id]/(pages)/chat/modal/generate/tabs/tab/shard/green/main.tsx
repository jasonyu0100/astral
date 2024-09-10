import { cn } from '@/utils/cn';

export function GenerateTabGreenShard({ active }: { active: boolean }) {
  return (
    <div
      className={cn(
        'h-1 w-[9rem] bg-gradient-to-br from-amber-300 to-emerald-400',
        {
          'opacity-0': !active,
          [`animate-activate opacity-100`]: active,
        },
      )}
    />
  );
}
