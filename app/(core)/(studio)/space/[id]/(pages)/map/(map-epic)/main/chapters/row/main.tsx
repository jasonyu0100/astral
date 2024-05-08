import { MapModalContext } from '@/(core)/(studio)/(modals)/map-modal/main';
import { useContext } from 'react';
import { ChapterContext } from '@/(types)/model/chapter/main';
import { ChaptersHandlerContext } from '@/(types)/handler/chapters/main';
import ChaptersAdd from '@/(core)/(studio)/space/[id]/(pages)/(common)/chapters/row/add/main';
import { ChapterContainer } from '@/(core)/(studio)/space/[id]/(pages)/(common)/chapters/row/chapter/main';
import { ChaptersRowContainer } from '../../../../../(common)/chapters/row/main';
import { PartsHandlerContext } from '@/(types)/handler/parts/main';

export function MapChaptersRow() {
  const partsHandler = useContext(PartsHandlerContext);
  const parts = partsHandler.parts;
  const modalContext = useContext(MapModalContext);
  const { open } = modalContext.addPartModal;
  const chaptersHandler = useContext(ChaptersHandlerContext);
  const { addChapterModal } = useContext(MapModalContext);

  // TODO CLEANUP

  return (
    <ChaptersRowContainer>
      {parts.map((part, index) => (
        <p className="text-slate-500 font-bold mr-[3rem]">{part.title}</p>
      ))}
      <div
        className='flex w-full cursor-pointer'
        onClick={() => {
          open();
        }}
      >
        <p className={`text-md animate-pulse-slow font-bold text-slate-500`}>
          Add Page
        </p>
      </div>
      {/* {chaptersHandler.chapters.map((chapter, index) => (
        <ChapterContext.Provider value={chapter} key={chapter.id}>
          <ChapterContainer index={index} key={chapter.id} />
        </ChapterContext.Provider>
      ))} */}
      <ChaptersAdd onClick={() => addChapterModal.open()} />
    </ChaptersRowContainer>
  );
}
