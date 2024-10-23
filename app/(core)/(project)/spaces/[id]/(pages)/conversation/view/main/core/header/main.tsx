import { glassFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { SpacesConversationHeaderLeft } from './left/main';
import { SpacesConversationHeaderMiddle } from './middle/main';
import { SpacesConversationHeaderRight } from './right/main';

export function SpacesConversationHeader() {
  return (
    <GlassAreaContainer
      name={SpacesConversationHeader.name}
      sizeFx='h-[4rem] w-full flex-shrink-0'
      glassFx={glassFx['glass-5']}
      className={`flex items-center justify-between space-x-[1rem] px-[1rem]`}
    >
      <SpacesConversationHeaderLeft />
      <SpacesConversationHeaderMiddle />
      <SpacesConversationHeaderRight />
    </GlassAreaContainer>
  );
}
