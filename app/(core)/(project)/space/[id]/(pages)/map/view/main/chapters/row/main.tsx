import { MapModalContext } from '@/(core)/(project)/space/[id]/(modals)/map-modal/main';
import { useContext } from 'react';
import ChaptersAdd from '@/(core)/(project)/space/[id]/(pages)/(common)/chapters/row/add/main';
import { ChapterContainer } from '@/(core)/(project)/space/[id]/(pages)/(common)/chapters/row/chapter/main';
import { ChaptersRowContainer } from '../../../../../(common)/chapters/row/main';
import { ContextForChapterSceneList } from '@/(server)/(controller)/space/chapter/scene/list';

export function MapChaptersRow() {
  const sceneListController = useContext(ContextForChapterSceneList);
  const modalContext = useContext(MapModalContext);
  const { open } = modalContext.addSceneModal;
  const { addChapterModal } = useContext(MapModalContext);

  return (
    <ChaptersRowContainer>
      {sceneListController.state.objs.map((scene, index) => (
        <p className='mr-[3rem] font-bold text-slate-500' key={index}>{scene.title}</p>
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
      <div
        className='flex cursor-pointer'
        onClick={() => {
          open();
        }}
      >
        <p className={`text-md animate-pulse-slow font-bold text-slate-500`}>
          Add Scene
        </p>
      </div>
      <ChaptersAdd onClick={() => addChapterModal.open()} />
    </ChaptersRowContainer>
  );
}
