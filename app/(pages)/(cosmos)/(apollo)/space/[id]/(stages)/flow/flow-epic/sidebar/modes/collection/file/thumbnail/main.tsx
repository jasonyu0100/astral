interface LibraryElementThumbnailProps
  extends React.ComponentPropsWithoutRef<"img"> {}

export function CollectionFileThumbnail({
  ...props
}: LibraryElementThumbnailProps) {
  return <img className="h-[100px] w-[100px]" {...props} />;
}
