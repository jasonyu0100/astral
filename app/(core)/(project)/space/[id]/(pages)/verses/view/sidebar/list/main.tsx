import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/(logic)/contexts/openable/main';
import { ContextForChapterVerseList } from '@/(server)/(controller)/space/chapter/verse/list';
import { ContextForChapterVerseObj } from '@/(server)/(model)/space/chapter/verse/main';
import { useContext } from 'react';
import { SpaceVersesAddVerseModal } from '../../../(modal)/add/verse/main';
import { SpaceVersesSidebarAddVerse } from './add/main';
import { SpaceVersesSidebarVerse } from './verse/main';

export function SpaceVersesSidebarList() {
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
              <SpaceVersesSidebarAddVerse
                onClick={verseOpenableController.open}
              />
              {verseListController.state.objs.map((verse) => (
                <ContextForChapterVerseObj.Provider value={verse}>
                  <SpaceVersesSidebarVerse />
                </ContextForChapterVerseObj.Provider>
              ))}
            </div>
          </div>
        </GlassAreaContainer>
      </div>
      <SpaceVersesAddVerseModal />
    </ContextForOpenable.Provider>
  );
}
