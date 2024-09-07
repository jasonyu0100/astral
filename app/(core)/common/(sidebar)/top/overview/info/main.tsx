'use client';
import { ContextForCurrentSpaceObj } from '@/(server)/model/space/main';
import { ContextForLoggedInUserObj } from '@/(server)/model/user/main';
import { cn } from '@/utils/cn';
import { useContext, useEffect, useState } from 'react';
import { ContextForDashboardSidebar } from '../../../main';

export function DashboardSidebarTopOverviewInfo() {
  const dashboardSidebar = useContext(ContextForDashboardSidebar);
  const active = !dashboardSidebar.indicator;
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const currentSpace = useContext(ContextForCurrentSpaceObj);
  const [userName, setUserName] = useState('Untitled');
  const [spaceName, setSpaceName] = useState('No Author');

  useEffect(() => {
    setUserName(`${loggedInUser.fname} ${loggedInUser.lname}`);
    setSpaceName(currentSpace.title);
  }, [loggedInUser, currentSpace]);

  return (
    <div
      id={DashboardSidebarTopOverviewInfo.name}
      className={cn('flex-col items-center justify-center', {
        'opacity-50': !active,
        'opacity-100': active,
      })}
    >
      <p
        className={cn(
          'h-[25px] overflow-hidden text-xl font-bold leading-7 text-slate-300',
        )}
      >
        {spaceName}
      </p>
      <p
        className={cn(
          'h-[25px] text-base font-normal leading-normal text-slate-300',
        )}
      >
        {userName}
      </p>
    </div>
  );
}
