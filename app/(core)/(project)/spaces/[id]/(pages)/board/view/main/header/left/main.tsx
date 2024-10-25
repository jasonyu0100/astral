import { BarDividerIndicator } from '@/components/indicator/bar/main';
import { AstralAddIcon } from '@/icons/add/main';
import { AstralSidebarLeftIcon } from '@/icons/sidebar-left/main';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import {
  ContextForSpacesBoard,
  SpacesBoardSidebarVisibility,
} from '../../../../controller/main';
import { ContextForSpacesBoardModals } from '../../../../modal/controller/main';

export function SpacesBoardHeaderLeft() {
  const {
    state: { sidebarVisibility },
    actions: { updateSidebarVisibility },
  } = useContext(ContextForSpacesBoard);
  const modalController = useContext(ContextForSpacesBoardModals);

  return (
    <div className='flex w-1/3 flex-row items-center space-x-[1rem]'>
      <AstralSidebarLeftIcon
        className={ctwn({
          'rotate-180 transform':
            sidebarVisibility === SpacesBoardSidebarVisibility.CLOSED,
        })}
        onClick={() => {
          updateSidebarVisibility(
            sidebarVisibility === SpacesBoardSidebarVisibility.CLOSED
              ? SpacesBoardSidebarVisibility.OPEN
              : SpacesBoardSidebarVisibility.CLOSED,
          );
        }}
      />
      <BarDividerIndicator />
      <AstralAddIcon onClick={() => modalController.addTaskController.open()} />
      {/* <AstralManufacturingIcon
        onClick={() => modalController.addGenerateController.open()}
      /> */}
    </div>
  );
}
