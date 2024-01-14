interface PortalFormSelectProps
  extends React.ComponentPropsWithoutRef<"select"> {
  children: React.ReactNode;
}

export function FormSelect({
  children,
  ...props
}: PortalFormSelectProps) {
  return (
    <div className="w-full h-[50px] border-b-[1px] border-slate-500 ">
      <select
        title="position"
        className="w-full h-full appearance-none border-none outline-none text-slate-950 text-xl font-bold leading-9 "
        {...props}
      >
        {children}
      </select>
    </div>
  );
}
