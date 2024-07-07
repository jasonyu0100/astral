import { cn } from '@/(utils)/cn';

export function TabBlueShard({ active }: { active: boolean }) {
  return (
    <div
      className={cn(
        'h-[5px] w-[9rem] bg-gradient-to-br from-emerald-500 to-blue-600',
        {
          'opacity-0': !active,
          [`animate-activate opacity-100`]: active,
        },
      )}
    />
  );
}
