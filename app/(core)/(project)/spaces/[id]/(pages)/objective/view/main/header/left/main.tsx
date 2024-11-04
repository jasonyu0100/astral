import { BarDividerIndicator } from '@/components/indicator/bar/main';
import { AstralAddIcon } from '@/icons/add/main';
import { AstralEditSquareIcon } from '@/icons/edit-square/main';
import { AstralSidebarLeftIcon } from '@/icons/sidebar-left/main';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import {
  ContextForSpacesObjective,
  SpacesObjectiveSidebarVisibility,
} from '../../../../controller/main';
import { ContextForSpacesObjectiveModals } from '../../../../modal/controller/main';

export function SpacesObjectiveHeaderLeft() {
  const {
    state: { sidebarVisibility },
    actions: { updateSidebarVisibility },
  } = useContext(ContextForSpacesObjective);
  const modalController = useContext(ContextForSpacesObjectiveModals);

  return (
    <div className='flex w-1/3 flex-row items-center space-x-[1rem]'>
      <AstralSidebarLeftIcon
        className={ctwn({
          'rotate-180 transform':
            sidebarVisibility === SpacesObjectiveSidebarVisibility.CLOSED,
        })}
        onClick={() => {
          updateSidebarVisibility(
            sidebarVisibility === SpacesObjectiveSidebarVisibility.CLOSED
              ? SpacesObjectiveSidebarVisibility.OPEN
              : SpacesObjectiveSidebarVisibility.CLOSED,
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
