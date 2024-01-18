import clsx from 'clsx';

export function TabText({
  children,
  active,
}: {
  children: React.ReactNode;
  active: boolean;
}) {
  return (
    <div
      className={clsx(
        'h-[2.5rem] w-[7rem] text-slate-300 text-2xl font-extraBold leading-9',
        {
          'text-slate-500': !active,
          'text-slate-300': active,
        },
      )}
    >
      {children}
    </div>
  );
}
