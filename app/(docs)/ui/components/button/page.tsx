import ShowcaseComponent from "@ui/showcase";
import DefaultButton from "./default-button";
import PillButton from "./pill-button";
import GradientMonoButton from "./gradient-mono-button";
import GradientDuoButton from "./gradient-duo-button";
import GradientOutlineButton from "./gradient-outline-button";
import ColoredShadowButton from "./colored-shadow-button";
import SocialButton from "./social-button";
import PaymentButton from "./payment-button";
import OutlineButton from "./outline-button";
import IconButton from "./icon-button";
import IconOnlyButton from "./icon-only-button";
import LabelButton from "./label-button";
import LoaderButton from "./loader-button";

export default function ButtonPage() {
  return (
    <div>
      <ShowcaseComponent title="Default Button">
        <DefaultButton/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Pill Button">
        <PillButton/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Gradient Mono Button">
        <GradientMonoButton/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Gradient Duo Button">
        <GradientDuoButton/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Gradient Outline Button">
        <GradientOutlineButton/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Default Button">
        <ColoredShadowButton/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Social Button">
        <SocialButton/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Payment Button">
        <PaymentButton/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Outline Button">
        <OutlineButton/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Icon Button">
        <IconButton/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Label Button">
        <LabelButton/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Icon Only Button">
        <IconOnlyButton/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Loader Button">
        <LoaderButton/>
      </ShowcaseComponent>
    </div>
  );
}
