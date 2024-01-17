interface ModalCloseButtonProps
  extends React.ComponentPropsWithoutRef<"button"> {
  children: React.ReactNode;
}

export function ModalCloseButton({
  children,
  ...props
}: ModalCloseButtonProps) {
  return (
    <button {...props}>
      <div className="mt-[3rem] animate-pulse text-center text-slate-500 text-xl font-bold leading-7">
        {children}
      </div>
    </button>
  );
}
