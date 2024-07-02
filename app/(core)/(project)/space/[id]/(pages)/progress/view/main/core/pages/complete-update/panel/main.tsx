import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import { ContextForSessionUpdateOfChapterList } from '@/(server)/(controller)/space/chapter/session/update/chapter-list';
import { glassFx } from '@/(style)/data';
import { useContext } from 'react';
import {
  ContextForSpaceProgressController,
  SpaceProgressPage,
} from '../../../../../../(controller)/space-session/main';

export function SpaceProgressCompleteUpdatePanel() {
  const spaceSessionController = useContext(ContextForSpaceProgressController);
  const updateListController = useContext(ContextForSessionUpdateOfChapterList);
  const updates = updateListController.state?.objs || [];

  return (
    <GlassWindowFrame className='h-full w-[18rem]'>
      <GlassWindowContents className='flex h-full w-full flex-col justify-between space-y-[1rem] px-[1rem]'>
        <div className='flex flex-col space-y-[1rem] py-[1rem]'>
          <p
            className='text-md cursor-pointer font-bold text-slate-500'
            onClick={() =>
              spaceSessionController.setPage(SpaceProgressPage.COMPLETE_SESSION)
            }
          >
            Session
          </p>
          <HorizontalDivider />
          {updates.map((update, index) => (
            <div
              className='cursor-pointer'
              onClick={() => {
                updateListController.actions.stateActions.select(update);
                spaceSessionController.setPage(
                  SpaceProgressPage.COMPLETE_SESSION_UPDATE,
                );
              }}
            >
              {updateListController.state.currentObj?.id === update.id ? (
                <p className='text-sm font-bold text-slate-300'>
                  {index + 1}. {update.variant} {update.title}
                </p>
              ) : (
                <p className='text-sm font-bold text-slate-500'>
                  {index + 1}. {update.variant} {update.title}
                </p>
              )}
            </div>
          ))}
        </div>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
