import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/(logic)/contexts/openable/main';
import { ContextForChapterVerseList } from '@/(server)/(controller)/space/chapter/verse/list';
import { glassFx, roundedFx } from '@/(style)/data';
import { useContext } from 'react';
import { SpaceVerseAddVerseModal } from '../../../../../../(modal)/add/verse/main';

export function SpaceVerseList() {
  const verseListController = useContext(ContextForChapterVerseList);
  const openableController = useControllerForOpenable();
  const activeId = verseListController.state.objId;

  return (
    <>
      <ContextForOpenable.Provider value={openableController}>
        <SpaceVerseAddVerseModal />
      </ContextForOpenable.Provider>
      <div className='flex h-full w-full flex-shrink-0 flex-col space-y-[0.5rem] p-[1rem]'>
        <div className='flex w-full flex-row items-center space-x-[1rem]'>
          <p className={`text-md font-bold text-slate-400`}>Verses</p>
          <GlassWindowFrame
            roundedFx={roundedFx['rounded']}
            className='h-[1rem] w-[1rem]'
          >
            <GlassWindowContents
              className='flex cursor-pointer items-center justify-center'
              onClick={openableController.open}
            >
              <p className={`text-sm font-bold text-slate-400`}>+</p>
            </GlassWindowContents>
            <GlassWindowPane glassFx={glassFx['glass-5']} />
          </GlassWindowFrame>
        </div>
        {verseListController.state.objs.map((verse, index) => (
          <GlassWindowFrame key={verse.id} roundedFx={roundedFx['rounded']}>
            <GlassWindowContents
              className='animate-pulse-slow cursor-pointer'
              onClick={() =>
                verseListController.actions.stateActions.select(verse)
              }
            >
              <p
                className={`text-sm font-bold ${activeId === verse.id ? 'animate-pulse-slow text-slate-400' : 'text-slate-500'}`}
              >
                {verse.title}
              </p>
            </GlassWindowContents>
          </GlassWindowFrame>
        ))}
      </div>
    </>
  );
}
