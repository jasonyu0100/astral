import Layer from "@/(pages)/(common)/layer/main";
import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import DraftAddLgIcon from "../../../icons/add-lg/main";

export default function DraftBottomRowAdd() {
  return (
    <Layer
      sizeStyle="w-[120px] h-[120px]"
      containerStyle={containerStyles["row-centered"]}
      contentStyle="flex-shrink-0"
    >
      <Layer
        sizeStyle="w-[80px] h-[80px]"
        backgroundStyle={backgroundStyles["glass-10"]}
        containerStyle={containerStyles["col-centered"]}
        borderStyle={borderStyles["rounded-full"]}
      >
        <DraftAddLgIcon />
      </Layer>
    </Layer>
  );
}
