import { BarDividerIndicator } from '@/components/indicator/bar/main';
import { AstralAddIcon } from '@/icons/add/main';
import { AstralBookSparkIcon } from '@/icons/book-spark/main';
import { AstralSidebarLeftIcon } from '@/icons/sidebar-left/main';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import {
  ContextForSpacesWork,
  SpacesWorkSidebarVisibility,
} from '../../../../controller/main';
import { ContextForSpacesWorkModals } from '../../../../modal/controller/main';

export function SpacesWorkHeaderLeft() {
  const {
    state: { sidebarVisibility },
    actions: { updateSidebarVisibility },
  } = useContext(ContextForSpacesWork);
  const spacesWorkModalController = useContext(ContextForSpacesWorkModals);

  return (
    <div className='flex w-1/3 flex-row items-center space-x-[1rem]'>
      <AstralSidebarLeftIcon
        className={ctwn({
          'rotate-180 transform':
            sidebarVisibility === SpacesWorkSidebarVisibility.CLOSED,
        })}
        onClick={() => {
          updateSidebarVisibility(
            sidebarVisibility === SpacesWorkSidebarVisibility.CLOSED
              ? SpacesWorkSidebarVisibility.OPEN
              : SpacesWorkSidebarVisibility.CLOSED,
          );
        }}
      />
      <BarDividerIndicator />
      <AstralAddIcon
        onClick={() => spacesWorkModalController.addTaskController.open()}
      />
      <AstralBookSparkIcon
        onClick={() => spacesWorkModalController.addGenerateController.open()}
      />
    </div>
  );
}
