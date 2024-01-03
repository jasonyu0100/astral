import { ProcessStepObj } from "@/(pages)/(dashboard)/(apollo)/process/[id]/model/process/step/main";
import { StormSidePanelSectionView } from "./view";

export function StormSidePanelSection({step} : {step: ProcessStepObj}) {
    return <StormSidePanelSectionView step={step} />
}