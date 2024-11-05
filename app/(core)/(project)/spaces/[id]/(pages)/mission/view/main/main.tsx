import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { useContext } from 'react';
import { SpacesMissionKanban } from './core/kanban/main';
import { SpacesMissionHeader } from './header/main';
import { SpacesMissionNavigation } from './navigation/main';

export function SpacesMissionMain() {
  const chapterListController = useContext(ContextForSpaceChapterList);

  return (
    <GlassWindowFrame
      name={SpacesMissionMain.name}
      className={`flex h-full flex-grow flex-col`}
    >
      <SpacesMissionHeader />
      <SpacesMissionKanban key={chapterListController.state.objId} />
      <SpacesMissionNavigation />
    </GlassWindowFrame>
  );
}
