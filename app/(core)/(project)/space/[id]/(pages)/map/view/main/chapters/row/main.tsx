import { MapModalContext } from '@/(core)/(project)/space/[id]/(modals)/map-modal/main';
import { useContext } from 'react';
import { SpaceChapterContext } from '@/(model)/space/chapter/main';
import { ChaptersHandlerContext } from '@/(controller)/chapters/main';
import ChaptersAdd from '@/(core)/(project)/space/[id]/(pages)/(common)/chapters/row/add/main';
import { ChapterContainer } from '@/(core)/(project)/space/[id]/(pages)/(common)/chapters/row/chapter/main';
import { ChaptersRowContainer } from '../../../../../(common)/chapters/row/main';
import { ScenesHandlerContext } from '@/(controller)/scenes/main';

export function MapChaptersRow() {
  const partsHandler = useContext(ScenesHandlerContext);
  const parts = partsHandler.parts;
  const modalContext = useContext(MapModalContext);
  const { open } = modalContext.addSceneModal;
  const chaptersHandler = useContext(ChaptersHandlerContext);
  const { addChapterModal } = useContext(MapModalContext);

  // TODO CLEANUP

  return (
    <ChaptersRowContainer>
      {parts.map((part, index) => (
        <p className='mr-[3rem] font-bold text-slate-500'>{part.title}</p>
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
