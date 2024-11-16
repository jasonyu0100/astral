import { ContextForSpaceMain } from '@/architecture/controller/space/main';
import { BarDividerIndicator } from '@/components/indicator/bar/main';
import { AstralAddIcon } from '@/icons/add/main';
import { AstralCloseIcon } from '@/icons/close/main';
import { AstralSidebarLeftIcon } from '@/icons/sidebar-left/main';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import {
  ContextForSpacesPosts,
  SpacesPostsSidebarVisibility,
} from '../../../../../controller/main';
import { ContextForSpacesPostsModals } from '../../../../../modal/controller/main';

export function SpacesPostsHeaderLeft() {
  const spacesPublicModalController = useContext(ContextForSpacesPostsModals);
  const spacesPublicController = useContext(ContextForSpacesPosts);
  const spaceMainController = useContext(ContextForSpaceMain);

  return (
    <>
      <div className='flex w-1/3 flex-row items-center space-x-[1rem]'>
        <div
          className={`flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-full ${spacesPublicController.state.sidebarVisibility === SpacesPostsSidebarVisibility.OPEN ? 'bg-blue-500' : 'bg-slate-500'}`}
          onClick={() => {
            spacesPublicController.actions.updateSidebarVisibility(
              spacesPublicController.state.sidebarVisibility ===
                SpacesPostsSidebarVisibility.CLOSED
                ? SpacesPostsSidebarVisibility.OPEN
                : SpacesPostsSidebarVisibility.CLOSED,
            );
          }}
        >
          <AstralSidebarLeftIcon
            className={ctwn({
              'rotate-180 transform':
                spacesPublicController.state.sidebarVisibility ===
                SpacesPostsSidebarVisibility.CLOSED,
            })}
          />
        </div>
        <BarDividerIndicator />
        <AstralAddIcon
          onClick={() => spacesPublicModalController.addPostController.open()}
        />
        <AstralCloseIcon
          onClick={() => {
            spacesPublicController.actions.deletedSelectedPosts();
          }}
        />
        {/* <AstralShareIcon
          onClick={() => {
            navigator.clipboard.writeText(
              `astral.fun${liveMap.live.link(spaceMainController.state.objId)}`,
            );
            spacesPublicModalController.shareReviewController.open();
          }}
        /> */}
      </div>
    </>
  );
}
