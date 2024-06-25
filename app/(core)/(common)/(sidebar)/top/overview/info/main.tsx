'use client';
import { ContextForCurrentSpaceObj } from '@/(server)/(model)/space/main';
import { ContextForLoggedInUserObj } from '@/(server)/(model)/user/main';
import { cn } from '@/(utils)/cn';
import { useContext } from 'react';
import { ContextForDashboardSidebar } from '../../../main';

export function DashboardSidebarTopOverviewInfo() {
  const dashboardSidebar = useContext(ContextForDashboardSidebar);
  const active = !dashboardSidebar.indicator;
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const currentSpace = useContext(ContextForCurrentSpaceObj);

  return (
    <div
      id={DashboardSidebarTopOverviewInfo.name}
      className={cn(
        'inline-flex h-[50px] flex-col items-start justify-center',
        {
          'opacity-50': !active,
          'opacity-100': active,
        },
      )}
    >
      <p
        className={cn(
          'h-[25px] overflow-hidden overflow-ellipsis text-xl font-bold leading-7 text-slate-300',
        )}
      >
        {currentSpace.title || 'Untitled'}
      </p>
      <p
        className={cn(
          'h-[25px] text-base font-normal leading-normal text-slate-300',
        )}
      >
        {loggedInUser.displayName || 'No Author'}
      </p>
    </div>
  );
}
