import { Layer } from "@/(common)/layer/main";
import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(common)/styles/data";
import { TableIcon } from "../../../icons/table/main";
import { ButtonInputProps } from "@/(common)/types/main";

export function TableButton({ ...props }: ButtonInputProps) {
  return (
    <button {...props}>
      <Layer
        displayName={TableButton.name}
        sizeStyle="w-[36px] h-[36px]"
        backgroundStyle={backgroundStyles["glass-10"]}
        className={`${containerStyles["row-centered"]}`}
        borderStyle={borderStyles.rounded}
      >
        <TableIcon />
      </Layer>
    </button>
  );
}
