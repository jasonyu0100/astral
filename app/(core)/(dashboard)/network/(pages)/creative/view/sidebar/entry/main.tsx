import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import {
  ContextForTogglable,
  useControllerForTogglable,
} from '@/(logic)/contexts/togglable/main';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';
import { CreativeNetworkSidebarEntryContents } from './content/main';
import { CreativeNetworkSidebarEntryToggle } from './toggle/main';

export function CreativeNetworkSidebarEntry() {
  const togglableController = useControllerForTogglable();

  return (
    <ContextForTogglable.Provider value={togglableController}>
      <GlassWindowFrame
        name={CreativeNetworkSidebarEntry.name}
        className='min-h-[80px] w-full p-[15px]'
        roundedFx={roundedFx['rounded']}
        borderFx={borderFx['border-around']}
      >
        <GlassWindowContents className='flex w-full flex-col space-y-[1rem]'>
          <CreativeNetworkSidebarEntryToggle />
          {togglableController.toggled && (
            <CreativeNetworkSidebarEntryContents />
          )}
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
    </ContextForTogglable.Provider>
  );
}
