import { DraftSearchIcon } from "../../../../../icons/search/main";

export interface TopRowSearchButtonProps
  extends React.ComponentPropsWithoutRef<"button"> {}

export function TopRowSearchButton({
  ...props
}: TopRowSearchButtonProps) {
  return (
    <button {...props}>
      <DraftSearchIcon />
    </button>
  );
}
