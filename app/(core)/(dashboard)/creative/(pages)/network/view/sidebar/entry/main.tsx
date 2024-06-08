import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';
import { ContextForTogglable } from '@/(logic)/contexts/togglable/main';
import { useState } from 'react';
import { NetworkSidebarPointContents } from './content/main';
import { NetworkSidebarPointToggle } from './toggle/main';

export function SidebarEntry() {
  const [expanded, changeExpanded] = useState(false);

  return (
    <ContextForTogglable.Provider
      value={{ toggled: expanded, toggle: () => changeExpanded(!expanded) }}
    >
      <GlassWindowFrame
        name={SidebarEntry.name}
        className='min-h-[80px] w-full p-[15px]'
        roundedFx={roundedFx['rounded']}
        borderFx={borderFx['border-around']}
      >
        <GlassWindowContents className='flex w-full flex-col space-y-[1rem]'>
          <NetworkSidebarPointToggle />
          {expanded && <NetworkSidebarPointContents />}
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
    </ContextForTogglable.Provider>
  );
}
