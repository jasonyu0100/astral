import { BarDividerIndicator } from '@/components/indicator/bar/main';
import { AstralAddIcon } from '@/icons/add/main';
import { AstralEditSquareIcon } from '@/icons/edit-square/main';
import { AstralSidebarLeftIcon } from '@/icons/sidebar-left/main';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import {
  ContextForSpacesProgress,
  SpacesProgressSidebarVisibility,
} from '../../../../controller/main';
import { ContextForSpacesProgressModals } from '../../../../modal/controller/main';

export function SpacesProgressHeaderLeft() {
  const {
    state: { sidebarVisibility },
    actions: { updateSidebarVisibility },
  } = useContext(ContextForSpacesProgress);
  const modalController = useContext(ContextForSpacesProgressModals);

  return (
    <div className='flex w-1/3 flex-row items-center space-x-[1rem]'>
      <AstralSidebarLeftIcon
        className={ctwn({
          'rotate-180 transform':
            sidebarVisibility === SpacesProgressSidebarVisibility.CLOSED,
        })}
        onClick={() => {
          updateSidebarVisibility(
            sidebarVisibility === SpacesProgressSidebarVisibility.CLOSED
              ? SpacesProgressSidebarVisibility.OPEN
              : SpacesProgressSidebarVisibility.CLOSED,
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
