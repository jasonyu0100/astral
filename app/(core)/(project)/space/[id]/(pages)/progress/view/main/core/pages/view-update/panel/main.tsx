import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import { ContextForSessionUpdateList } from '@/(server)/(controller)/space/chapter/session/update/list';
import { borderFx, glassFx } from '@/(style)/data';
import { useContext } from 'react';
import {
  ContextForSpaceProgressController,
  SpaceProgressPage,
} from '../../../../../../(controller)/space-session/main';

export function SpaceProgressViewUpdatePanel() {
  const spaceSessionController = useContext(ContextForSpaceProgressController);
  const updateListController = useContext(ContextForSessionUpdateList);
  const updates = updateListController.state?.objs || [];

  return (
    <GlassWindowFrame
      className='h-full w-[18rem]'
      borderFx={borderFx['border-r']}
    >
      <GlassWindowContents className='flex h-full w-full flex-col justify-between space-y-[1rem] px-[1rem]'>
        <div className='flex flex-col space-y-[1rem] py-[1rem]'>
          <p
            className='cursor-pointer text-sm font-bold text-slate-700'
            onClick={() =>
              spaceSessionController.setPage(SpaceProgressPage.VIEW_SESSION)
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
                  SpaceProgressPage.VIEW_SESSION_UPDATE,
                );
              }}
            >
              {updateListController.state.currentObj?.id === update.id ? (
                <p className='text-sm font-bold text-slate-700'>
                  {index + 1}. {update.variant} {update.title}
                </p>
              ) : (
                <p className='text-sm font-bold text-slate-700'>
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
