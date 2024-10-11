import { studioMap } from '@/(core)/(dashboard)/studio/map';
import { TopbarLink } from './link/main';

export function TopbarLeftGroup() {
  return (
    <div className='flex h-full flex-row items-center space-x-[3rem]'>
      <TopbarLink href={studioMap.studio.personal.link}>HOME</TopbarLink>
      <TopbarLink href='/conversational/search'>SEARCH</TopbarLink>
      <TopbarLink href='/pricing'>PRICING</TopbarLink>
    </div>
  );
}
