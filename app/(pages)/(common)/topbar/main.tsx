import { NavbarAvatar } from "./container/right/avatar/main";
import { NavbarContainer } from "./container/main";
import { NavbarIconLink } from "./container/right/icon-link/main";
import { NavbarLeftLinks } from "./container/left/main";
import { NavbarLink } from "./container/left/link/main";
import { NavbarLogoLink } from "./container/left/logo/main";
import { NavbarRightSide } from "./container/right/main";
import { SettingsIcon } from "../icons/global/settings/main";
import { NotificationsIcon } from "../icons/global/notifications/main";

export default function Navbar() {
  return (
    <NavbarContainer>
      <NavbarLogoLink href="/gallery/now"/>
      <NavbarLeftLinks>
        <NavbarLink href="/gallery/now">HOME</NavbarLink>
        <NavbarLink href="/about">ABOUT</NavbarLink>
        <NavbarLink href="/learn">LEARN</NavbarLink>
        <NavbarLink href="/pricing">PRICING</NavbarLink>
        <NavbarLink href="/dev/layer">DEV</NavbarLink>
      </NavbarLeftLinks>
      <NavbarRightSide>
        <NavbarIconLink>
          <NotificationsIcon />
        </NavbarIconLink>
        <NavbarIconLink>
          <SettingsIcon />
        </NavbarIconLink>
      </NavbarRightSide>
      <NavbarAvatar href="/" />
    </NavbarContainer>
  );
}
