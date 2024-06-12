import { useContext } from 'react';
import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { ContextForOpenable, useControllerForOpenable } from '@/(logic)/contexts/openable/main';
import { MapAddChapterModal } from '../../../../../../(modal)/add/chapter/main';

export function MapSceneList() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const openableController = useControllerForOpenable();

  // TODO CLEAN UP
  return (
    <>
      <ContextForOpenable.Provider value={openableController}>
        <MapAddChapterModal />
      </ContextForOpenable.Provider>
      <div className='flex h-full w-full flex-shrink-0 flex-col space-y-[1rem] p-[1rem]'>
        {chapterListController.state.objs.map((chapter, index) => (
          <div key={chapter.id}>
            <p className={`text-md font-bold text-slate-500`}>
              {index + 1}. {chapter.title}
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
    </>
  );
}
