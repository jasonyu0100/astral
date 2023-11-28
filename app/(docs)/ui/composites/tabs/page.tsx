import ShowcaseComponent from "@ui/showcase";
import DefaultTabs from "./default-tabs";
import UnderlinedTabs from "./underline-tabs";
import FullWidthTabs from "./full-width-tabs";

export default function TabsPage() {
  return (
    <div>
      <ShowcaseComponent title="Default Tabs">
        <DefaultTabs/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Full Width Tabs">
        <FullWidthTabs/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Underline Tabs">
        <UnderlinedTabs/>
      </ShowcaseComponent>
    </div>
  );
}
