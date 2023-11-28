import ShowcaseComponent from "@ui/showcase";
import DefaultProgress from "./default-progress";
import ColorProgress from "./color-progress";
import SizeProgress from "./size-progress";
import LabelOutsideProgress from "./label-outside-progress";
import LabelProgress from "./label-progress";

export default function Progress() {
  return (
    <div>
      <ShowcaseComponent title="Default Progress">
        <DefaultProgress />
      </ShowcaseComponent>
      <ShowcaseComponent title="Label Progress">
        <LabelProgress />
      </ShowcaseComponent>
      <ShowcaseComponent title="Label Outside Progress">
        <LabelOutsideProgress />
      </ShowcaseComponent>
      <ShowcaseComponent title="Size Progress">
        <SizeProgress />
      </ShowcaseComponent>
      <ShowcaseComponent title="Color Progress">
        <ColorProgress />
      </ShowcaseComponent>
    </div>
  );
}
