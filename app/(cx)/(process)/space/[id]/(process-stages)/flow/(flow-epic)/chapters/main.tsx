import { GlassContainer } from '@/(components)/(basic)/glass/container/main';
import { backgroundStyles } from '@/(design)/(styles)/data';
import { FlowChaptersLeftButton } from './left/main';
import { FlowChaptersRightButton } from './right/main';
import { FlowChaptersRow } from './row/main';

export function FlowChapters() {
  return (
    <GlassContainer
      displayName={FlowChapters.name}
      sizeStyle='w-full h-[80px]'
      glassStyle={backgroundStyles['glass-5']}
      className='flex h-full w-full flex-row items-center justify-center space-x-[1rem] px-[1rem]'
    >
      <FlowChaptersLeftButton />
      <FlowChaptersRow/>
      <FlowChaptersRightButton />
    </GlassContainer>
  );
}
