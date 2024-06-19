import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { useControllerForOpenable } from '@/(logic)/contexts/openable/main';
import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { glassFx, roundedFx } from '@/(style)/data';
import { useContext } from 'react';

export function SpaceSeaHeaderLeft() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const openableController = useControllerForOpenable();

  return (
    <div className='flex w-1/3 flex-row'>
      <GlassWindowFrame roundedFx={roundedFx['rounded-full']}>
        <GlassWindowContents
          className='flex cursor-pointer items-center justify-center px-[1rem]'
          onClick={openableController.open}
        >
          <p className='text-lg font-bold text-slate-500'>new update</p>
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
    </div>
  );
}
