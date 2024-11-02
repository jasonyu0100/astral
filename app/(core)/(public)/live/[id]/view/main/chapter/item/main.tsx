import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { useControllerForHoverable } from '@/logic/contexts/hoverable/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { ContextForUserPostListFromChapter } from '@/server/controller/post/list-from-chapter';
import { ContextForUserPostObj } from '@/server/model/post/main';
import { glassFx } from '@/style/data';
import { getFormattedAMPM, getFormattedDate } from '@/utils/dateFormat';
import { useContext } from 'react';
import {
  ContextForPublicSpace,
  PublicSpaceFeedView,
} from '../../../../controller/main';

export function PublicSpaceChapterPost() {
  const hoverableController = useControllerForHoverable();
  const index = useContext(ContextForIndexable);
  const publicSpaceController = useContext(ContextForPublicSpace);
  const postObj = useContext(ContextForUserPostObj);
  const postListController = useContext(ContextForUserPostListFromChapter);

  return (
    <div
      className='w-full'
      onMouseOver={() => hoverableController.onHover()}
      onMouseOut={() => hoverableController.onUnhover()}
    >
      <GlassWindowFrame className='p-[1rem]'>
        <GlassWindowContents className='flex w-full flex-col space-y-[2rem]'>
          <div
            className='grid w-full cursor-pointer grid-cols-7 items-center'
            onClick={() => {
              publicSpaceController.actions.updateFeedView(
                PublicSpaceFeedView.POST,
              );
              postListController.actions.stateActions.select(postObj);
            }}
          >
            <div className='flex h-[2rem] w-[2rem] items-center justify-center rounded-full bg-blue-500'>
              <p className='text-xl font-bold text-white'>{index + 1}</p>
            </div>
            <div className='col-span-3'>
              <p className='text-xl font-bold text-slate-300'>
                {postObj?.title?.trim() || 'Untitled'}
              </p>
            </div>
            <div>
              <p className=' text-xl font-bold text-white'>
                {getFormattedAMPM(new Date(postObj?.created ?? ''))}
              </p>
            </div>
            <div className='col-span-2'>
              <p className=' text-xl font-bold text-white'>
                {getFormattedDate(new Date(postObj?.created ?? ''))}
              </p>
            </div>
          </div>
        </GlassWindowContents>
        {hoverableController.hovered && (
          <GlassWindowPane glassFx={glassFx['glass-10']} />
        )}
      </GlassWindowFrame>
    </div>
  );
}
