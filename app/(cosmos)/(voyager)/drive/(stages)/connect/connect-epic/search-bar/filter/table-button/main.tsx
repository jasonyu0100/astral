import { Layer } from "@/(common)/layer/main";
import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(common)/styles/data";
import { TableIcon } from "../../../icons/table/main";

interface InputProps extends React.ComponentPropsWithoutRef<"button"> {}

export function TableButton({ ...props }: InputProps) {
  return (
    <button {...props}>
      <Layer
        displayName={TableButton.name}
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
