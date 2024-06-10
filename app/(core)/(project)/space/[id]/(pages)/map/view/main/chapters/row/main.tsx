import { useContext } from 'react';
import ChaptersAdd from '@/(core)/(project)/space/[id]/(pages)/(common)/chapters/row/add/main';
import { ChapterContainer } from '@/(core)/(project)/space/[id]/(pages)/(common)/chapters/row/chapter/main';
import { ChaptersRowContainer } from '../../../../../(common)/chapters/row/main';
import { ContextForChapterSceneList } from '@/(server)/(controller)/space/chapter/scene/list';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/(logic)/contexts/openable/main';
import { MapAddChapterModal } from '../../../../(modal)/add/chapter/main';

export function MapChaptersRow() {
  const sceneListController = useContext(ContextForChapterSceneList);
  const openableController = useControllerForOpenable();

  return (
    <>
      <ContextForOpenable.Provider value={openableController}>
        <MapAddChapterModal />
      </ContextForOpenable.Provider>
      <ChaptersRowContainer>
        {sceneListController.state.objs.map((scene, index) => (
          <p className='mr-[3rem] font-bold text-slate-500' key={index}>
            {scene.title}
          </p>
        ))}
        {/* {chaptersHandler.chapters.map((chapter, index) => (
        <ChapterContext.Provider value={chapter} key={chapter.id}>
          <ChapterContainer index={index} key={chapter.id} />
        </ChapterContext.Provider>
      ))} */}
        <ChapterContainer index={1}>Scene 1A</ChapterContainer>
        <ChapterContainer index={1}>Scene 1B</ChapterContainer>
        <ChapterContainer index={1}>Scene 1C</ChapterContainer>
        <ChapterContainer index={1}>Scene 1D</ChapterContainer>
        <ChaptersAdd onClick={() => openableController.open()} />
      </ChaptersRowContainer>
    </>
  );
}
