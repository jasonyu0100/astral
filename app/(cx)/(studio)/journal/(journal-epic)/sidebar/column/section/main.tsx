import { GlassFrame } from '@/(components)/(basic)/glass/frame/main';
import { GlassPane } from '@/(components)/(basic)/glass/pane/main';
import { backgroundStyles, borderStyles } from '@/(design)/(styles)/data';

export function FeedSidebarSection() {
  const active = false;
  return (
    <GlassFrame
      className='relative animate-pulse-slow rounded-lg'
      borderStyle={borderStyles['border-all']}
    >
      <div className='flex w-full flex-row items-center justify-between p-[1rem]'>
        <div className='flex flex-row items-center space-x-[1rem]'>
          <img
            src={'/brand/icon-bg-sm.png'}
            className='h-[50px] w-[50px] rounded-full'
          />
          <p className='font-bold text-white'>John Smith</p>
        </div>
        <p className='ml-auto font-bold text-white'>(1)</p>
      </div>
      {active && <GlassPane glassStyle={backgroundStyles['glass-5']} />}
    </GlassFrame>
  );
}
