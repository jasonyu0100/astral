import { cn } from '@/utils/cn';

export function GenerateTabBlueShard({ active }: { active: boolean }) {
  return (
    <div
      className={cn(
        'h-1 w-[9rem] bg-gradient-to-br from-emerald-500 to-blue-600',
        {
          'opacity-0': !active,
          [`animate-activate opacity-100`]: active,
        },
      )}
    />
  );
}
