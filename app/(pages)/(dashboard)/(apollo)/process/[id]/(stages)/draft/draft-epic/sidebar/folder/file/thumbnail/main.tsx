interface LibraryElementThumbnailProps
  extends React.ComponentPropsWithoutRef<"img"> {}

export function LibraryElementThumbnail({
  ...props
}: LibraryElementThumbnailProps) {
  return <img className="h-full w-full rounded-full" {...props} />;
}
