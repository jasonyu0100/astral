interface PortalFormActionProps extends React.ComponentPropsWithoutRef<"a"> {
    children: React.ReactNode;
}

export function PortalFormAction({ children, ...props }: PortalFormActionProps) {
  return (
    <a
      className="w-full h-[75px] bg-slate-950 flex flex-col justify-center items-center mt-auto"
      {...props}
    >
      <div className="text-center text-white text-3xl font-bold leading-9">
        {children}
      </div>
    </a>
  );
}
