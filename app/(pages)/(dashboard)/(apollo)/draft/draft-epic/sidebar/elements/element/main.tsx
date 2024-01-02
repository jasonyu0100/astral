interface DraftCraftElementProps
  extends React.ComponentPropsWithoutRef<"img"> {}

export function DraftCraftElement({ ...props }: DraftCraftElementProps) {
  return <img className="w-full h-full mb-[1rem]" {...props} />;
}
