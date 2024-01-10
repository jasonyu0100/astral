interface LibraryThumbnailWrapper
  extends React.ComponentPropsWithoutRef<"button"> {
  children: React.ReactNode;
}

export function CollectionFileThumbnailWrapper({
  children,
  ...props
}: LibraryThumbnailWrapper) {
  return (
    <button className="h-[120px] w-[120px]" {...props}>
      {children}
    </button>
  );
}
