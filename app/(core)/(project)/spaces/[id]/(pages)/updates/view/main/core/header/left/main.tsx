import { ContextForSpaceMain } from '@/architecture/controller/space/main';
import { BarDividerIndicator } from '@/components/indicator/bar/main';
import { AstralAddIcon } from '@/icons/add/main';
import { AstralSidebarRightIcon } from '@/icons/sidebar-right/main';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import {
  ContextForSpacesUpdates,
  SpacesUpdatesSidebarVisibility,
} from '../../../../../controller/main';
import { ContextForSpacesUpdatesModals } from '../../../../../modal/controller/main';

export function SpacesUpdatesHeaderLeft() {
  const modalController = useContext(ContextForSpacesUpdatesModals);
  const {
    state: { sidebarVisibility },
    actions: { updateSidebarVisibility },
  } = useContext(ContextForSpacesUpdates);
  const spacesUpdatesModalController = useContext(
    ContextForSpacesUpdatesModals,
  );
  const spaceMainController = useContext(ContextForSpaceMain);

  return (
    <>
      <div className='flex w-1/3 flex-row items-center space-x-[1rem]'>
        <AstralSidebarRightIcon
          className={ctwn({
            'rotate-180 transform':
              sidebarVisibility === SpacesUpdatesSidebarVisibility.CLOSED,
          })}
          onClick={() => {
            updateSidebarVisibility(
              sidebarVisibility === SpacesUpdatesSidebarVisibility.CLOSED
                ? SpacesUpdatesSidebarVisibility.OPEN
                : SpacesUpdatesSidebarVisibility.CLOSED,
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
            spacesUpdatesModalController.shareReviewController.open();
          }}
        /> */}
      </div>
    </>
  );
}
