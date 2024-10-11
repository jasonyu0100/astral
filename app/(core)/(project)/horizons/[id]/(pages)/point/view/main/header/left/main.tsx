import { AstralAddIcon } from '@/icons/add/main';
import { AstralHiearchyIcon } from '@/icons/hiearchy/main';
import { AstralSidebarLeftIcon } from '@/icons/sidebar-left/main';
import { AstralTableIcon } from '@/icons/table/main';
import { BarDividerIndicator } from '@/ui/indicator/bar/main';
import { cn } from '@/utils/cn';

export function HorizonsPointHeaderLeft() {
  // const {
  //   state: { dataMode, sidebarVisibility },
  //   actions: { updateDataMode, updateSidebarVisibility },
  // } = useContext(ContextForHorizonsPoint);
  // const modalController = useContext(ContextForHorizonsPointModals);

  return (
    <div className='flex w-1/3 flex-row items-center space-x-[1rem]'>
      <AstralSidebarLeftIcon
        className={cn({
          // 'rotate-180 transform':
          //   sidebarVisibility === HorizonsPointSidebarVisibility.CLOSED,
        })}
        onClick={() => {
          // updateSidebarVisibility(
          //   sidebarVisibility === HorizonsPointSidebarVisibility.CLOSED
          //     ? HorizonsPointSidebarVisibility.OPEN
          //     : HorizonsPointSidebarVisibility.CLOSED,
          // );
        }}
      />
      <BarDividerIndicator />
      <AstralTableIcon
        onClick={() => {
          // if (dataMode === HorizonsPointDataMode.COLUMNS) {
          //   updateDataMode(HorizonsPointDataMode.TABLE);
          // } else {
          //   updateDataMode(HorizonsPointDataMode.COLUMNS);
          // }
        }}
        className={cn('fill-slate-300', {
          // 'fill-blue-500': dataMode === HorizonsPointDataMode.TABLE,
        })}
      />
      <AstralHiearchyIcon />
      <BarDividerIndicator />
      <AstralAddIcon />
    </div>
  );
}
