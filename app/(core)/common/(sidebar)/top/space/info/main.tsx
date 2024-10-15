'use client';
import { ContextForCurrentSpaceObj } from '@/(server)/model/space/main';
import { ContextForLoggedInUserObj } from '@/(server)/model/user/main';
import { ctwn } from '@/utils/cn';
import { useContext, useEffect, useState } from 'react';
import { ContextForCommonSidebar } from '../../../main';

export function CommonSidebarTopSpaceInfo() {
  const commonSidebar = useContext(ContextForCommonSidebar);
  const active = !commonSidebar.indicator;
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const currentSpace = useContext(ContextForCurrentSpaceObj);
  const [userName, setUserName] = useState('Untitled');
  const [spaceName, setSpaceName] = useState('No Author');

  useEffect(() => {
    setUserName(loggedInUser.fname);
    setSpaceName(currentSpace.title);
  }, [loggedInUser, currentSpace]);

  return (
    <div
      id={CommonSidebarTopSpaceInfo.name}
      className={ctwn('flex-col items-center justify-center', {
        'opacity-50': !active,
        'opacity-100': active,
      })}
    >
      <p
        className={ctwn(
          'h-[25px] overflow-hidden text-xl font-bold leading-7 text-slate-300',
        )}
      >
        {spaceName?.trim() || 'Untitled'}
      </p>
      <p
        className={ctwn(
          'h-[25px] text-base font-normal leading-normal text-slate-300',
        )}
      >
        {userName?.trim() || 'Untitled'}
      </p>
    </div>
  );
}
