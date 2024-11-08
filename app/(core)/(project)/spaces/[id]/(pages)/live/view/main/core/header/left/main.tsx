import { ContextForSpaceMain } from '@/architecture/controller/space/main';
import { BarDividerIndicator } from '@/components/indicator/bar/main';
import { AstralAddIcon } from '@/icons/add/main';
import { AstralCloseIcon } from '@/icons/close/main';
import { AstralSidebarRightIcon } from '@/icons/sidebar-right/main';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import {
  ContextForSpacesLive,
  SpacesLiveSidebarVisibility,
} from '../../../../../controller/main';
import { ContextForSpacesLiveModals } from '../../../../../modal/controller/main';

export function SpacesLiveHeaderLeft() {
  const spacesLiveModalController = useContext(ContextForSpacesLiveModals);
  const spacesLiveController = useContext(ContextForSpacesLive);
  const spaceMainController = useContext(ContextForSpaceMain);

  return (
    <>
      <div className='flex w-1/3 flex-row items-center space-x-[1rem]'>
        <AstralSidebarRightIcon
          className={ctwn({
            'rotate-180 transform':
              spacesLiveController.state.sidebarVisibility ===
              SpacesLiveSidebarVisibility.CLOSED,
          })}
          onClick={() => {
            spacesLiveController.actions.updateSidebarVisibility(
              spacesLiveController.state.sidebarVisibility ===
                SpacesLiveSidebarVisibility.CLOSED
                ? SpacesLiveSidebarVisibility.OPEN
                : SpacesLiveSidebarVisibility.CLOSED,
            );
          }}
        />
        <BarDividerIndicator />
        <AstralAddIcon
          onClick={() => spacesLiveModalController.addPostController.open()}
        />
        <AstralCloseIcon
          onClick={() => {
            spacesLiveController.actions.deletedSelectedPosts();
          }}
        />
        {/* <AstralShareIcon
          onClick={() => {
            navigator.clipboard.writeText(
              `astral.fun${liveMap.live.link(spaceMainController.state.objId)}`,
            );
            spacesLiveModalController.shareReviewController.open();
          }}
        /> */}
      </div>
    </>
  );
}
