import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { useContext } from 'react';
import { SpacesFocusKanban } from './core/kanban/main';
import { SpacesFocusHeader } from './header/main';

export function SpacesFocusMain() {
  const chapterListController = useContext(ContextForSpaceChapterList);

  return (
    <GlassWindowFrame
      name={SpacesFocusMain.name}
      className={`flex h-full flex-grow flex-col`}
    >
      <SpacesFocusHeader />
      <SpacesFocusKanban key={chapterListController.state.objId} />
    </GlassWindowFrame>
  );
}
