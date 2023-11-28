import ShowcaseComponent from "@ui/showcase";
import DefaultRadio from "./default-radio";
import DisabledRadio from "./disabled-radio";
import HelperRadio from "./helper-radio";
import BorderedRadio from "./bordered-radio";
import LinkRadio from "./link-radio";
import ListRadio from "./list-radio";
import HorizontalListRadio from "./horizontal-list-radio";
import AdvancedRadio from "./advanced-radio";

export default function Radio() {
  return (
    <div>
      <ShowcaseComponent title="Default Radio">
        <DefaultRadio />
      </ShowcaseComponent>
      <ShowcaseComponent title="Disabled Radio">
        <DisabledRadio />
      </ShowcaseComponent>
      <ShowcaseComponent title="Helper Radio">
        <HelperRadio />
      </ShowcaseComponent>
      <ShowcaseComponent title="Bordered Radio">
        <BorderedRadio />
      </ShowcaseComponent>
      <ShowcaseComponent title="Link Radio">
        <LinkRadio />
      </ShowcaseComponent>
      <ShowcaseComponent title="Helper Radio">
        <HelperRadio />
      </ShowcaseComponent>
      <ShowcaseComponent title="List Radio">
        <ListRadio />
      </ShowcaseComponent>
      <ShowcaseComponent title="Horizontal List Radio">
        <HorizontalListRadio />
      </ShowcaseComponent>
      <ShowcaseComponent title="Advanced Radio">
        <AdvancedRadio />
      </ShowcaseComponent>
    </div>
  );
}
