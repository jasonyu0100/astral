import Layer from "@/(pages)/(common)/layer/main";
import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import BoardAddLgIcon from "../../../icons/add-lg/main";

export interface BoardConstellationAddProps
  extends React.ComponentPropsWithoutRef<"div"> {}

export default function BoardConstellationAdd({
  ...props
}: BoardConstellationAddProps) {
  return (
    <Layer
      displayName={BoardConstellationAdd.name}
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
          <BoardAddLgIcon />
        </Layer>
      </button>
    </Layer>
  );
}
