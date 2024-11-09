import { BarDividerIndicator } from '@/components/indicator/bar/main';
import { AstralAddIcon } from '@/icons/add/main';
import { AstralBookSparkIcon } from '@/icons/book-spark/main';
import { AstralSidebarLeftIcon } from '@/icons/sidebar-left/main';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import {
  ContextForSpacesFocus,
  SpacesFocusSidebarVisibility,
} from '../../../../controller/main';
import { ContextForSpacesFocusModals } from '../../../../modal/controller/main';

export function SpacesFocusHeaderLeft() {
  const {
    state: { sidebarVisibility },
    actions: { updateSidebarVisibility },
  } = useContext(ContextForSpacesFocus);
  const spacesFocusModalController = useContext(ContextForSpacesFocusModals);

  return (
    <div className='flex w-1/3 flex-row items-center space-x-[1rem]'>
      <AstralSidebarLeftIcon
        className={ctwn({
          'rotate-180 transform':
            sidebarVisibility === SpacesFocusSidebarVisibility.CLOSED,
        })}
        onClick={() => {
          updateSidebarVisibility(
            sidebarVisibility === SpacesFocusSidebarVisibility.CLOSED
              ? SpacesFocusSidebarVisibility.OPEN
              : SpacesFocusSidebarVisibility.CLOSED,
          );
        }}
      />
      <BarDividerIndicator />
      <AstralAddIcon
        onClick={() => spacesFocusModalController.addTaskController.open()}
      />
      <AstralBookSparkIcon
        onClick={() => spacesFocusModalController.addGenerateController.open()}
      />
    </div>
  );
}
