import ShowcaseComponent from "@ui/showcase";
import DefaultButtonGroup from "./default-button-group";

export default function ButtonGroupPage() {
  return <div>
    <ShowcaseComponent title="Default Button Group">
      <DefaultButtonGroup/>
    </ShowcaseComponent>
    <ShowcaseComponent title="Link Button Group">
      <DefaultButtonGroup/>
    </ShowcaseComponent>
    <ShowcaseComponent title="Icon Button Group">
      <DefaultButtonGroup/>
    </ShowcaseComponent>
    <ShowcaseComponent title="Outline Button Group">
      <DefaultButtonGroup/>
    </ShowcaseComponent>
    <ShowcaseComponent title="Icon Outline Button Group">
      <DefaultButtonGroup/>
    </ShowcaseComponent>
  </div>;
}
