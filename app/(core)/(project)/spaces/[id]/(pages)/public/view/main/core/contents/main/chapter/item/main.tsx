import { liveMap } from '@/(core)/(live)/live/[id]/map';
import { ContextForSpacesPublic } from '@/(core)/(project)/spaces/[id]/(pages)/public/controller/main';
import { ContextForSpacesPublicModals } from '@/(core)/(project)/spaces/[id]/(pages)/public/modal/controller/main';
import { ContextForUserPostListFromChapter } from '@/architecture/controller/post/list-from-chapter';
import { ContextForSpaceMain } from '@/architecture/controller/space/main';
import { useControllerForUserMain } from '@/architecture/controller/user/main';
import { ContextForUserPostObj } from '@/architecture/model/post/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { AstralMoreIcon } from '@/icons/more/main';
import { useControllerForHoverable } from '@/logic/contexts/hoverable/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { glassFx } from '@/style/data';
import { getFormattedAMPM, getFormattedDate } from '@/utils/dateFormat';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';

export function SpacesPublicChapterPost() {
  const hoverableController = useControllerForHoverable();
  const index = useContext(ContextForIndexable);
  const spacesPublicController = useContext(ContextForSpacesPublic);
  const postObj = useContext(ContextForUserPostObj);
  const postListController = useContext(ContextForUserPostListFromChapter);
  const userObj = useControllerForUserMain(postObj.userId);
  const spacesPublicModalsController = useContext(ContextForSpacesPublicModals);
  const spaceMainController = useContext(ContextForSpaceMain);

  // State for managing checkbox (selectedPosts state)
  const [isChecked, setIsChecked] = useState(
    spacesPublicController.state.selectedPosts.includes(postObj),
  );

  // useEffect to sync the local checkbox state with the selectedPosts in the global state
  useEffect(() => {
    setIsChecked(spacesPublicController.state.selectedPosts.includes(postObj));
  }, [spacesPublicController.state.selectedPosts, postObj]);

  const handleCheckboxChange = () => {
    if (isChecked) {
      spacesPublicController.actions.updateSelectedPosts(
        spacesPublicController.state.selectedPosts.filter(
          (post) => post.id !== postObj.id,
        ),
      );
    } else {
      spacesPublicController.actions.updateSelectedPosts([
        ...spacesPublicController.state.selectedPosts,
        postObj,
      ]);
    }
    setIsChecked(!isChecked); // Toggle checkbox state
  };

  return (
    <div
      onMouseOver={() => hoverableController.onHover()}
      onMouseOut={() => hoverableController.onUnhover()}
    >
      <GlassWindowFrame className='p-[1rem]'>
        <GlassWindowContents className='flex w-full flex-col space-y-[2rem]'>
          <div className='grid w-full grid-cols-9 items-center space-x-[1rem]'>
            <div>
              <input
                type='checkbox'
                className='form-checkbox h-5 w-5 bg-transparent text-blue-600'
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
            </div>
            <div className='col-span-2'>
              <Link
                href={
                  liveMap.live.link(spaceMainController.state.objId) +
                  `?chapter=${postObj.chapterId}&post=${postObj.id}`
                }
              >
                <p className='whitespace-wrap cursor-pointer text-xl font-bold text-blue-500'>
                  {postObj?.title?.trim() || 'Untitled'}
                </p>
              </Link>
            </div>
            <div className='col-span-3'>
              <p className='cursor-pointer text-lg font-light text-slate-300'>
                {postObj?.description?.trim() || 'Untitled'}
              </p>
            </div>
            <div className='col-span-2'>
              <p className='text-md font-light text-white'>
                {getFormattedDate(new Date(postObj?.created ?? ''))}
                <span>, </span>
                {getFormattedAMPM(new Date(postObj?.created ?? ''))}
              </p>
            </div>
            <div>
              <AstralMoreIcon
                onClick={(e) => {
                  e.stopPropagation();
                  spacesPublicModalsController.editPostController.open();
                }}
              />
            </div>
          </div>
        </GlassWindowContents>
        {hoverableController.hovered && (
          <GlassWindowPane glassFx={glassFx['glass-5']} />
        )}
      </GlassWindowFrame>
    </div>
  );
}
