import { TopbarLink } from './link/main';

export function TopbarLeftGroup() {
  return (
    <div className='flex h-full flex-row items-center space-x-[3rem]'>
      <TopbarLink href='https://www.youtube.com/@astral-fun' target='_blank'>
        LEARN
      </TopbarLink>
      <TopbarLink href='https://astral.ghost.io' target='_blank'>
        BLOG
      </TopbarLink>
      <TopbarLink href='/pricing'>PRICING</TopbarLink>
      <TopbarLink href='https://auora.atlassian.net/servicedesk/customer/portal/1'>
        HELP
      </TopbarLink>
    </div>
  );
}
