export interface DraftCraftElement
  extends React.ComponentPropsWithoutRef<"img"> {}

export default function DraftCraftElement({ ...props }: DraftCraftElement) {
  return <img className="w-full h-full mb-[1rem]" {...props} />;
}
