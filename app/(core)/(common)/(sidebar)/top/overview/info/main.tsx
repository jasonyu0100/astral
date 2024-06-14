'use client';
import { useGlobalSpace } from '@/(logic)/internal/store/space/main';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import { SpaceObj } from '@/(server)/(model)/space/main';
import { UserObj } from '@/(server)/(model)/user/main';
import { cn } from '@/(utils)/cn';
import { useContext, useEffect, useState } from 'react';
import { ContextForDashboardSidebar } from '../../../main';

export function DashboardSidebarTopOverviewInfo() {
  const dashboardSidebar = useContext(ContextForDashboardSidebar);
  const active = !dashboardSidebar.indicator;
  const user = useGlobalUser((state) => state.user);
  const space = useGlobalSpace((state) => state.space);
  const [stateUser, setStateUser] = useState({} as UserObj);
  const [stateSpace, setStateSpace] = useState({} as SpaceObj);

  useEffect(() => {
    setStateUser(user);
    setStateSpace(space);
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
        {stateSpace.title || 'Untitled'}
      </p>
      <p
        className={cn(
          'h-[25px] text-base font-normal leading-normal text-slate-300',
        )}
      >
        {stateUser.displayName || 'No Author'}
      </p>
    </div>
  );
}
