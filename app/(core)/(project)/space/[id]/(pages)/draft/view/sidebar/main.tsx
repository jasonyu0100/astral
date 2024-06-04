import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassFx } from '@/(style)/data';
import { DraftSidebarPoint } from './state/main';

export function DraftSidebar() {
  return (
    <GlassAreaContainer
      name={DraftSidebar.name}
      sizeFx='max-w-[360px] min-w-[240px] w-1/4 h-full'
      className={`flex flex-col space-y-[1rem] p-[1rem]`}
      glassFx={glassFx['glass-5']}
    >
      <DraftSidebarPoint>This is pretty good</DraftSidebarPoint>
      <DraftSidebarPoint>I like what you did here</DraftSidebarPoint>
      <DraftSidebarPoint>Have you looked into this artist?</DraftSidebarPoint>
    </GlassAreaContainer>
  );
}
