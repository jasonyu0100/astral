import {
  ContextForSpacesUpdates,
  SpacesUpdatesFeedView,
} from '@/(core)/(project)/spaces/[id]/(pages)/updates/controller/main';
import { ContextForUserPostListFromChapter } from '@/architecture/controller/post/list-from-chapter';
import { useControllerForUserMain } from '@/architecture/controller/user/main';
import { ContextForUserPostObj } from '@/architecture/model/post/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { useControllerForHoverable } from '@/logic/contexts/hoverable/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
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
      onMouseOver={() => hoverableController.onHover()}
      onMouseOut={() => hoverableController.onUnhover()}
    >
      <GlassWindowFrame className='p-[1rem]'>
        <GlassWindowContents className='flex w-full flex-col space-y-[2rem]'>
          <div
            className='grid w-full cursor-pointer grid-cols-9 items-center space-x-[1rem]'
            onClick={() => {
              spacesUpdatesController.actions.updateFeedView(
                SpacesUpdatesFeedView.POST,
              );
              postListController.actions.stateActions.select(postObj);
            }}
          >
            <div>
              <p className='text-xl text-slate-300'>{index + 1}</p>
            </div>
            <div className='col-span-3'>
              <p className='whitespace-wrap text-xl font-bold text-slate-300'>
                {postObj?.title?.trim() || 'Untitled'}
              </p>
            </div>
            <div>
              <p className=' text-lg font-light text-white'>
                {getFormattedAMPM(new Date(postObj?.created ?? ''))}
              </p>
            </div>
            <div className='col-span-2'>
              <p className=' text-lg font-light text-white'>
                {getFormattedDate(new Date(postObj?.created ?? ''))}
              </p>
            </div>
            <div className='col-span-2'>
              <p className='text-lg text-slate-300'>
                {userObj.state.obj.displayName}
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
