import { cn } from '@/(utils)/cn';

export function TabOrangeShard({ active }: { active: boolean }) {
  return (
    <div
      className={cn(
        'h-[5px] w-[9rem] bg-gradient-to-br from-red-500 to-amber-300',
        {
          'opacity-0': !active,
          [`animate-activate opacity-100`]: active,
        },
      )}
    />
  );
}
