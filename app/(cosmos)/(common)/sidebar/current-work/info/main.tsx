'use client';
import { useGlobalUser } from '@/state/main';
import { useGlobalSpace } from '@/state/space/main';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

export function SidebarWorkInfo({ active }: { active: boolean }) {
  const [userState, _] = useGlobalUser();
  const [spaceState, __] = useGlobalSpace();
  const [title, changeTitle] = useState('Untitled');
  const [name, changeName] = useState("No Author")

  useEffect(() => {
    changeTitle(spaceState.space?.title || 'Untitled');
    changeName(`${userState?.user?.fname || ''} ${userState?.user?.lname || ''}`);
  }, [spaceState, userState]);
  return (
    <div
      id={SidebarWorkInfo.name}
      className={clsx(
        'h-[50px] flex-col justify-center items-start inline-flex',
        {
          'opacity-50': !active,
          'opacity-100': active,
        },
      )}
    >
      <p
        className={clsx(
          "h-[25px] text-slate-300 text-xl font-bold font-['Creato Display'] leading-7",
        )}
      >
        {title}
      </p>
      <p
        className={clsx(
          "h-[25px] text-slate-300 text-base font-normal font-['Creato Display'] leading-normal",
        )}
      >
        {name}
      </p>
    </div>
  );
}
