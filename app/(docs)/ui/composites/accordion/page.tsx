import ShowcaseComponent from "@ui/showcase";
import FlushAccordion from "./flush-accordion";
import DefaultAccordion from "./default-accordion";

export default function AccordionPage() {
  return (
    <div>
      <ShowcaseComponent title="Default Accordion">
        <DefaultAccordion/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Flush Accordion">
        <FlushAccordion/>
      </ShowcaseComponent>
    </div>
  );
}
