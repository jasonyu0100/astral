import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { ContextForTogglable } from '@/(logic)/contexts/togglable/main';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';
import { useState } from 'react';
import { CreativeNetworkSidebarEntryContents } from './content/main';
import { CreativeNetworkSidebarEntryToggle } from './toggle/main';

export function CreativeNetworkSidebarEntry() {
  const [expanded, changeExpanded] = useState(false);

  return (
    <ContextForTogglable.Provider
      value={{ toggled: expanded, toggle: () => changeExpanded(!expanded) }}
    >
      <GlassWindowFrame
        name={CreativeNetworkSidebarEntry.name}
        className='min-h-[80px] w-full p-[15px]'
        roundedFx={roundedFx['rounded']}
        borderFx={borderFx['border-around']}
      >
        <GlassWindowContents className='flex w-full flex-col space-y-[1rem]'>
          <CreativeNetworkSidebarEntryToggle />
          {expanded && <CreativeNetworkSidebarEntryContents />}
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
    </ContextForTogglable.Provider>
  );
}
