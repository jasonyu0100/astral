import { MomentBody } from "./body/main";
import { MomentDivider } from "./divider/main";
import { MomentMedia } from "./media/main";
import { MomentInfo } from "./info/main";
import { MomentDescription } from "./description/main";
import { MomentObj } from "@/tables/flow/session/moment/main";

interface FlowRecordLogProps {
  moment: MomentObj;
  index: number;
}

export function FlowSessionMoment({ moment, index }: FlowRecordLogProps) {
  return (
    <div className="flex flex-col w-full space-y-[3rem] items-center py-[2rem]">
      <div className="w-full flex flex-row space-x-[100px] items-center justify-center">
        <MomentMedia />
        <MomentDescription>
          <MomentInfo />
          <MomentBody>
            Lorem ipsum dolor sit amet consectetur. Risus aliquam id amet
            laoreet velit. Fringilla etiam ac pharetra auctor sed sed aenean in
            rhoncus. Quisque diam egestas eget facilisis scelerisque eleifend.
            Elementum blandit venenatis sagittis enim mauris faucibus fringilla.
          </MomentBody>
        </MomentDescription>
      </div>
      <MomentDivider />
    </div>
  );
}
