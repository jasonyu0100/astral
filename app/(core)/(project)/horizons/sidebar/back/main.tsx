import { explorerMap } from '@/(core)/(dashboard)/explorer/map';
import { CommonSidebarTopBack } from '@/(core)/common/(sidebar)/top/back/main';
import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';

export function HorizonSidebarBack() {
  return (
    <div className='flex w-full flex-col items-center'>
      <CommonSidebarTopBack href={explorerMap.explorer.projects.link} />
      <HorizontalDivider className='p-[2rem]' />
    </div>
  );
}
