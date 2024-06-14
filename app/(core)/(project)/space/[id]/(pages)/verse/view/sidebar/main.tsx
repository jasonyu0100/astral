import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassFx } from '@/(style)/data';
import { SpaceVerseSidebarEntry } from './entry/main';

export function SpaceVerseSidebar() {
  return (
    <GlassAreaContainer
      name={SpaceVerseSidebar.name}
      sizeFx='max-w-[300px] min-w-[200px] w-1/4 h-full'
      className={`flex flex-col space-y-[1rem] p-[1rem]`}
      glassFx={glassFx['glass-5']}
    >
      <SpaceVerseSidebarEntry>This is pretty good</SpaceVerseSidebarEntry>
      <SpaceVerseSidebarEntry>I like what you did here</SpaceVerseSidebarEntry>
      <SpaceVerseSidebarEntry>
        Have you looked into this artist?
      </SpaceVerseSidebarEntry>
    </GlassAreaContainer>
  );
}
