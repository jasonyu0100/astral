import Layer from "@/(pages)/(common)/layer/main";
import GridIcon from "../../../../icons/grid/main";
import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";

interface InputProps extends React.ComponentPropsWithoutRef<"button"> {
}

export default function GridButton({ ...props }: InputProps) {
  return (
    <button {...props}>
      <Layer
        sizeStyle="w-[36px] h-[36px]"
        backgroundStyle={backgroundStyles["glass-10"]}
        containerStyle={containerStyles["row-centered"]}
        borderStyle={borderStyles.rounded}
      >
        <GridIcon />
      </Layer>
    </button>
  );
}
