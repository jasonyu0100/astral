import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { useContext } from 'react';
import { SpacesWorkKanban } from './core/kanban/main';
import { SpacesWorkHeader } from './header/main';
import { SpacesWorkNavigation } from './navigation/main';

export function SpacesWorkMain() {
  const chapterListController = useContext(ContextForSpaceChapterList);

  return (
    <GlassWindowFrame
      name={SpacesWorkMain.name}
      className={`flex h-full flex-grow flex-col`}
    >
      <SpacesWorkHeader />
      <SpacesWorkKanban key={chapterListController.state.objId} />
      <SpacesWorkNavigation />
    </GlassWindowFrame>
  );
}
