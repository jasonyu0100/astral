import Layer from "@/(pages)/(common)/layer/main";
import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import TableIcon from "../../../../icons/table/main";

interface InputProps extends React.ComponentPropsWithoutRef<"button"> {}

export default function TableButton({ ...props }: InputProps) {
  return (
    <button {...props}>
      <Layer
        sizeStyle="w-[36px] h-[36px]"
        backgroundStyle={backgroundStyles["glass-10"]}
        containerStyle={containerStyles["row-centered"]}
        borderStyle={borderStyles.rounded}
      >
        <TableIcon />
      </Layer>
    </button>
  );
}
