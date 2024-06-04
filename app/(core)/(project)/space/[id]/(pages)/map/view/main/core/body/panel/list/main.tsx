import { useContext } from 'react';
import { SceneContext } from '@/(model)/space/chapter/scene/main';
import { SceneListEntry } from './entry/main';
import { ScenesHandlerContext } from '@/(controller)/scenes/main';
import { MapModalContext } from '@/(core)/(project)/space/[id]/(modals)/map-modal/main';
import { ChaptersHandlerContext } from '@/(controller)/chapters/main';
import { Divider } from '@/(components)/(line)/divider/main';

export function MapSceneList() {
  const chaptersHandler = useContext(ChaptersHandlerContext)
  const partsHandler = useContext(ScenesHandlerContext);
  const parts = partsHandler.parts;
  const modalContext = useContext(MapModalContext);
  const { open } = modalContext.addSceneModal;


  // TODO CLEAN UP
  return (
    <div className='flex h-full w-full flex-shrink-0 flex-col space-y-[1rem] p-[1rem]'>
      <div>
        <p className={`text-md font-bold text-slate-500`}>0. General</p>
      </div>
      <Divider/>
      {chaptersHandler.chapters.map((chapter, index) => (
        <div key={chapter.id}>
          <p className={`text-md font-bold text-slate-500`}>
            {index+1}. {chapter.title}
          </p>
        </div>
      ))}
      {/* {parts.map((part, index) => (
        <SceneContext.Provider
          value={part}
          key={part.id}
        >
          <SceneListEntry index={index} key={part.id} />
        </SceneContext.Provider>
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
