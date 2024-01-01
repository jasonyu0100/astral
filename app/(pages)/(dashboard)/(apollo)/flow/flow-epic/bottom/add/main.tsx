import Layer from "@/(pages)/(common)/layer/main";
import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import DraftAddLgIcon from "../../icons/add-lg/main";
export interface FlowStepsAddProps
  extends React.ComponentPropsWithoutRef<"button"> {}

export default function FlowStepsAdd({
  ...props
}: FlowStepsAddProps) {
  return (
    <Layer
      displayName={FlowStepsAdd.name}
      sizeStyle="h-[100px] w-[80px]"
      containerStyle={containerStyles["row-centered"]}
      borderStyle={borderStyles["border-l"]}
    >
      <button {...props}>
        <Layer
          displayName={FlowStepsAdd.name}
          sizeStyle="w-[40px] h-[40px]"
          backgroundStyle={backgroundStyles["glass-10"]}
          containerStyle={containerStyles["col-centered"]}
          borderStyle={borderStyles["rounded-full"]}
        >
          <DraftAddLgIcon />
        </Layer>
      </button>
    </Layer>
  );
}
