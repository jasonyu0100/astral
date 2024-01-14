interface PortalFormActionProps extends React.ComponentPropsWithoutRef<"button"> {
    children: React.ReactNode;
}

export function PortalFormAction({ children, ...props }: PortalFormActionProps) {
  return (
    <button
      className="w-full h-[60px] bg-slate-950 flex flex-col justify-center items-center mt-auto"
      {...props}
    >
      <div className="text-center text-white text-3xl font-bold leading-9">
        {children}
      </div>
    </button>
  );
}
