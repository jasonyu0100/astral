import { AstralAddIcon } from '@/icons/add/main';
import { AstralColumnsIcon } from '@/icons/columns/main';
import { AstralSidebarLeftIcon } from '@/icons/sidebar-left/main';
import { AstralTableIcon } from '@/icons/table/main';
import { BarDividerIndicator } from '@/ui/indicator/bar/main';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import {
  ContextForSpacesBoard,
  SpacesBoardDataMode,
  SpacesBoardSidebarVisibility,
} from '../../../../controller/main';
import { ContextForSpacesBoardModals } from '../../../../modal/controller/main';

export function SpacesBoardHeaderLeft() {
  const {
    state: { dataMode, sidebarVisibility },
    actions: { updateDataMode, updateSidebarVisibility },
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
      <AstralTableIcon
        onClick={() => {
          if (dataMode === SpacesBoardDataMode.ROWS) {
            updateDataMode(SpacesBoardDataMode.TABLE);
          } else {
            updateDataMode(SpacesBoardDataMode.ROWS);
          }
        }}
        className={ctwn('fill-slate-300', {
          'fill-blue-500': dataMode === SpacesBoardDataMode.TABLE,
        })}
      />
      <AstralColumnsIcon
        onClick={() => {
          if (dataMode === SpacesBoardDataMode.ROWS) {
            updateDataMode(SpacesBoardDataMode.TABLE);
          } else {
            updateDataMode(SpacesBoardDataMode.ROWS);
          }
        }}
        className={ctwn('fill-slate-300', {
          'fill-blue-500': dataMode === SpacesBoardDataMode.ROWS,
        })}
      />
      <BarDividerIndicator />
      <AstralAddIcon onClick={() => modalController.addTaskController.open()} />
    </div>
  );
}
