interface BoardCraftElementProps
  extends React.ComponentPropsWithoutRef<"img"> {}

export function BoardCraftElement({ ...props }: BoardCraftElementProps) {
  return <img className="w-full h-full mb-[1rem]" {...props} />;
}
