import {
  ContextForSpacesUpdates,
  SpacesUpdatesFeedView,
} from '@/(core)/(project)/spaces/[id]/(pages)/updates/controller/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { useControllerForHoverable } from '@/logic/contexts/hoverable/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { ContextForUserPostListFromChapter } from '@/server/controller/post/list-from-chapter';
import { useControllerForUserMain } from '@/server/controller/user/main';
import { ContextForUserPostObj } from '@/server/model/post/main';
import { glassFx } from '@/style/data';
import { getFormattedAMPM, getFormattedDate } from '@/utils/dateFormat';
import { useContext } from 'react';

export function SpacesUpdatesChapterPost() {
  const hoverableController = useControllerForHoverable();
  const index = useContext(ContextForIndexable);
  const spacesUpdatesController = useContext(ContextForSpacesUpdates);
  const postObj = useContext(ContextForUserPostObj);
  const postListController = useContext(ContextForUserPostListFromChapter);
  const userObj = useControllerForUserMain(postObj.userId);

  return (
    <div
      className='w-full'
      onMouseOver={() => hoverableController.onHover()}
      onMouseOut={() => hoverableController.onUnhover()}
    >
      <GlassWindowFrame className='p-[1rem]'>
        <GlassWindowContents className='flex w-full flex-col space-y-[2rem]'>
          <div
            className='grid w-full cursor-pointer grid-cols-9 items-center justify-items-center gap-[1rem] text-center'
            onClick={() => {
              spacesUpdatesController.actions.updateFeedView(
                SpacesUpdatesFeedView.POST,
              );
              postListController.actions.stateActions.select(postObj);
            }}
          >
            <div className='flex h-[2rem] w-[2rem] items-center justify-center rounded-full bg-blue-500'>
              <p className='text-xl font-bold text-white'>{index + 1}</p>
            </div>
            <div className='col-span-2'>
              <p className='text-xl text-slate-300'>
                {userObj.state.obj.displayName}
              </p>
            </div>
            <div className='col-span-3'>
              <p className='whitespace-wrap text-xl text-slate-300'>
                {postObj?.title?.trim() || 'Untitled'}
              </p>
            </div>
            <div>
              <p className=' text-xl text-white'>
                {getFormattedAMPM(new Date(postObj?.created ?? ''))}
              </p>
            </div>
            <div className='col-span-2'>
              <p className=' text-xl text-white'>
                {getFormattedDate(new Date(postObj?.created ?? ''))}
              </p>
            </div>
            <div>{/* <PublicSpaceChapterPostKarma /> */}</div>
          </div>
        </GlassWindowContents>
        {hoverableController.hovered && (
          <GlassWindowPane glassFx={glassFx['glass-5']} />
        )}
      </GlassWindowFrame>
    </div>
  );
}
