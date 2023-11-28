import ShowcaseComponent from "@ui/showcase";
import DefaultText from "./default-text";
import OpacityText from "./opacity-text";
import WrapText from "./wrap-text";
import StyleText from "./style-text";
import SpacingText from "./spacing-text";
import HeightText from "./height-text";
import FontWeightText from "./font-weight-text";
import ColorText from "./color-text";

export default function TextPage() {
  return (
    <div>
      <ShowcaseComponent title="Default Text">
        <DefaultText/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Color Text">
        <ColorText/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Font Weight Text">
        <FontWeightText/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Height Text">
        <HeightText/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Spacing Text">
        <SpacingText/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Style Text">
        <StyleText/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Wrap Text">
        <WrapText/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Opacity Text">
        <OpacityText/>
      </ShowcaseComponent>
    </div>
  );
}
