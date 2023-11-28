import ShowcaseComponent from "@ui/showcase";
import DefaultKbd from "./default-kbd";
import TableKbd from "./table-kbd";
import FunctionKbd from "./function-kbd";
import NumberKbd from "./number-kdb";
import LetterKbd from "./letter-kbd";
import ArrowKbd from "./arrow-kbd";
import TextKbd from "./text-kdb";

export default function KbdPage() {
  return (
    <div>
      <ShowcaseComponent title="Default Kbd">
        <DefaultKbd/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Text Kbd">
        <TextKbd/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Arrow Kbd">
        <ArrowKbd/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Letter Kbd">
        <LetterKbd/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Number Kbd">
        <NumberKbd/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Function Kbd">
        <FunctionKbd/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Table Kbd">
        <TableKbd/>
      </ShowcaseComponent>
    </div>
  );
}
