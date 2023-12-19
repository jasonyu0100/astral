import DraftLoomIcon from "../../../../icons/loom/main";

export interface FlowTopRowLoomButtonProps
  extends React.ComponentPropsWithoutRef<"button"> {}

export default function FlowTopRowLoomButton({ ...props }: FlowTopRowLoomButtonProps) {
  return (
    <button {...props}>
      <DraftLoomIcon />
    </button>
  );
}
