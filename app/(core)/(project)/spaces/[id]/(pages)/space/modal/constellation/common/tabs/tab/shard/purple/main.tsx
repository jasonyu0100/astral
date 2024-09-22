import { ctwn } from '@/utils/cn';

export function GenerateTabPurpleShard({ active }: { active: boolean }) {
  return (
    <div
      className={ctwn(
        'h-1 w-[9rem] bg-gradient-to-br from-purple-900 to-fuchsia-900',
        {
          'opacity-0': !active,
          [`animate-activate opacity-100`]: active,
        },
      )}
    />
  );
}
