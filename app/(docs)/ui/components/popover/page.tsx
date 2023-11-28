import ShowcaseComponent from "@ui/showcase";
import DefaultPopover from "./default-popover";
import UserPopover from "./user-popover";
import CompanyPopover from "./company-popover";
import ImagePopover from "./image-popover";
import DescriptionPopover from "./description-popover";
import ProgressPopover from "./progress-popover";
import PasswordStrengthPopover from "./password-strength-popover";

export default function PopoverPage() {
  return (
    <div>
      <ShowcaseComponent title="Default Popover">
        <DefaultPopover/>
      </ShowcaseComponent>
      <ShowcaseComponent title="User Popover">
        <UserPopover/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Company Popover">
        <CompanyPopover/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Image Popover">
        <ImagePopover/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Description Popover">
        <DescriptionPopover/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Progress Popover">
        <ProgressPopover/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Password Strength Popover">
        <PasswordStrengthPopover/>
      </ShowcaseComponent>
    </div>
  );
}
