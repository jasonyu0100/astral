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
    <div className="flex flex-col w-[500px] space-y-[20px] items-center py-[10px]">
      <RecordLogInfo />
      <RecordLogMedia />
      <RecordLogDescription>
        <RecordLogTitle>Jason</RecordLogTitle>
        <RecordLogBody>
          Lorem ipsum dolor sit amet consectetur. Risus aliquam id amet laoreet
          velit. Fringilla etiam ac pharetra auctor sed sed aenean in rhoncus.
          Quisque diam egestas eget facilisis scelerisque eleifend. Elementum
          blandit venenatis sagittis enim mauris faucibus fringilla.
        </RecordLogBody>
      </RecordLogDescription>
      <RecordLogDivider />
    </div>
  );
}
