import FlowAddIcon from "../../../../icons/add/main";

export interface FlowTopRowAddButtonProps
  extends React.ComponentPropsWithoutRef<"button"> {}

export default function FlowTopRowAddButton({ ...props }: FlowTopRowAddButtonProps) {
  return (
    <button {...props}>
      <FlowAddIcon />
    </button>
  );
}
