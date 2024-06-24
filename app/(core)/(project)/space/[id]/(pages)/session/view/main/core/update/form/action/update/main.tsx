import { GlassAreaPane } from '@/(components)/(glass)/area/pane/main';
import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { ContextForChapterSessionUpdateList } from '@/(server)/(controller)/space/chapter/session/update/chapter-list';
import { glassFx, roundedFx } from '@/(style)/data';
import { useContext } from 'react';
import { EditContext } from '../../../../edit/main';
import { ContextForUpdateForm } from '../../../main';

export function SpaceSessionUpdateFormUpdate() {
  const { updateComplete } = useContext(EditContext);
  const itemEditController = useContext(ContextForUpdateForm);
  const sessionUpdateListController = useContext(
    ContextForChapterSessionUpdateList,
  );

  async function handleUpdate() {
    if (
      sessionUpdateListController.state.index ===
      sessionUpdateListController.state.objs.length - 1
    ) {
      itemEditController.SessionUpdate().then(() => {
        updateComplete(true);
      });
    } else {
      itemEditController.SessionUpdate().then(() => {
        sessionUpdateListController.actions.stateActions.goNext();
        updateComplete(false);
      });
    }
  }

  return (
    <div className='flex w-full flex-row justify-end'>
      <GlassWindowFrame
        className='h-[3rem] w-[200px]'
        roundedFx={roundedFx['rounded']}
      >
        <GlassWindowContents
          className='flex cursor-pointer items-center justify-center bg-blue-500'
          onClick={handleUpdate}
        >
          <p className='font-bold text-white'>Update</p>
        </GlassWindowContents>
        <GlassAreaPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
    </div>
  );
}
