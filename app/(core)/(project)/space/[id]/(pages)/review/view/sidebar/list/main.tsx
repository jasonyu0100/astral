import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/(logic)/contexts/openable/main';
import { ContextForChapterVerseList } from '@/(server)/(controller)/space/chapter/verse/list';
import { ContextForChapterVerseObj } from '@/(server)/(model)/space/chapter/verse/main';
import { useContext } from 'react';
import { SpaceReviewAddVerseModal } from '../../../(modal)/add/verse/main';
import { SpaceReviewSidebarVerse } from './verse/main';

export function SpaceReviewSidebarList() {
  const verseListController = useContext(ContextForChapterVerseList);
  const verseOpenableController = useControllerForOpenable();
  return (
    <ContextForOpenable.Provider value={verseOpenableController}>
      <div style={{ height: '100%', width: '100%' }}>
        <GlassAreaContainer
          sizeFx='h-full w-full'
          className='flex flex-col overflow-auto p-[1rem]'
          name={''}
        >
          <div className='h-full w-full overflow-auto  pr-[1rem]'>
            <div className='flex flex-col space-y-[1rem]'>
              {/* <SpaceReviewSidebarAddVerse
                onClick={verseOpenableController.open}
              /> */}
              <div className='flex flex-col space-y-[0.5rem]'>
                {verseListController.state.objs.map((verse) => (
                  <ContextForChapterVerseObj.Provider value={verse}>
                    <SpaceReviewSidebarVerse />
                  </ContextForChapterVerseObj.Provider>
                ))}
              </div>
            </div>
          </div>
        </GlassAreaContainer>
      </div>
      <SpaceReviewAddVerseModal />
    </ContextForOpenable.Provider>
  );
}
