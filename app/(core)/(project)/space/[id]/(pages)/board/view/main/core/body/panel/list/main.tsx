import { useContext } from 'react';
import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/(logic)/contexts/openable/main';
import { BoardAddChapterModal } from '../../../../../../(modal)/add/chapter/main';
import { DropdownMenu } from '@radix-ui/react-dropdown-menu';

export function BoardSceneList() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const openableController = useControllerForOpenable();
  const activeId = chapterListController.state.objId;

  return (
    <>
      <ContextForOpenable.Provider value={openableController}>
        <BoardAddChapterModal />
      </ContextForOpenable.Provider>
      <div className='flex h-full w-full flex-shrink-0 flex-col space-y-[1rem] p-[1rem]'>
        {chapterListController.state.objs.map((chapter, index) => (
          <div key={chapter.id}>
            <p
              className={`text-sm font-bold ${activeId === chapter.id ? 'animate-pulse-slow text-slate-300' : 'text-slate-500'}`}
            >
              {index + 1}. {chapter.title}
            </p>
          </div>
        ))}
        <HorizontalDivider />
        <button
          className='flex w-full cursor-pointer'
          onClick={openableController.open}
        >
          <p className={`text-md animate-pulse-slow font-bold text-slate-500`}>
            Add Chapter
          </p>
        </button>
      </div>
    </>
  );
}
