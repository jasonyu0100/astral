'use client';
import { ContextForTogglable } from '@/(logic)/contexts/togglable/main';
import { useState } from 'react';
import { DashboardBackground } from './background/main';

export function DashboardBody({ children }: { children?: React.ReactNode }) {
  const [hovered, changeHovered] = useState(false);

  return (
    <div
      className='relative h-full flex-grow'
      onMouseEnter={() => changeHovered(true)}
      onMouseLeave={() => changeHovered(false)}
    >
      <ContextForTogglable.Provider
        value={{
          toggled: hovered,
          toggle: () => changeHovered(!hovered),
          updateToggle: (value) => changeHovered(value),
        }}
      >
        <DashboardBackground />
        <div className='absolute top-0 flex h-full w-full flex-col overflow-auto'>
          {children}
        </div>
      </ContextForTogglable.Provider>
    </div>
  );
}
