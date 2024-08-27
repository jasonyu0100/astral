'use client';
import { ContextForCurrentSpaceObj } from '@/(server)/model/space/main';
import { AstralArrowCircleLeftIcon } from '@/icons/arrow-circle-left/main';
import { effectFx } from '@/style/data';
import { cn } from '@/utils/cn';
import { useContext } from 'react';
import { ContextForDashboardSidebar } from '../../../main';

export function DashboardSidebarTopOveriewCover() {
  const dashboardSidebar = useContext(ContextForDashboardSidebar);
  const active = !dashboardSidebar.indicator;
  const currentSpace = useContext(ContextForCurrentSpaceObj);

  return (
    <div className='relative flex-shrink-0'>
      {dashboardSidebar.minimised ? (
        <AstralArrowCircleLeftIcon className='h-[2.5rem] w-[2.5rem]' />
      ) : (
        <img
          src={currentSpace?.thumbnail?.src || '/brand/icon-bg-sm.png'}
          className={cn('h-[2.5rem] w-[2.5rem] rounded-full', {
            [effectFx['glow-lg']]: active,
          })}
        />
      )}
    </div>
  );
}
