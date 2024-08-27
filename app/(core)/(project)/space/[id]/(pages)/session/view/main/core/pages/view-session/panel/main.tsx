import { ContextForSessionUpdateList } from '@/(server)/controller/space/chapter/session/update/list';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { HorizontalDivider } from '@/ui/indicator/divider/horizontal/main';
import { useContext } from 'react';
import {
  ContextForSpaceSessionController,
  SpaceSessionPage,
} from '../../../../../../controller/space-session/main';

export function SpaceSessionViewSessionPanel() {
  const spaceSessionController = useContext(ContextForSpaceSessionController);
  const updateListController = useContext(ContextForSessionUpdateList);
  const updates = updateListController.state?.objs || [];

  return (
    <GlassWindowFrame className='h-full w-[18rem]'>
      <GlassWindowContents className='flex h-full w-full flex-col justify-between space-y-[1rem] px-[1rem]'>
        <div className='flex flex-col space-y-[1rem] py-[1rem]'>
          <p
            className='text-sm font-bold text-slate-300'
            onClick={() =>
              spaceSessionController.setPage(
                SpaceSessionPage.VIEW_SESSION_UPDATE,
              )
            }
          >
            Session
          </p>
          <HorizontalDivider />
          {updates.map((update, index) => (
            <GlassWindowFrame className='w-full'>
              <GlassWindowContents
                className='flex cursor-pointer flex-row justify-between'
                onClick={() => {
                  updateListController.actions.stateActions.select(update);
                  spaceSessionController.setPage(
                    SpaceSessionPage.VIEW_SESSION_UPDATE,
                  );
                }}
              >
                <p className='text-sm font-bold text-slate-500'>
                  {index + 1}. {update.variant} {update.title}
                </p>
              </GlassWindowContents>
            </GlassWindowFrame>
          ))}
        </div>
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
