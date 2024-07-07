import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { borderFx, glassFx } from '@/(style)/data';
import { SpaceChatHeaderLeft } from './left/main';
import { SpaceChatHeaderMiddle } from './middle/main';
import { SpaceChatHeaderRight } from './right/main';

export function SpaceChatHeader() {
  return (
    <GlassAreaContainer
      name={SpaceChatHeader.name}
      sizeFx='h-[4rem] w-full flex-shrink-0'
      glassFx={glassFx['glass-5']}
      className={`flex items-center justify-between space-x-[1rem] px-[1rem]`}
      borderFx={borderFx['border-b']}
    >
      <SpaceChatHeaderLeft />
      <SpaceChatHeaderMiddle />
      <SpaceChatHeaderRight />
    </GlassAreaContainer>
  );
}
