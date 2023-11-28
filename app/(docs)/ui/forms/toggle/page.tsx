import ShowcaseComponent from "@ui/showcase";
import DefaultToggle from "./default-toggle";
import ColorToggle from "./color-toggle";
import SizeToggle from "./size-toggle";
import CheckedToggle from "./checked-toggle";
import DisabledToggle from "./disabled-toggle";

export default function TogglePage() {
  return (
    <div>
      <ShowcaseComponent title="Default Toggle">
        <DefaultToggle/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Disabled Toggle">
        <DisabledToggle/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Checked Toggle">
        <CheckedToggle/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Size Toggle">
        <SizeToggle/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Color Toggle">
        <ColorToggle/>
      </ShowcaseComponent>
    </div>
  );
}
