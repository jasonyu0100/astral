import Layer from "@/(pages)/(common)/layer/main";
import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import DraftAddLgIcon from "../../../icons/add-lg/main";
export interface FlowConstellationAddProps
  extends React.ComponentPropsWithoutRef<"div"> {}

export default function FlowConstellationAdd({
  ...props
}: FlowConstellationAddProps) {
  return (
    <Layer
      displayName={FlowConstellationAdd.name}
      sizeStyle="w-[120px] h-[120px]"
      containerStyle={containerStyles["row-centered"]}
      contentStyle="flex-shrink-0"
    >
      <button {...props}>
        <Layer
          sizeStyle="w-[80px] h-[80px]"
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
