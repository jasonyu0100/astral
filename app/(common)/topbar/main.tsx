import { TopbarAvatar } from './container/right-group/avatar/main';
import { TopbarContainer } from './container/main';
import { TopbarIconLink } from './container/right-group/icon-link/main';
import { TopbarLeftGroup } from './container/left-group/main';
import { TopbarLink } from './container/left-group/link/main';
import { TopbarLogo } from './container/left-group/logo/main';
import { TopbarRightGroup } from './container/right-group/main';
import { SettingsIcon } from './(common)/icons/settings/main';
import { NotificationsIcon } from './(common)/icons/notifications/main';
import { StackIcon } from './(common)/icons/cart/main';
import { spacesMap } from '@/(cosmos)/(voyager)/spaces/map';

export function Topbar() {
  return (
    <TopbarContainer>
      <TopbarLogo href={spacesMap.spaces.now.link} />
      {/* <TopbarLeftGroup>
        <TopbarLink href={spacesMap.spaces.now.link}>HOME</TopbarLink>
        <TopbarLink href='/about'>ABOUT</TopbarLink>
        <TopbarLink href='/learn'>LEARN</TopbarLink>
        <TopbarLink href='/pricing'>PRICING</TopbarLink>
        <TopbarLink href='/dev/layer'>DEV</TopbarLink>
      </TopbarLeftGroup> */}
      <TopbarRightGroup>
        {/* <TopbarIconLink href='/notifications'>
          <NotificationsIcon />
        </TopbarIconLink> */}
        <TopbarIconLink href='/cart'>
          <StackIcon />
        </TopbarIconLink>
        {/* <TopbarIconLink href='/settings'>
          <SettingsIcon />
        </TopbarIconLink> */}
        <TopbarAvatar href='/profile' />
      </TopbarRightGroup>
    </TopbarContainer>
  );
}
