import ShowcaseComponent from "@ui/showcase";
import DefaultFloatingLabel from "./default-floating-label";
import ValidationFloatingLabel from "./validation-floating-label";
import SizeFloatingLabel from "./size-floating-label";
import HelperFloatingLabel from "./helper-floating-label";
import DisabledFloatingLabel from "./disabled-floating-label";

export default function FloatingLabelPage() {
  return (
    <div>
      <ShowcaseComponent title="Default Floating Label">
        <DefaultFloatingLabel/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Disabled Floating Label">
        <DisabledFloatingLabel/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Helper Floating Label">
        <HelperFloatingLabel/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Size Floating Label">
        <SizeFloatingLabel/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Validation Floating Label">
        <ValidationFloatingLabel/>
      </ShowcaseComponent>
    </div>
  );
}
