import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassFx } from '@/(style)/data';
import { SidebarEntry } from './entry/main';

export function VerseSidebar() {
  return (
    <GlassAreaContainer
      name={VerseSidebar.name}
      sizeFx='max-w-[360px] min-w-[240px] w-1/4 h-full'
      className={`flex flex-col space-y-[1rem] p-[1rem]`}
      glassFx={glassFx['glass-5']}
    >
      <SidebarEntry>This is pretty good</SidebarEntry>
      <SidebarEntry>I like what you did here</SidebarEntry>
      <SidebarEntry>Have you looked into this artist?</SidebarEntry>
    </GlassAreaContainer>
  );
}
