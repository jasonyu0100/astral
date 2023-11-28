import ShowcaseComponent from "@ui/showcase";
import DefaultCheckbox from "./default-checkbox";
import DisabledCheckbox from "./disabled-checkbox";
import LinkCheckbox from "./link-checkbox";
import HelperCheckbox from "./helper-checkbox";
import BorderedCheckbox from "./bordered-checkbox";
import ListCheckbox from "./list-checkbox";
import HorizontalListCheckbox from "./horizontal-list-checkbox";
import ColorCheckbox from "./color-checkbox";
import AdvancedCheckbox from "./advanced-checkbox";

export default function CheckboxPage() {
  return (
    <div>
      <ShowcaseComponent title="Default Checkbox">
        <DefaultCheckbox />
      </ShowcaseComponent>
      <ShowcaseComponent title="Disabled Checkbox">
        <DisabledCheckbox />
      </ShowcaseComponent>
      <ShowcaseComponent title="Link Checkbox">
        <LinkCheckbox />
      </ShowcaseComponent>
      <ShowcaseComponent title="Helper Checkbox">
        <HelperCheckbox />
      </ShowcaseComponent>
      <ShowcaseComponent title="Bordered Checkbox">
        <BorderedCheckbox />
      </ShowcaseComponent>
      <ShowcaseComponent title="List Checkbox">
        <ListCheckbox />
      </ShowcaseComponent>
      <ShowcaseComponent title="Horizontal List Checkbox">
        <HorizontalListCheckbox />
      </ShowcaseComponent>
      <ShowcaseComponent title="Color Checkbox">
        <ColorCheckbox />
      </ShowcaseComponent>
      <ShowcaseComponent title="Advanced Checkbox">
        <AdvancedCheckbox />
      </ShowcaseComponent>
    </div>
  );
}
