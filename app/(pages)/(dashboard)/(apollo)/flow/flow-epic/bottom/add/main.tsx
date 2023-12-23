import Layer from "@/(pages)/(common)/layer/main";
import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import DraftAddLgIcon from "../../icons/add-lg/main";
export interface FlowConstellationAddProps
  extends React.ComponentPropsWithoutRef<"div"> {}

export default function FlowConstellationAdd({
  ...props
}: FlowConstellationAddProps) {
  return (

          <Layer
            sizeStyle="h-[80px] w-[100px]"
            containerStyle={containerStyles["row-centered"]}
            borderStyle={borderStyles["border-l"]}
          >
          <button {...props}>
            <Layer
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
