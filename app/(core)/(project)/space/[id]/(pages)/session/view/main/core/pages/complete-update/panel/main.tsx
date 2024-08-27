import { ContextForSessionUpdateOfChapterList } from '@/(server)/controller/space/chapter/session/update/chapter-list';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { HorizontalDivider } from '@/ui/indicator/divider/horizontal/main';
import { useContext } from 'react';
import {
  ContextForSpaceSessionController,
  SpaceSessionPage,
} from '../../../../../../controller/space-session/main';

export function SpaceSessionCompleteUpdatePanel() {
  const spaceSessionController = useContext(ContextForSpaceSessionController);
  const updateListController = useContext(ContextForSessionUpdateOfChapterList);
  const updates = updateListController.state?.objs || [];

  return (
    <GlassWindowFrame className='h-full w-[18rem]'>
      <GlassWindowContents className='flex h-full w-full flex-col justify-between space-y-[1rem] px-[1rem]'>
        <div className='flex flex-col space-y-[1rem] py-[1rem]'>
          <p
            className='text-md cursor-pointer font-bold text-slate-500'
            onClick={() =>
              spaceSessionController.setPage(SpaceSessionPage.COMPLETE_SESSION)
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
                  SpaceSessionPage.COMPLETE_SESSION_UPDATE,
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
    </GlassWindowFrame>
  );
}
