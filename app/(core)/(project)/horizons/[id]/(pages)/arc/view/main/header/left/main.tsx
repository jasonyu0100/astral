import { BarDividerIndicator } from '@/components/indicator/bar/main';
import { AstralAddIcon } from '@/icons/add/main';
import { AstralSidebarLeftIcon } from '@/icons/sidebar-left/main';
import { ctwn } from '@/utils/cn';

export function HorizonsArcHeaderLeft() {
  // const {
  //   state: { dataMode, sidebarVisibility },
  //   actions: { updateDataMode, updateSidebarVisibility },
  // } = useContext(ContextForHorizonsArc);
  // const modalController = useContext(ContextForHorizonsArcModals);

  return (
    <div className='flex w-1/3 flex-row items-center space-x-[1rem]'>
      <AstralSidebarLeftIcon
        className={ctwn({
          // 'rotate-180 transform':
          //   sidebarVisibility === HorizonsArcSidebarVisibility.CLOSED,
        })}
        onClick={() => {
          // updateSidebarVisibility(
          //   sidebarVisibility === HorizonsArcSidebarVisibility.CLOSED
          //     ? HorizonsArcSidebarVisibility.OPEN
          //     : HorizonsArcSidebarVisibility.CLOSED,
          // );
        }}
      />
      <BarDividerIndicator />
      <AstralAddIcon />
    </div>
  );
}
