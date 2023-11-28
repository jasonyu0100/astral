import ShowcaseComponent from "@ui/showcase";
import DefaultHr from "./default-hr";
import TextHr from "./text-hr";
import TrimmedHr from "./trimmed-hr";
import IconHr from "./icon-hr";

export default function HrPage() {
  return (
    <div>
      <ShowcaseComponent title="Default Hr">
        <DefaultHr/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Icon Hr">
        <IconHr/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Trimmed Hr">
        <TrimmedHr/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Text Hr">
        <TextHr/>
      </ShowcaseComponent>
    </div>
  );
}
