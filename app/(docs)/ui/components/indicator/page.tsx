import ShowcaseComponent from "@ui/showcase";
import DefaultIndicator from "./default-indicator";
import LegendIndicator from "./legend-indicator";
import CountIndicator from "./count-indicator";
import BadgeIndicator from "./badge-indicator";
import StepperIndicator from "./stepper-indicator";
import LoadingIndicator from "./loading-indicator";
import SpinnerIndicator from "./spinner-indicator";

export default function IndicatorPage() {
  return (
    <div>
      <ShowcaseComponent title="Default Indicator">
        <DefaultIndicator />
      </ShowcaseComponent>
      <ShowcaseComponent title="Legend Indicator">
        <LegendIndicator />
      </ShowcaseComponent>
      <ShowcaseComponent title="Count Indicator">
        <CountIndicator />
      </ShowcaseComponent>
      <ShowcaseComponent title="Badge Indicator">
        <BadgeIndicator />
      </ShowcaseComponent>
      <ShowcaseComponent title="Stepper Indicator">
        <StepperIndicator />
      </ShowcaseComponent>
      <ShowcaseComponent title="Loading Indicator">
        <LoadingIndicator />
      </ShowcaseComponent>
      <ShowcaseComponent title="Spinner Indicator">
        <SpinnerIndicator />
      </ShowcaseComponent>
    </div>
  );
}
