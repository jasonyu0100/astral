interface PortalContainerFlipProps
  extends React.ComponentPropsWithoutRef<"button"> {
  children: React.ReactNode;
}

export function PortalContainerFlip({
  children,
  ...props
}: PortalContainerFlipProps) {
  return (
    <button {...props}>
      <div className="mt-[3rem] text-center text-slate-500 text-xl font-bold leading-7 cursor-pointer">
        {children}
      </div>
    </button>
  );
}
