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
import { SpaceFlowAddVerseModal } from '../../../../../(modal)/add/verse/main';

export function SpaceFlowHeaderLeft() {
  const verseListController = useContext(ContextForChapterVerseList);
  const openableController = useControllerForOpenable();

  return (
    <>
      <ContextForOpenable.Provider value={openableController}>
        <SpaceFlowAddVerseModal />
      </ContextForOpenable.Provider>
      <div className='flex w-1/3 flex-row items-center space-x-[1rem]'>
        <select className='w-[10rem] border-b-[1px] border-slate-300 border-opacity-30 bg-transparent py-[0.5rem] font-bold text-slate-500 outline-none'>
          {verseListController.state.objs.map((verse, index) => (
            <option className='text-md font-bold text-slate-500'>
              {verse.title}
            </option>
          ))}
        </select>
        <GlassWindowFrame
          className='aspect-square h-[1.5rem] w-[1.5rem]'
          roundedFx={roundedFx['rounded-full']}
        >
          <GlassWindowContents
            className='flex cursor-pointer items-center justify-center'
            onClick={openableController.open}
          >
            <p className='text-xl font-bold text-slate-300'>+</p>
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-5']} />
        </GlassWindowFrame>
      </div>
    </>
  );
}
