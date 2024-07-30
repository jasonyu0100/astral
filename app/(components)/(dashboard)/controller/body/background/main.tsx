'use client';
import { ContextForTogglable } from '@/(logic)/contexts/togglable/main';
import { cn } from '@/(utils)/cn';
import { useContext } from 'react';

export function DashboardBackground() {
  const { toggled } = useContext(ContextForTogglable);
  const colorOne: string = '#2c0441';
  const colorTwo: string = '#53097b';

  return (
    <>
      <div
        className={cn(
          'h-full w-full overflow-auto bg-gradient-to-br from-slate-900 to-[#2c0441]',
          {
            'animate-breathe-slow from-60% to-90% ': !toggled,
            'animate-breathe-fast from-80% to-90%': toggled,
          },
        )}
      ></div>
    </>
  );
}
