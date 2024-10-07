import { AstralAddIcon } from '@/icons/add/main';
import { AstralColumnsIcon } from '@/icons/columns/main';
import { AstralSidebarLeftIcon } from '@/icons/sidebar-left/main';
import { AstralTableIcon } from '@/icons/table/main';
import { PipIndicator } from '@/ui/indicator/pip/main';
import { ctwn } from '@/utils/cn';

export function HorizonsFieldHeaderLeft() {
  // const {
  //   state: { dataMode, sidebarVisibility },
  //   actions: { updateDataMode, updateSidebarVisibility },
  // } = useContext(ContextForHorizonsField);
  // const modalController = useContext(ContextForHorizonsFieldModals);

  return (
    <div className='flex w-1/3 flex-row items-center space-x-[1rem]'>
      <AstralSidebarLeftIcon
        className={ctwn({
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
      <PipIndicator />
      <AstralTableIcon
        onClick={() => {
          // if (dataMode === HorizonsFieldDataMode.COLUMNS) {
          //   updateDataMode(HorizonsFieldDataMode.TABLE);
          // } else {
          //   updateDataMode(HorizonsFieldDataMode.COLUMNS);
          // }
        }}
        className={ctwn('fill-slate-300', {
          // 'fill-blue-500': dataMode === HorizonsFieldDataMode.TABLE,
        })}
      />
      <AstralColumnsIcon
        onClick={() => {
          // if (dataMode === HorizonsFieldDataMode.COLUMNS) {
          //   updateDataMode(HorizonsFieldDataMode.TABLE);
          // } else {
          //   updateDataMode(HorizonsFieldDataMode.COLUMNS);
          // }
        }}
        className={ctwn('fill-slate-300', {
          // 'fill-blue-500': dataMode === HorizonsFieldDataMode.COLUMNS,
        })}
      />
      <PipIndicator />
      <AstralAddIcon
      // onClick={() => modalController.addLogController.open()}
      />
    </div>
  );
}
