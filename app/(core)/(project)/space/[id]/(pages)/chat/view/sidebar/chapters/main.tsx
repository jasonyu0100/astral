import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/(logic)/contexts/openable/main';
import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/(server)/(model)/space/chapter/main';
import { useContext } from 'react';
import { SpaceChatAddChapterModal } from '../../../(modal)/add/chapter/main';
import { SpaceChatSidebarChapter } from './chapter/main';

export function SpaceChatSidebarChapters() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const openableController = useControllerForOpenable();

  return (
    <>
      <ContextForOpenable.Provider value={openableController}>
        <SpaceChatAddChapterModal />
      </ContextForOpenable.Provider>
      <div style={{ height: '100%', width: '100%' }}>
        <GlassAreaContainer
          name={SpaceChatSidebarChapters.name}
          sizeFx='h-full w-full'
          className='flex flex-col overflow-auto p-[1rem]'
        >
          <div className='flex w-full flex-col'>
            {chapterListController.state.objs.map((chapter) => (
              <ContextForSpaceChapterObj.Provider
                value={chapter}
                key={chapter.id}
              >
                <SpaceChatSidebarChapter key={chapter.id} />
              </ContextForSpaceChapterObj.Provider>
            ))}
            {/* <SpaceChatChapterAdd
              onClick={() => {
                openableController.open();
              }}
            /> */}
          </div>
        </GlassAreaContainer>
      </div>
    </>
  );
}
