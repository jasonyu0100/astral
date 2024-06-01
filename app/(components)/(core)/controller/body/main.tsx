'use client';
import { useState } from 'react';
import { DashboardBackground } from './background/main';
import { ToggleContext } from '@/(logic)/internal/contexts/toggle/main';

export function DashboardBody({ children }: { children?: React.ReactNode }) {
  const [hovered, changeHovered] = useState(false);

  return (
    <div
      className='relative h-full w-full'
      onMouseEnter={() => changeHovered(true)}
      onMouseLeave={() => changeHovered(false)}
    >
      <ToggleContext.Provider
        value={{ toggled: hovered, toggle: () => changeHovered(!hovered) }}
      >
        <DashboardBackground />
        <div className='absolute top-0 flex h-full w-full flex-col overflow-auto'>
          {children}
        </div>
      </ToggleContext.Provider>
    </div>
  );
}
