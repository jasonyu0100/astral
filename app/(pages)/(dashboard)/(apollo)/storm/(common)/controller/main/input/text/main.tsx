export interface StormMessageInputTextProps
  extends React.ComponentPropsWithoutRef<"input"> {}

export default function StormMessageInputText({
  ...props
}: StormMessageInputTextProps) {
  return (
    <input
      className="w-4/5 mx-[2rem] h-[30px] bg-slate-600 rounded-[30px] px-[1rem] text-white outline-none"
      {...props}
    />
  );
}
