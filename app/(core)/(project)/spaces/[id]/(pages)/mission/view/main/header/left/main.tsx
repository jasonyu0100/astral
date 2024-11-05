import { BarDividerIndicator } from '@/components/indicator/bar/main';
import { AstralAddIcon } from '@/icons/add/main';
import { AstralEditSquareIcon } from '@/icons/edit-square/main';
import { AstralSidebarLeftIcon } from '@/icons/sidebar-left/main';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import {
  ContextForSpacesMission,
  SpacesMissionSidebarVisibility,
} from '../../../../controller/main';
import { ContextForSpacesMissionModals } from '../../../../modal/controller/main';

export function SpacesMissionHeaderLeft() {
  const {
    state: { sidebarVisibility },
    actions: { updateSidebarVisibility },
  } = useContext(ContextForSpacesMission);
  const modalController = useContext(ContextForSpacesMissionModals);

  return (
    <div className='flex w-1/3 flex-row items-center space-x-[1rem]'>
      <AstralSidebarLeftIcon
        className={ctwn({
          'rotate-180 transform':
            sidebarVisibility === SpacesMissionSidebarVisibility.CLOSED,
        })}
        onClick={() => {
          updateSidebarVisibility(
            sidebarVisibility === SpacesMissionSidebarVisibility.CLOSED
              ? SpacesMissionSidebarVisibility.OPEN
              : SpacesMissionSidebarVisibility.CLOSED,
          );
        }}
      />
      <BarDividerIndicator />
      <AstralAddIcon onClick={() => modalController.addTaskController.open()} />
      <AstralEditSquareIcon
        onClick={() => alert('Task generation coming soon')}
      />
    </div>
  );
}
