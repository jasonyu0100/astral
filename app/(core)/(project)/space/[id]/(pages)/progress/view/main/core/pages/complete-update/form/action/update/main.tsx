import { GlassAreaPane } from '@/(components)/(glass)/area/pane/main';
import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { ContextForUpdateForm } from '@/(core)/(project)/space/[id]/(pages)/progress/(controller)/complete-update-form/main';
import { ContextForSpaceProgressController } from '@/(core)/(project)/space/[id]/(pages)/progress/(controller)/space-session/main';
import { ContextForSessionUpdateOfChapterList } from '@/(server)/(controller)/space/chapter/session/update/chapter-list';
import { glassFx, roundedFx } from '@/(style)/data';
import { useContext } from 'react';

export function SpaceProgressUpdateFormUpdate() {
  const spaceSessionController = useContext(ContextForSpaceProgressController);
  const updateFormController = useContext(ContextForUpdateForm);
  const sessionUpdateListController = useContext(
    ContextForSessionUpdateOfChapterList,
  );

  async function handleUpdate() {
    if (
      sessionUpdateListController.state.index ===
      sessionUpdateListController.state.objs.length - 1
    ) {
      updateFormController.updateSession().then(() => {
        spaceSessionController.updateSessionView(true);
      });
    } else {
      updateFormController.updateSession().then(() => {
        sessionUpdateListController.actions.stateActions.goNext();
        spaceSessionController.updateSessionView(false);
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
          <p className='font-bold text-slate-800'>Update</p>
        </GlassWindowContents>
        <GlassAreaPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
    </div>
  );
}
