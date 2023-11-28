import ShowcaseComponent from "@ui/showcase";
import DefaultList from "./default-list";
import AdvancedList from "./advanced-list";
import DescriptionList from "./description-list";
import UnstyledList from "./unstyled-list";
import NestedOrderedList from "./nested-ordered-list";
import NestedList from "./nested-list";
import OrderedList from "./ordered-list";
import IconList from "./icon-list";

export default function ListPage() {
  return (
    <div>
      <ShowcaseComponent title="Default List">
        <DefaultList/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Icon List">
        <IconList/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Ordered List">
        <OrderedList/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Nested List">
        <NestedList/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Nested Ordered List">
        <NestedOrderedList/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Unstyled List">
        <UnstyledList/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Description List">
        <DescriptionList/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Advanced List">
        <AdvancedList/>
      </ShowcaseComponent>
    </div>
  );
}
