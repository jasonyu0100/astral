import { AstralAddIcon } from '@/icons/add/main';
import { AstralHiearchyIcon } from '@/icons/hiearchy/main';
import { AstralSidebarLeftIcon } from '@/icons/sidebar-left/main';
import { AstralTableIcon } from '@/icons/table/main';
import { BarDividerIndicator } from '@/ui/indicator/bar/main';
import { ctwn } from '@/utils/cn';

export function HorizonsBoardHeaderLeft() {
  // const {
  //   state: { dataMode, sidebarVisibility },
  //   actions: { updateDataMode, updateSidebarVisibility },
  // } = useContext(ContextForHorizonsBoard);
  // const modalController = useContext(ContextForHorizonsBoardModals);

  return (
    <div className='flex w-1/3 flex-row items-center space-x-[1rem]'>
      <AstralSidebarLeftIcon
        className={ctwn({
          // 'rotate-180 transform':
          //   sidebarVisibility === HorizonsBoardSidebarVisibility.CLOSED,
        })}
        onClick={() => {
          // updateSidebarVisibility(
          //   sidebarVisibility === HorizonsBoardSidebarVisibility.CLOSED
          //     ? HorizonsBoardSidebarVisibility.OPEN
          //     : HorizonsBoardSidebarVisibility.CLOSED,
          // );
        }}
      />
      <BarDividerIndicator />
      <AstralTableIcon
        onClick={() => {
          // if (dataMode === HorizonsBoardDataMode.COLUMNS) {
          //   updateDataMode(HorizonsBoardDataMode.TABLE);
          // } else {
          //   updateDataMode(HorizonsBoardDataMode.COLUMNS);
          // }
        }}
        className={ctwn('fill-slate-300', {
          // 'fill-blue-500': dataMode === HorizonsBoardDataMode.TABLE,
        })}
      />
      <AstralHiearchyIcon />
      <BarDividerIndicator />
      <AstralAddIcon />
    </div>
  );
}
