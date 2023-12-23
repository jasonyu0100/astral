import DraftSearchIcon from "../../../icons/search/main";

export interface TopRowSearchButtonProps
  extends React.ComponentPropsWithoutRef<"button"> {}

export default function FlowTopRowSearchButton({
  ...props
}: TopRowSearchButtonProps) {
  return (
    <button {...props}>
      <DraftSearchIcon />
    </button>
  );
}
