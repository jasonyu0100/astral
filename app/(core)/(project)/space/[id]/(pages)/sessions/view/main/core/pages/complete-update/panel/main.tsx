import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import { ContextForSessionUpdateOfChapterList } from '@/(server)/(controller)/space/chapter/session/update/chapter-list';
import { glassFx } from '@/(style)/data';
import { useContext } from 'react';
import {
  ContextForSpaceSessionsController,
  SpaceSessionsPage,
} from '../../../../../../(controller)/space-session/main';

export function SpaceSessionsCompleteUpdatePanel() {
  const spaceSessionController = useContext(ContextForSpaceSessionsController);
  const updateListController = useContext(ContextForSessionUpdateOfChapterList);
  const updates = updateListController.state?.objs || [];

  return (
    <GlassWindowFrame className='h-full w-[18rem]'>
      <GlassWindowContents className='flex h-full w-full flex-col justify-between space-y-[1rem] px-[1rem]'>
        <div className='flex flex-col space-y-[1rem] py-[1rem]'>
          <p className='font-bold text-slate-300'>Your Session</p>
          <HorizontalDivider />
          {updates.map((update, index) => (
            <div
              className='cursor-pointer'
              onClick={() => {
                updateListController.actions.stateActions.select(update);
                spaceSessionController.setPage(
                  SpaceSessionsPage.COMPLETE_SESSION_UPDATE,
                );
              }}
            >
              {updateListController.state.currentObj?.id === update.id ? (
                <p className='font-bold text-slate-300'>
                  {index + 1}. {update.variant} {update.title}
                </p>
              ) : (
                <p className='font-bold text-slate-500'>
                  {index + 1}. {update.variant} {update.title}
                </p>
              )}
            </div>
          ))}
        </div>
        <div
          className='flex cursor-pointer flex-col py-[1rem]'
          onClick={() =>
            spaceSessionController.setPage(SpaceSessionsPage.COMPLETE_SESSION)
          }
        >
          <p className='mt-auto rounded bg-blue-500 p-[1rem] font-bold text-slate-300'>
            Complete Session
          </p>
        </div>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
