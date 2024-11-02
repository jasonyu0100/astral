import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { GlassWindowFrame } from '@/components/glass/window/main';
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
      <SpacesProgressKanban key={chapterListController.state.objId} />
      <SpacesProgressNavigation />
    </GlassWindowFrame>
  );
}
