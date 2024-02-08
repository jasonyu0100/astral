'use client';
import { useGlobalUser } from '@/state/main';
import { useGlobalSpace } from '@/state/space/main';
import { cn } from '@/utils/cn';
import { useEffect, useState } from 'react';

export function SidebarWorkInfo({ active }: { active: boolean }) {
  const [userState, _] = useGlobalUser();
  const [spaceState, __] = useGlobalSpace();
  const [title, changeTitle] = useState('Untitled');
  const [name, changeName] = useState('No Author');

  useEffect(() => {
    changeTitle(spaceState.space?.title || 'Untitled');
    changeName(
      `${userState?.user?.fname || ''} ${userState?.user?.lname || ''}`,
    );
  }, [spaceState, userState]);

  return (
    <div
      id={SidebarWorkInfo.name}
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
