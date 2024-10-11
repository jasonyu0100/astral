import { AstralAddIcon } from '@/icons/add/main';
import { AstralHiearchyIcon } from '@/icons/hiearchy/main';
import { AstralSidebarLeftIcon } from '@/icons/sidebar-left/main';
import { AstralTableIcon } from '@/icons/table/main';
import { BarDividerIndicator } from '@/ui/indicator/bar/main';
import { cn } from '@/utils/cn';

export function HorizonsFieldHeaderLeft() {
  // const {
  //   state: { dataMode, sidebarVisibility },
  //   actions: { updateDataMode, updateSidebarVisibility },
  // } = useContext(ContextForHorizonsField);
  // const modalController = useContext(ContextForHorizonsFieldModals);

  return (
    <div className='flex w-1/3 flex-row items-center space-x-[1rem]'>
      <AstralSidebarLeftIcon
        className={cn({
          // 'rotate-180 transform':
          //   sidebarVisibility === HorizonsFieldSidebarVisibility.CLOSED,
        })}
        onClick={() => {
          // updateSidebarVisibility(
          //   sidebarVisibility === HorizonsFieldSidebarVisibility.CLOSED
          //     ? HorizonsFieldSidebarVisibility.OPEN
          //     : HorizonsFieldSidebarVisibility.CLOSED,
          // );
        }}
      />
      <BarDividerIndicator />
      <AstralTableIcon
        onClick={() => {
          // if (dataMode === HorizonsFieldDataMode.COLUMNS) {
          //   updateDataMode(HorizonsFieldDataMode.TABLE);
          // } else {
          //   updateDataMode(HorizonsFieldDataMode.COLUMNS);
          // }
        }}
        className={cn('fill-slate-300', {
          // 'fill-blue-500': dataMode === HorizonsFieldDataMode.TABLE,
        })}
      />
      <AstralHiearchyIcon />
      <BarDividerIndicator />
      <AstralAddIcon />
    </div>
  );
}
