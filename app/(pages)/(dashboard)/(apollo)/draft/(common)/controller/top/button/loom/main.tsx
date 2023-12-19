import DraftLoomIcon from "../../../../icons/loom/main";

export interface TopRowLoomButtonProps
  extends React.ComponentPropsWithoutRef<"button"> {}

export default function TopRowLoomButton({ ...props }: TopRowLoomButtonProps) {
  return (
    <button {...props}>
      <DraftLoomIcon />
    </button>
  );
}
