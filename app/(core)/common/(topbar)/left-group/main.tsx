import { studioMap } from '@/(core)/(dashboard)/studio/map';
import { TopbarLink } from './link/main';

export function TopbarLeftGroup() {
  return (
    <div className='flex h-full flex-row items-center space-x-[3rem]'>
      <TopbarLink href={studioMap.studio.personal.link}>HOME</TopbarLink>
      <TopbarLink href='/learn'>LEARN</TopbarLink>
      <TopbarLink href='/pricing'>PRICING</TopbarLink>
      <TopbarLink href='https://auora.atlassian.net/servicedesk/customer/portal/1'>
        SUPPORT
      </TopbarLink>
    </div>
  );
}
