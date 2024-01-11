import { RecordLogBody } from "./body/main";
import { RecordLogDivider } from "./divider/main";
import { RecordLogMedia } from "./media/main";
import { RecordLogInfo } from "./info/main";
import { RecordLogDescription } from "./description/main";
import { MomentObj } from "@/tables/flow/session/moment/main";

interface FlowRecordLogProps {
  moment: MomentObj;
  index: number;
}

export function FlowRecordLog({ moment, index }: FlowRecordLogProps) {
  return (
    <div className="flex flex-col w-full space-y-[3rem] items-center py-[2rem]">
      <div className="w-full flex flex-row space-x-[100px] items-center justify-center">
        <RecordLogMedia />
        <RecordLogDescription>
          <RecordLogInfo />
          <RecordLogBody>
            Lorem ipsum dolor sit amet consectetur. Risus aliquam id amet
            laoreet velit. Fringilla etiam ac pharetra auctor sed sed aenean in
            rhoncus. Quisque diam egestas eget facilisis scelerisque eleifend.
            Elementum blandit venenatis sagittis enim mauris faucibus fringilla.
          </RecordLogBody>
        </RecordLogDescription>
      </div>
      <RecordLogDivider />
    </div>
  );
}
