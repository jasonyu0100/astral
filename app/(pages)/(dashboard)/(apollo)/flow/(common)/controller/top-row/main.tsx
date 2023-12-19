import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import FlowAddIcon from "../../icons/add/main";
import DraftLoomIcon from "../../icons/loom/main";
import Layer from "@/(pages)/(common)/layer/main";
import FlowSearchIcon from "../../icons/search/main";

export default function FlowControllerTopRow() {
  return (
    <Layer
      displayName={FlowControllerTopRow.name}
      sizeStyle="w-full h-[50px]"
      containerStyle={containerStyles["col"]}
      backgroundStyle={backgroundStyles["glass-10"]}
      borderStyle={`${borderStyles["border-b"]}`}
    >
      <div className="ml-auto flex flex-row h-full items-center px-[20px] space-x-[1rem]">
        <FlowAddIcon />
        <FlowSearchIcon />
        <DraftLoomIcon />
      </div>
    </Layer>
  );
}
