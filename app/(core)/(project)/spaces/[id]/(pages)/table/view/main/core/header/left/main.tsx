import { ContextForSpaceMain } from '@/architecture/controller/space/main';
import { BarDividerIndicator } from '@/components/indicator/bar/main';
import { AstralAddIcon } from '@/icons/add/main';
import { AstralRemoveIcon } from '@/icons/remove/main';
import { AstralSidebarRightIcon } from '@/icons/sidebar-right/main';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import {
  ContextForSpacesTable,
  SpacesTableSidebarVisibility,
} from '../../../../../controller/main';
import { ContextForSpacesTableModals } from '../../../../../modal/controller/main';

export function SpacesTableHeaderLeft() {
  const spacesTableModalController = useContext(ContextForSpacesTableModals);
  const spacesTableController = useContext(ContextForSpacesTable);
  const spaceMainController = useContext(ContextForSpaceMain);

  return (
    <>
      <div className='flex w-1/3 flex-row items-center space-x-[1rem]'>
        <AstralSidebarRightIcon
          className={ctwn({
            'rotate-180 transform':
              spacesTableController.state.sidebarVisibility ===
              SpacesTableSidebarVisibility.CLOSED,
          })}
          onClick={() => {
            spacesTableController.actions.updateSidebarVisibility(
              spacesTableController.state.sidebarVisibility ===
                SpacesTableSidebarVisibility.CLOSED
                ? SpacesTableSidebarVisibility.OPEN
                : SpacesTableSidebarVisibility.CLOSED,
            );
          }}
        />
        <BarDividerIndicator />
        <AstralAddIcon
          onClick={() => spacesTableModalController.addPostController.open()}
        />
        <AstralRemoveIcon
          onClick={() => {
            spacesTableController.actions.deletedSelectedPosts();
          }}
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
