import ShowcaseComponent from "@ui/showcase";
import DefaultStepper from "./default-stepper";
import VerticalStepper from "./vertical-stepper";
import TimelineStepper from "./timeline-stepper";
import ProgressStepper from "./progress-stepper";
import DetailStepper from "./detail-stepper";
import BreadcrumbStepper from "./breadcrumb-stepper";

export default function StepperPage() {
  return (
    <div>
      <ShowcaseComponent title="Default Stepper">
        <DefaultStepper/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Breadcrumb Stepper">
        <BreadcrumbStepper/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Detail Stepper">
        <DetailStepper/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Progress Stepper">
        <ProgressStepper/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Timeline Stepper">
        <TimelineStepper/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Vertical Stepper">
        <VerticalStepper/>
      </ShowcaseComponent>
    </div>
  );
}
