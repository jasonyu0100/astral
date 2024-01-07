interface PortalFormSelectProps
  extends React.ComponentPropsWithoutRef<"select"> {
  children: React.ReactNode;
}

export function PortalFormSelect({
  children,
  ...props
}: PortalFormSelectProps) {
  return (
    <div className="w-full h-[50px] border-b border-slate-950 ">
      <select
        title="position"
        className="w-full h-full appearance-none border-none outline-none text-slate-950 text-3xl font-extraBold leading-9"
        {...props}
      >
        {children}
      </select>
    </div>
  );
}
