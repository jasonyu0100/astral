import BoardAddIcon from "../../../../../icons/add/main";

export interface TopRowAddButtonProps
  extends React.ComponentPropsWithoutRef<"button"> {}

export default function TopRowAddButton({ ...props }: TopRowAddButtonProps) {
  return (
    <button {...props}>
      <BoardAddIcon />
    </button>
  );
}
