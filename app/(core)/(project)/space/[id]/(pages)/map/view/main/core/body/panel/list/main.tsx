import { useContext } from 'react';
import { MapModalContext } from '@/(core)/(project)/space/[id]/(modals)/map-modal/main';
import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import { ContextForChapterSceneList } from '@/(server)/(controller)/space/chapter/scene/list';
import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';

export function MapSceneList() {
  const chapterListController = useContext(ContextForSpaceChapterList)
  const sceneListController = useContext(ContextForChapterSceneList);
  const modalContext = useContext(MapModalContext);
  const { open } = modalContext.addSceneModal;


  // TODO CLEAN UP
  return (
    <div className='flex h-full w-full flex-shrink-0 flex-col space-y-[1rem] p-[1rem]'>
      <div>
        <p className={`text-md font-bold text-slate-500`}>0. General</p>
      </div>
      <HorizontalDivider/>
      {chapterListController.state.objs.map((chapter, index) => (
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
