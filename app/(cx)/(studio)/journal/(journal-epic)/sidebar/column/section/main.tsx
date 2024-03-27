import { GlassWindowContents } from '@/(components)/(basic)/glass/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(basic)/glass/window/main';
import { GlassWindowPane } from '@/(components)/(basic)/glass/window/pane/main';
import {
  glassStyles,
  borderStyles,
  roundedStyles,
} from '@/(design)/(styles)/data';

export function FeedSidebarSection() {
  const active = false;
  return (
    <GlassWindowFrame
      className='w-full p-[1rem]'
      borderStyle={borderStyles['border-all']}
      roundedStyle={roundedStyles['rounded-sm']}
    >
      <GlassWindowPane glassStyle={glassStyles['glass-5']} />
      <GlassWindowContents className='flex h-full w-full flex-row items-center justify-between'>
        <div className='flex flex-row items-center space-x-[1rem]'>
          <img
            src={'/brand/icon-bg-sm.png'}
            className='h-[50px] w-[50px] animate-pulse-slow rounded-full'
          />
          <p className='font-bold text-white'>John Smith</p>
        </div>
        <p className='ml-auto font-bold text-white'>(1)</p>
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
