import ShowcaseComponent from "@ui/showcase";
import DefaultRange from "./default-range";
import SizeRange from "./size-range";
import StepsRange from "./steps-range";
import MinMaxRange from "./min-max-range";
import DisabledRange from "./disabled-range";

export default function RangePage() {
  return (
    <div>
      <ShowcaseComponent title="Default Range">
        <DefaultRange/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Disabled Range">
        <DisabledRange/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Min Max Range">
        <MinMaxRange/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Steps Range">
        <StepsRange/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Size Range">
        <SizeRange/>
      </ShowcaseComponent>
    </div>
  );
}
