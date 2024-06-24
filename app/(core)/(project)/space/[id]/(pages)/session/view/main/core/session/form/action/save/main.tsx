import { GlassAreaPane } from '@/(components)/(glass)/area/pane/main';
import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { glassFx, roundedFx } from '@/(style)/data';
import { useContext } from 'react';
import { ContextForSessionForm } from '../../../main';

export function SpaceSessionUpdateFormSave() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const updateEditController = useContext(ContextForSessionForm);

  return (
    <div className='flex w-full flex-row justify-end'>
      <GlassWindowFrame
        className='h-[3rem] w-[200px]'
        roundedFx={roundedFx['rounded']}
      >
        <GlassWindowContents
          className='flex cursor-pointer items-center justify-center bg-blue-500'
          onClick={() => {
            updateEditController.saveUpdate().then(() => {
              chapterListController.actions.stateActions.goNext();
            });
          }}
        >
          <p className='font-bold text-white'>Save</p>
        </GlassWindowContents>
        <GlassAreaPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
    </div>
  );
}
