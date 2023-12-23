interface FlowSnapshot
  extends React.ComponentPropsWithoutRef<"img"> {}

export default function FlowSnapshot({ ...props }: FlowSnapshot) {
  return <img className="w-full h-full mb-[1rem]" {...props} />;
}
