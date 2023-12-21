import Image from "next/image";
import RecordLogBody from "./body/main";
import RecordLogDivider from "./divider/main";
import RecordLogTitle from "./title/main";
import Layer from "@/(pages)/(common)/layer/main";
import clsx from "clsx";
import {
  borderStyles,
  containerStyles,
  effectStyles,
} from "@/(pages)/(common)/styles/data";
import RecordLogMedia from "./media/main";
import RecordLogInfo from "./info/main";
import RecordLogDescription from "./description/main";

export default function StoryRecordLog({
  children,
}: {
  children?: React.ReactNode;
}) {
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
