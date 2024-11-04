import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { useContext } from 'react';
import { SpacesDirectionKanban } from './core/kanban/main';
import { SpacesDirectionHeader } from './header/main';
import { SpacesDirectionNavigation } from './navigation/main';

export function SpacesDirectionMain() {
  const chapterListController = useContext(ContextForSpaceChapterList);

  return (
    <GlassWindowFrame
      name={SpacesDirectionMain.name}
      className={`flex h-full flex-grow flex-col`}
    >
      <SpacesDirectionHeader />
      <SpacesDirectionKanban key={chapterListController.state.objId} />
      <SpacesDirectionNavigation />
    </GlassWindowFrame>
  );
}
