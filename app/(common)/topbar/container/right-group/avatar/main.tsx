export interface InputProps extends React.ComponentPropsWithoutRef<"a"> {}

export function TopbarAvatar({ ...props }: InputProps) {
  return (
    <a className="h-full flex items-center ml-[2rem]" {...props}>
        <img
          className="w-[2.5rem] h-[2.5rem] rounded-full shadow-md shadow-slate-300/50"
          src="/brand/avatar.png"
        />
    </a>
  );
}
