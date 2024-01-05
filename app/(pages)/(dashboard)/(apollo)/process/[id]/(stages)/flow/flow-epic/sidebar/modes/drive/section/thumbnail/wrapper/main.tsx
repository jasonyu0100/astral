interface LibraryThumbnailWrapper
  extends React.ComponentPropsWithoutRef<"button"> {
  children: React.ReactNode;
}

export function DriveSectionThumbnailWrapper({
  children,
  ...props
}: LibraryThumbnailWrapper) {
  return (
    <button {...props}>
      <div className="h-[120px] w-[120px] bg-white flex flex-col items-center p-[10px]">
        {children}
      </div>
    </button>
  );
}
