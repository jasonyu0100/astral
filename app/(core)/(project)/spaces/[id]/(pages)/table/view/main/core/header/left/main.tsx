import { ContextForSpaceMain } from '@/architecture/controller/space/main';
import { BarDividerIndicator } from '@/components/indicator/bar/main';
import { AstralAddIcon } from '@/icons/add/main';
import { AstralSidebarRightIcon } from '@/icons/sidebar-right/main';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import {
  ContextForSpacesTable,
  SpacesTableSidebarVisibility,
} from '../../../../../controller/main';
import { ContextForSpacesTableModals } from '../../../../../modal/controller/main';

export function SpacesTableHeaderLeft() {
  const modalController = useContext(ContextForSpacesTableModals);
  const {
    state: { sidebarVisibility },
    actions: { updateSidebarVisibility },
  } = useContext(ContextForSpacesTable);
  const spacesTableModalController = useContext(ContextForSpacesTableModals);
  const spaceMainController = useContext(ContextForSpaceMain);

  return (
    <>
      <div className='flex w-1/3 flex-row items-center space-x-[1rem]'>
        <AstralSidebarRightIcon
          className={ctwn({
            'rotate-180 transform':
              sidebarVisibility === SpacesTableSidebarVisibility.CLOSED,
          })}
          onClick={() => {
            updateSidebarVisibility(
              sidebarVisibility === SpacesTableSidebarVisibility.CLOSED
                ? SpacesTableSidebarVisibility.OPEN
                : SpacesTableSidebarVisibility.CLOSED,
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
            spacesTableModalController.shareReviewController.open();
          }}
        /> */}
      </div>
    </>
  );
}
