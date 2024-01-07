interface PortalGalleryViewProps
  extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
}

export function PortalGalleryView({
  children,
  ...props
}: PortalGalleryViewProps) {
  return (
    <div className="flex flex-col items-center p-[5%] h-full w-full cursor-pointer" {...props}>
      {children}
    </div>
  );
}
