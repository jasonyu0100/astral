import { MapModalContext } from '@/(cx)/(studio)/(modals)/map-modal/main';
import { useContext } from 'react';
import { ChapterContext } from '@/(types)/model/space/chapter/main';
import { ChaptersHandlerContext } from '@/(lgx)/internal/handler/chapters/main';
import ChaptersAdd from '@/(cx)/(studio)/space/[id]/(pages)/(common)/chapters/row/add/main';
import { ChapterContainer } from '@/(cx)/(studio)/space/[id]/(pages)/(common)/chapters/row/chapter/main';
import { ChaptersRowContainer } from '../../../../../(common)/chapters/row/main';
import { ConstellationsHandlerContext } from '@/(lgx)/internal/handler/constellations/main';

export function MapChaptersRow() {
  const constellationsHandler = useContext(ConstellationsHandlerContext);
  const constellations = constellationsHandler.constellations;
  const modalContext = useContext(MapModalContext);
  const { open } = modalContext.addConstellationModal;
  const chaptersHandler = useContext(ChaptersHandlerContext);
  const { addChapterModal } = useContext(MapModalContext);

  // TODO CLEANUP

  return (
    <ChaptersRowContainer>
      {constellations.map((constellation, index) => (
        <p className="text-slate-500 font-bold mr-[3rem]">{constellation.title}</p>
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
