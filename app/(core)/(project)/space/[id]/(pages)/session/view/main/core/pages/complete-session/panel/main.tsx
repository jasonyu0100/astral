import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { HorizontalDivider } from '@/(components)/(indicator)/divider/horizontal/main';
import { ContextForSessionUpdateOfChapterList } from '@/(server)/(controller)/space/chapter/session/update/chapter-list';
import { useContext } from 'react';
import {
  ContextForSpaceSessionController,
  SpaceSessionPage,
} from '../../../../../../controller/space-session/main';

export function SpaceSessionCompleteSessionPanel() {
  const spaceSessionController = useContext(ContextForSpaceSessionController);
  const updateListController = useContext(ContextForSessionUpdateOfChapterList);
  const updates = updateListController.state?.objs || [];

  return (
    <GlassWindowFrame className='h-full w-[18rem]'>
      <GlassWindowContents className='flex h-full w-full flex-col justify-between space-y-[1rem] px-[1rem]'>
        <div className='flex flex-col space-y-[1rem] py-[1rem]'>
          <p
            className='text-md cursor-pointer font-bold text-slate-300'
            onClick={() =>
              spaceSessionController.setPage(
                SpaceSessionPage.COMPLETE_SESSION_UPDATE,
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
                    SpaceSessionPage.COMPLETE_SESSION_UPDATE,
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
