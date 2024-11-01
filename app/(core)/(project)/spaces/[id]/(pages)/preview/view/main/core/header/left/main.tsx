import { liveMap } from '@/(core)/(public)/live/[id]/map';
import { BarDividerIndicator } from '@/components/indicator/bar/main';
import { AstralAddIcon } from '@/icons/add/main';
import { AstralShareIcon } from '@/icons/share/main';
import { AstralSidebarRightIcon } from '@/icons/sidebar-right/main';
import { ContextForSpaceMain } from '@/server/controller/space/main';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import {
  ContextForSpacesPreview,
  SpacesPreviewSidebarVisibility,
} from '../../../../../controller/main';
import { ContextForSpacesPreviewModals } from '../../../../../modal/controller/main';

export function SpacesPreviewHeaderLeft() {
  const modalController = useContext(ContextForSpacesPreviewModals);
  const {
    state: { sidebarVisibility },
    actions: { updateSidebarVisibility },
  } = useContext(ContextForSpacesPreview);
  const spacesPreviewModalController = useContext(
    ContextForSpacesPreviewModals,
  );
  const spaceMainController = useContext(ContextForSpaceMain);

  return (
    <>
      <div className='flex w-1/3 flex-row items-center space-x-[1rem]'>
        <AstralSidebarRightIcon
          className={ctwn({
            'rotate-180 transform':
              sidebarVisibility === SpacesPreviewSidebarVisibility.CLOSED,
          })}
          onClick={() => {
            updateSidebarVisibility(
              sidebarVisibility === SpacesPreviewSidebarVisibility.CLOSED
                ? SpacesPreviewSidebarVisibility.OPEN
                : SpacesPreviewSidebarVisibility.CLOSED,
            );
          }}
        />
        <BarDividerIndicator />
        <AstralAddIcon
          onClick={() => modalController.addPostController.open()}
        />
        <AstralShareIcon
          onClick={() => {
            navigator.clipboard.writeText(
              `astral.fun${liveMap.live.link(spaceMainController.state.objId)}`,
            );
            spacesPreviewModalController.shareReviewController.open();
          }}
        />
      </div>
    </>
  );
}
