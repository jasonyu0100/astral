import FlowAddIcon from "../../../../../icons/add/main";

export interface TopRowAddButtonProps
  extends React.ComponentPropsWithoutRef<"button"> {}

export default function TopRowAddButton({ ...props }: TopRowAddButtonProps) {
  return (
    <button {...props}>
      <FlowAddIcon />
    </button>
  );
}
