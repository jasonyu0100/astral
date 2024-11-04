import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { useContext } from 'react';
import { SpacesObjectiveKanban } from './core/kanban/main';
import { SpacesObjectiveHeader } from './header/main';
import { SpacesObjectiveNavigation } from './navigation/main';

export function SpacesObjectiveMain() {
  const chapterListController = useContext(ContextForSpaceChapterList);

  return (
    <GlassWindowFrame
      name={SpacesObjectiveMain.name}
      className={`flex h-full flex-grow flex-col`}
    >
      <SpacesObjectiveHeader />
      <SpacesObjectiveKanban key={chapterListController.state.objId} />
      <SpacesObjectiveNavigation />
    </GlassWindowFrame>
  );
}
