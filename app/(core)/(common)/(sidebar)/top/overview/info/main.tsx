'use client';
import { useGlobalSpace } from '@/(logic)/internal/store/space/main';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import { cn } from '@/(utils)/cn';
import { useContext, useEffect, useState } from 'react';
import { ContextForDashboardSidebar } from '../../../main';

export function DashboardSidebarTopOverviewInfo() {
  const dashboardSidebar = useContext(ContextForDashboardSidebar);
  const active = !dashboardSidebar.indicator;
  const user = useGlobalUser((state) => state.user);
  const space = useGlobalSpace((state) => state.space);
  const [title, changeTitle] = useState('Untitled');
  const [name, changeName] = useState('No Author');

  useEffect(() => {
    changeTitle(space?.title || 'Untitled');
    changeName(`${user?.fname || ''} ${user?.lname || ''}`);
  }, [space, user]);

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
        {title}
      </p>
      <p
        className={cn(
          'h-[25px] text-base font-normal leading-normal text-slate-300',
        )}
      >
        {name}
      </p>
    </div>
  );
}
