import ShowcaseComponent from "@ui/showcase";
import DefaultDropDown from "./default-drop-down";
import HoverDropDown from "./hover-drop-down";
import DelayDropDown from "./delay-drop-down";
import DividerDropDown from "./divider-drop-down";
import HeaderDropDown from "./header-drop-down";
import MultiLevelDropDown from "./multi-level-drop-down";
import CheckboxDropDown from "./checkbox-drop-down";
import HelperTextCheckboxDropDown from "./helper-text-checkbox-drop-down";
import RadioDropDown from "./radio-drop-down";
import HelperTextRadioDropDown from "./helper-text-radio-drop-down";
import ToggleDropDown from "./toggle-drop-down";
import ScrollDropDown from "./scroll-drop-down";
import SearchDropDown from "./search-drop-down";
import MenuDropDown from "./menu-drop-down";
import NotificationDropDown from "./notification-drop-down";
import AvatarDropDown from "./avatar-drop-down";
import AvatarNameDropDown from "./avatar-name-drop-down";

export default function DropdownPage() {
  return (
    <div>
      <ShowcaseComponent title="Default Drop Down">
        <DefaultDropDown />
      </ShowcaseComponent>
      <ShowcaseComponent title="Hover Drop Down">
        <HoverDropDown />
      </ShowcaseComponent>
      <ShowcaseComponent title="Delay Drop Down">
        <DelayDropDown />
      </ShowcaseComponent>
      <ShowcaseComponent title="Divider Drop Down">
        <DividerDropDown />
      </ShowcaseComponent>
      <ShowcaseComponent title="Header Drop Down">
        <HeaderDropDown />
      </ShowcaseComponent>
      <ShowcaseComponent title="Multi Level Drop Down">
        <MultiLevelDropDown />
      </ShowcaseComponent>
      <ShowcaseComponent title="Checkbox Drop Down">
        <CheckboxDropDown />
      </ShowcaseComponent>
      <ShowcaseComponent title=" Helper Text Checkbox Drop Down">
        <HelperTextCheckboxDropDown />
      </ShowcaseComponent>
      <ShowcaseComponent title="Radio Drop Down">
        <RadioDropDown />
      </ShowcaseComponent>
      <ShowcaseComponent title="Helper Text Drop Down">
        <HelperTextRadioDropDown />
      </ShowcaseComponent>
      <ShowcaseComponent title="Default Drop Down">
        <DefaultDropDown />
      </ShowcaseComponent>
      <ShowcaseComponent title="Toggle Drop Down">
        <ToggleDropDown />
      </ShowcaseComponent>
      <ShowcaseComponent title="Scroll Drop Down">
        <ScrollDropDown />
      </ShowcaseComponent>
      <ShowcaseComponent title="Search Drop Down">
        <SearchDropDown />
      </ShowcaseComponent>
      <ShowcaseComponent title="Menu Drop Down">
        <MenuDropDown />
      </ShowcaseComponent>
      <ShowcaseComponent title="Notification Drop Down">
        <NotificationDropDown />
      </ShowcaseComponent>
      <ShowcaseComponent title="Avatar Drop Down">
        <AvatarDropDown />
      </ShowcaseComponent>
      <ShowcaseComponent title="Avatar Name Drop Down">
        <AvatarNameDropDown />
      </ShowcaseComponent>
    </div>
  );
}
