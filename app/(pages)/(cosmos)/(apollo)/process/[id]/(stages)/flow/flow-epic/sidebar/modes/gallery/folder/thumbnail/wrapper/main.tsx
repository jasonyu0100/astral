interface LibraryThumbnailWrapper
  extends React.ComponentPropsWithoutRef<"button"> {
  children: React.ReactNode;
}

export function GalleryFolderThumbnailWrapper({
  children,
  ...props
}: LibraryThumbnailWrapper) {
  return (
    <button className="h-[120px] w-[120px]" {...props}>
      {children}
    </button>
  );
}
