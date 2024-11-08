import { homeMap } from '@/(core)/(dashboard)/home/map';
import { TopbarLink } from './link/main';

export function TopbarLeftGroup() {
  return (
    <div className='flex h-full flex-row items-center space-x-[3rem]'>
      <TopbarLink href={homeMap.home.personal.link}>HOME</TopbarLink>
      <TopbarLink href='https://www.youtube.com/@astral-fun' target='_blank'>
        LEARN
      </TopbarLink>
      <TopbarLink href='/pricing'>PRICING</TopbarLink>
      <TopbarLink href='https://auora.atlassian.net/servicedesk/customer/portal/1'>
        SUPPORT
      </TopbarLink>
    </div>
  );
}
