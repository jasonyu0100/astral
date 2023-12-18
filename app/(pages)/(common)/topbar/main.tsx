import { TopbarAvatar } from "./container/right-group/avatar/main";
import { TopbarContainer } from "./container/main";
import { TopbarIconLink } from "./container/right-group/icon-link/main";
import { TopbarLeftGroup } from "./container/left-group/main";
import { TopbarLink } from "./container/left-group/link/main";
import { TopbarLogo } from "./container/left-group/logo/main";
import { TopbarRightGroup } from "./container/right-group/main";
import { SettingsIcon } from "./(common)/icons/settings/main";
import { NotificationsIcon } from "./(common)/icons/notifications/main";
import CartIcon from "./(common)/icons/cart/main";

export default function Topbar() {
  return (
    <TopbarContainer>
      <TopbarLogo href="/works/now"/>
      <TopbarLeftGroup>
        <TopbarLink href="/works/now">HOME</TopbarLink>
        <TopbarLink href="/about">ABOUT</TopbarLink>
        <TopbarLink href="/learn">LEARN</TopbarLink>
        <TopbarLink href="/pricing">PRICING</TopbarLink>
        <TopbarLink href="/dev/layer">DEV</TopbarLink>
      </TopbarLeftGroup>
      <TopbarRightGroup>
        <TopbarIconLink>
          <NotificationsIcon />
        </TopbarIconLink>
        <TopbarIconLink>
          <CartIcon />
        </TopbarIconLink>
        <TopbarIconLink>
          <SettingsIcon />
        </TopbarIconLink>
      </TopbarRightGroup>
      <TopbarAvatar href="/" />
    </TopbarContainer>
  );
}
