import { userProfileMap } from '@/(core)/(profile)/user/[id]/map';
import { ContextForUserObj } from '@/(server)/(model)/user/main';
import { useContext } from 'react';

export function CreativeNetworkNumberPlay() {
  const user = useContext(ContextForUserObj);

  return (
    <a href={userProfileMap.profile.link(user.id)}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-[30px] w-[30px]'
        viewBox='0 0 24 24'
        fill='none'
      >
        <mask
          id='mask0_2968_7'
          maskUnits='userSpaceOnUse'
          x='0'
          y='0'
          width='24'
          height='24'
        >
          <rect width='24' height='24' fill='#D9D9D9' />
        </mask>
        <g mask='url(#mask0_2968_7)'>
          <path d='M8 19V5L19 12L8 19Z' fill='#CBD5E1' />
        </g>
      </svg>
    </a>
  );
}
