import { cn } from '@/(utils)/cn';

export function TabText({
  children,
  active,
}: {
  children?: React.ReactNode;
  active: boolean;
}) {
  return (
    <div
      className={cn(
        'h-[2.3rem] w-[7rem] text-xl font-bold leading-9 text-slate-800',
        {
          'text-slate-700 opacity-50': !active,
          'text-slate-700': active,
        },
      )}
    >
      {children}
    </div>
  );
}
