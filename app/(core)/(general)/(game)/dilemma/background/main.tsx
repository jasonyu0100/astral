'use client';
import { ContextForTogglable } from '@/logic/contexts/togglable/main';
import { cn } from '@/utils/cn';
import { useContext } from 'react';

export function DashboardBackground() {
  const { toggled } = useContext(ContextForTogglable);
  const colorOne: string = '#2c0441';
  const colorTwo: string = '#53097b';

  return (
    <>
      <div
        className={cn(
          'absolute overflow-auto bg-gradient-to-br from-slate-950 to-[#2c0441]',
          {
            'animate-breathe-slow from-40% to-90% ': !toggled,
            'animate-breathe-fast from-40% to-80%': toggled,
          },
        )}
        style={{ height: '100%', width: '100%' }}
      ></div>
    </>
  );
}
