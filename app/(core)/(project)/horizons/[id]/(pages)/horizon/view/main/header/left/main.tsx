import { AstralSidebarRightIcon } from '@/icons/sidebar-right/main';
import { BarDividerIndicator } from '@/ui/indicator/bar/main';
import { ctwn } from '@/utils/cn';

export function HorizonsHorizonHeaderLeft() {
  return (
    <>
      <div className='flex w-1/3 flex-row items-center space-x-[1rem]'>
        <AstralSidebarRightIcon
          className={ctwn({
            'rotate-180 transform': false,
          })}
          onClick={() => {}}
        />
        <BarDividerIndicator />
      </div>
    </>
  );
}
