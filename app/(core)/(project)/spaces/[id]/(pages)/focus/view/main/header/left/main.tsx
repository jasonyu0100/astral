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
  const spacesFocusController = useContext(ContextForSpacesFocus);
  const spacesFocusModalController = useContext(ContextForSpacesFocusModals);

  return (
    <div className='flex w-1/3 flex-row items-center space-x-[1rem]'>
      <div
        className={`flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-full ${spacesFocusController.state.sidebarVisibility === SpacesFocusSidebarVisibility.OPEN ? 'bg-blue-500' : 'bg-slate-500'}`}
        onClick={() => {
          spacesFocusController.actions.updateSidebarVisibility(
            spacesFocusController.state.sidebarVisibility ===
              SpacesFocusSidebarVisibility.CLOSED
              ? SpacesFocusSidebarVisibility.OPEN
              : SpacesFocusSidebarVisibility.CLOSED,
          );
        }}
      >
        <AstralSidebarLeftIcon
          className={ctwn({
            'rotate-180 transform':
              spacesFocusController.state.sidebarVisibility ===
              SpacesFocusSidebarVisibility.CLOSED,
          })}
        />
      </div>
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
