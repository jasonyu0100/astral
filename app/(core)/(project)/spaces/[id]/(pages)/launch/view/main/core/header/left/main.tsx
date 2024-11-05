import { ContextForSpaceMain } from '@/architecture/controller/space/main';
import { BarDividerIndicator } from '@/components/indicator/bar/main';
import { AstralAddIcon } from '@/icons/add/main';
import { AstralSidebarRightIcon } from '@/icons/sidebar-right/main';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import {
  ContextForSpacesLaunch,
  SpacesLaunchSidebarVisibility,
} from '../../../../../controller/main';
import { ContextForSpacesLaunchModals } from '../../../../../modal/controller/main';

export function SpacesLaunchHeaderLeft() {
  const modalController = useContext(ContextForSpacesLaunchModals);
  const {
    state: { sidebarVisibility },
    actions: { updateSidebarVisibility },
  } = useContext(ContextForSpacesLaunch);
  const spacesLaunchModalController = useContext(ContextForSpacesLaunchModals);
  const spaceMainController = useContext(ContextForSpaceMain);

  return (
    <>
      <div className='flex w-1/3 flex-row items-center space-x-[1rem]'>
        <AstralSidebarRightIcon
          className={ctwn({
            'rotate-180 transform':
              sidebarVisibility === SpacesLaunchSidebarVisibility.CLOSED,
          })}
          onClick={() => {
            updateSidebarVisibility(
              sidebarVisibility === SpacesLaunchSidebarVisibility.CLOSED
                ? SpacesLaunchSidebarVisibility.OPEN
                : SpacesLaunchSidebarVisibility.CLOSED,
            );
          }}
        />
        <BarDividerIndicator />
        <AstralAddIcon
          onClick={() => modalController.addPostController.open()}
        />
        {/* <AstralShareIcon
          onClick={() => {
            navigator.clipboard.writeText(
              `astral.fun${liveMap.live.link(spaceMainController.state.objId)}`,
            );
            spacesLaunchModalController.shareReviewController.open();
          }}
        /> */}
      </div>
    </>
  );
}
