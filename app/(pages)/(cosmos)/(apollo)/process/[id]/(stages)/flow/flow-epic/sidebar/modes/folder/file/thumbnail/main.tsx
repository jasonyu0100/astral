interface LibraryElementThumbnailProps
  extends React.ComponentPropsWithoutRef<"img"> {}

export function FolderFileThumbnail({
  ...props
}: LibraryElementThumbnailProps) {
  return <img className="h-[100px] w-[100px]" {...props} />;
}
