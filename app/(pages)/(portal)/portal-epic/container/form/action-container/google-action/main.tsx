interface PortalFormGoogleActionProps
  extends React.ComponentPropsWithoutRef<"button"> {
    children: React.ReactNode

  }

export function PortalFormGoogleAction({ children, ...props }: PortalFormGoogleActionProps) {
  return (
    <button
      className="w-full h-[75px] flex-shrink-0 border-blue-700 border-[5px] flex flex-col justify-center items-center mb-[1rem]"
      {...props}
    >
      <div className="text-center text-blue-700 text-xl font-bold leading-9">
        {children}
      </div>
    </button>
  );
}
