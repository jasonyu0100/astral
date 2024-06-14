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
        'h-[2.3rem] w-[7rem] text-xl font-bold leading-9 text-slate-300',
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
