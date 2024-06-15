import { studioMap } from '@/(core)/(dashboard)/studio/map';
import { TopbarLink } from './link/main';

export function TopbarLeftGroup() {
  return (
    <div className='flex h-full flex-row items-center space-x-[3rem]'>
      <TopbarLink href={studioMap.studio.spaces.link}>HOME</TopbarLink>
      <TopbarLink href='/learn'>LEARN</TopbarLink>
      <TopbarLink href='/dev'>DEV</TopbarLink>
      <TopbarLink href='/dilemma'>PLAY</TopbarLink>
      <TopbarLink href='/support'>SUPPORT</TopbarLink>
    </div>
  );
}
