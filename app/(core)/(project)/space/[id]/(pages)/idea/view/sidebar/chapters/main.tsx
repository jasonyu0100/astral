import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/(server)/(model)/space/chapter/main';
import { useContext } from 'react';
import { ContextForSpaceIdeaModals } from '../../../modal/controller/main';
import { SpaceIdeaChapterAdd } from './add/main';
import { SpaceIdeaSidebarChapter } from './chapter/main';

export function SpaceIdeaSidebarChapters() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const modalController = useContext(ContextForSpaceIdeaModals);

  return (
    <>
      <div style={{ height: '100%', width: '100%' }}>
        <GlassAreaContainer
          name={SpaceIdeaSidebarChapters.name}
          sizeFx='h-full w-full'
          className='flex flex-col overflow-auto p-[1rem]'
        >
          <div className='flex w-full flex-col'>
            {chapterListController.state.objs.map((chapter) => (
              <ContextForSpaceChapterObj.Provider
                value={chapter}
                key={chapter.id}
              >
                <SpaceIdeaSidebarChapter key={chapter.id} />
              </ContextForSpaceChapterObj.Provider>
            ))}
            <SpaceIdeaChapterAdd
              onClick={() => {
                modalController.addChapterController.open();
              }}
            />
          </div>
        </GlassAreaContainer>
      </div>
    </>
  );
}
