import { ImageBackground } from '@/components/background/img/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { AbsoluteHolder } from '@/components/holder/main';
import { ContextForSpaceChapterList } from '@/server/controller/space/chapter/list';
import { useContext } from 'react';
import { SpacesProgressKanban } from './core/kanban/main';
import { SpacesProgressHeader } from './header/main';
import { SpacesProgressNavigation } from './navigation/main';

export function SpacesProgressMain() {
  const chapterListController = useContext(ContextForSpaceChapterList);

  return (
    <GlassWindowFrame
      name={SpacesProgressMain.name}
      className={`flex h-full flex-grow flex-col`}
    >
      <SpacesProgressHeader />
      <div className='relative h-full w-full'>
        <ImageBackground
          src={chapterListController.state.currentObj?.bg}
          // active
        />
        <AbsoluteHolder>
          <SpacesProgressKanban key={chapterListController.state.objId} />
        </AbsoluteHolder>
      </div>
      <SpacesProgressNavigation />
    </GlassWindowFrame>
  );
}
