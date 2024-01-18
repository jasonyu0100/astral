import clsx from 'clsx';

export function TabPurpleShard({ active }: { active: boolean }) {
  return (
    <div
      className={clsx(
        'w-[9rem] h-1 bg-gradient-to-br from-purple-900 to-fuchsia-900',
        {
          'opacity-0': !active,
          [`opacity-100 animate-activate`]: active,
        },
      )}
    />
  );
}
