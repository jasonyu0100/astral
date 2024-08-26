import { ContextForUpdateForm } from '@/(core)/(project)/space/[id]/(pages)/progress/(controller)/complete-update-form/main';
import { ContextForSpaceSessionController } from '@/(core)/(project)/space/[id]/(pages)/session/controller/space-session/main';
import { ContextForSessionUpdateOfChapterList } from '@/(server)/controller/space/chapter/session/update/chapter-list';
import { glassFx, roundedFx } from '@/style/data';
import { GlassAreaPane } from '@/ui/(glass)/area/pane/main';
import { GlassWindowContents } from '@/ui/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/ui/(glass)/window/main';
import { useContext } from 'react';

export function SpaceSessionUpdateFormUpdate() {
  const spaceSessionController = useContext(ContextForSpaceSessionController);
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
          <p className='font-bold text-white'>Update</p>
        </GlassWindowContents>
        <GlassAreaPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
    </div>
  );
}
