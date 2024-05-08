import { useContext } from 'react';
import { ConstellationContext } from '@/(types)/model/map/constellation/main';
import { ConstellationListEntry } from './entry/main';
import { ConstellationsHandlerContext } from '@/(logic)/internal/handler/constellations/main';
import { MapModalContext } from '@/(core)/(studio)/(modals)/map-modal/main';
import { ChaptersHandlerContext } from '@/(logic)/internal/handler/chapters/main';

export function MapConstellationList() {
  const chaptersHandler = useContext(ChaptersHandlerContext)
  const constellationsHandler = useContext(ConstellationsHandlerContext);
  const constellations = constellationsHandler.constellations;
  const modalContext = useContext(MapModalContext);
  const { open } = modalContext.addConstellationModal;


  // TODO CLEAN UP
  return (
    <div className='flex h-full w-full flex-shrink-0 flex-col space-y-[1rem] p-[1rem]'>
      {chaptersHandler.chapters.map((chapter, index) => (
        <div key={chapter.id}>
          <p className={`text-md font-bold text-slate-500`}>
            {index+1}. {chapter.title}
          </p>
        </div>
      ))}
      {/* {constellations.map((constellation, index) => (
        <ConstellationContext.Provider
          value={constellation}
          key={constellation.id}
        >
          <ConstellationListEntry index={index} key={constellation.id} />
        </ConstellationContext.Provider>
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
      </div> */}
    </div>
  );
}
