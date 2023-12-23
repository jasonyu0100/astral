import BoardSearchIcon from "../../../icons/search/main";

export interface TopRowSearchButtonProps
  extends React.ComponentPropsWithoutRef<"button"> {}

export default function TopRowSearchButton({
  ...props
}: TopRowSearchButtonProps) {
  return (
    <button {...props}>
      <BoardSearchIcon />
    </button>
  );
}
