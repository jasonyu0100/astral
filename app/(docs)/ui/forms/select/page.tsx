import ShowcaseComponent from "@ui/showcase";
import DefaultSelect from "./default-select";
import SizeSelect from "./size-select";
import UnderlineSelect from "./underline-select";
import MultiSelect from "./multi-select";
import DisabledSelect from "./disabled-select";

export default function MyComponent() {
  return (
    <div>
      <ShowcaseComponent title="Default Select">
        <DefaultSelect/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Disabled Select">
        <DisabledSelect/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Multi Select">
        <MultiSelect/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Underlined Select">
        <UnderlineSelect/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Size Select">
        <SizeSelect/>
      </ShowcaseComponent>
    </div>
  );
}