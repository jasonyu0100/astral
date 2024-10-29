import { ImageBackground } from '@/components/background/img/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { AbsoluteHolder } from '@/components/holder/main';
import { ContextForSpaceChapterList } from '@/server/controller/space/chapter/list';
import { useContext } from 'react';
import { SpacesBoardKanban } from './core/kanban/main';
import { SpacesBoardHeader } from './header/main';
import { SpacesBoardNavigation } from './navigation/main';

export function SpacesBoardMain() {
  const chapterListController = useContext(ContextForSpaceChapterList);

  return (
    <GlassWindowFrame
      name={SpacesBoardMain.name}
      className={`flex h-full flex-grow flex-col`}
    >
      <SpacesBoardHeader />
      <div className='relative h-full w-full'>
        <ImageBackground
          src={chapterListController.state.currentObj?.bg}
          // active
        />
        <AbsoluteHolder>
          <SpacesBoardKanban key={chapterListController.state.objId} />
        </AbsoluteHolder>
      </div>
      <SpacesBoardNavigation />
    </GlassWindowFrame>
  );
}
