import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { borderFx, glassFx } from '@/(style)/data';
import { SpaceChatSidebarChapters } from './chapters/main';
import { SpaceChatChatSearch } from './search/main';

export function SpaceChatSidebar() {
  return (
    <GlassAreaContainer
      name={SpaceChatSidebar.name}
      sizeFx='w-[300px] h-full'
      glassFx={glassFx['glass-5']}
      className={`flex flex-col items-center`}
      borderFx={borderFx['border-r']}
    >
      <SpaceChatChatSearch />
      <SpaceChatSidebarChapters />
    </GlassAreaContainer>
  );
}
