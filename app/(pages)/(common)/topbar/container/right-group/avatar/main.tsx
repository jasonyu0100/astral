export interface InputProps extends React.ComponentPropsWithoutRef<"a"> {}

export function TopbarAvatar({ ...props }: InputProps) {
  return (
    <div className="h-full flex items-center ml-[2rem]">
      <div className="w-[3rem] h-[3.5rem] relative shadow bg-slate-100">
        <img
          className="w-[2.5rem] h-[2.5rem] left-[0.25rem] top-[5px] absolute"
          src="/profile/avatar.png"
        />
        <div className="w-[3rem] h-[1rem] top-[2.75rem] text-[0.5rem] text-center absolute">
          Jason
        </div>
      </div>
    </div>
  );
}
