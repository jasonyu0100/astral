import { Layer } from '@/(common)/layer/main';
import { backgroundStyles } from '@/(common)/styles/data';
import { FlowChaptersLeftButton } from './left/main';
import { FlowChaptersRightButton } from './right/main';
import { FlowChaptersRow } from './row/main';

export function FlowChapters() {
  return (
    <Layer
      displayName={FlowChapters.name}
      sizeStyle='w-full h-[80px]'
      backgroundStyle={backgroundStyles['glass-5']}
      className='flex h-full w-full flex-row items-center justify-center space-x-[1rem] px-[1rem]'
    >
      <FlowChaptersLeftButton />
      <FlowChaptersRow/>
      <FlowChaptersRightButton />
    </Layer>
  );
}
