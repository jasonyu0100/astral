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
      <div className="h-[120px] aspect-square flex flex-col items-center">
        {children}
      </div>
    </button>
  );
}
