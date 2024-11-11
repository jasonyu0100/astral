import { ContextForSpaceMain } from '@/architecture/controller/space/main';
import { BarDividerIndicator } from '@/components/indicator/bar/main';
import { AstralAddIcon } from '@/icons/add/main';
import { AstralCloseIcon } from '@/icons/close/main';
import { AstralSidebarRightIcon } from '@/icons/sidebar-right/main';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import {
  ContextForSpacesPublic,
  SpacesPublicSidebarVisibility,
} from '../../../../../controller/main';
import { ContextForSpacesPublicModals } from '../../../../../modal/controller/main';

export function SpacesPublicHeaderLeft() {
  const spacesPublicModalController = useContext(ContextForSpacesPublicModals);
  const spacesPublicController = useContext(ContextForSpacesPublic);
  const spaceMainController = useContext(ContextForSpaceMain);

  return (
    <>
      <div className='flex w-1/3 flex-row items-center space-x-[1rem]'>
        <AstralSidebarRightIcon
          className={ctwn({
            'rotate-180 transform':
              spacesPublicController.state.sidebarVisibility ===
              SpacesPublicSidebarVisibility.CLOSED,
          })}
          onClick={() => {
            spacesPublicController.actions.updateSidebarVisibility(
              spacesPublicController.state.sidebarVisibility ===
                SpacesPublicSidebarVisibility.CLOSED
                ? SpacesPublicSidebarVisibility.OPEN
                : SpacesPublicSidebarVisibility.CLOSED,
            );
          }}
        />
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
