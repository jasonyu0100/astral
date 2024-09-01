import { ContextForChapterLogList } from '@/(server)/controller/space/chapter/log/list';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { HorizontalDivider } from '@/ui/indicator/divider/horizontal/main';
import { useContext } from 'react';
import { SpaceJourneyContainer } from './core/container/main';
import { SpaceJourneyHeader } from './header/main';
import { SpaceJourneyLogList } from './list/main';
import { SpaceJourneyChapterNavigation } from './navigation/main';

export function SpaceJourneyMain() {
  const logListController = useContext(ContextForChapterLogList);

  return (
    <GlassWindowFrame
      name={SpaceJourneyMain.name}
      className={`flex h-full flex-grow flex-col`}
    >
      <SpaceJourneyHeader />
      <SpaceJourneyContainer>
        <div
          style={{ height: 'calc(100% - 8rem)', width: '100%' }}
          className='overflow-auto px-[2rem]'
        >
          <div className='grid w-full grid-cols-7 items-center justify-items-center py-[1rem]'>
            <p className='font-bold text-slate-300'>#</p>
            <p className='font-bold text-slate-300'>Log</p>
            <p className='font-bold text-slate-300'></p>
            <p className='font-bold text-slate-300'></p>
            <p className='font-bold text-slate-300'>Status</p>
            <p className='font-bold text-slate-300'>Hours</p>
            <p className='font-bold text-slate-300'>Links</p>
          </div>
          <HorizontalDivider />
          <SpaceJourneyLogList />
        </div>
      </SpaceJourneyContainer>
      <SpaceJourneyChapterNavigation />
    </GlassWindowFrame>
  );
}
