import { DraftAddIcon } from "../../../../../icons/add/main";

export interface TopRowAddButtonProps
  extends React.ComponentPropsWithoutRef<"button"> {}

export function TopRowAddButton({ ...props }: TopRowAddButtonProps) {
  return (
    <button {...props}>
      <DraftAddIcon />
    </button>
  );
}
