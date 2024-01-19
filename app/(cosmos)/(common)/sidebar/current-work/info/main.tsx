'use client';
import { useGlobalUser } from '@/state/main';
import { useGlobalSpace } from '@/state/space/main';
import clsx from 'clsx';

export function SidebarWorkInfo({ active }: { active: boolean }) {
  const [userState, _] = useGlobalUser();
  const [state, __] = useGlobalSpace();

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
        {state.space?.title || 'Untitled'}
      </p>
      <p
        className={clsx(
          "h-[25px] text-slate-300 text-base font-normal font-['Creato Display'] leading-normal",
        )}
      >
        {userState?.user?.fname || ''} {userState?.user?.lname || ''}
      </p>
    </div>
  );
}
