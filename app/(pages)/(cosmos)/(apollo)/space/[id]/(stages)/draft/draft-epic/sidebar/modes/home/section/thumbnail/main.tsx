interface LibraryElementThumbnailProps
  extends React.ComponentPropsWithoutRef<"img"> {}

export function DriveSectionThumbanil({
  ...props
}: LibraryElementThumbnailProps) {
  return <img className="w-full h-full" {...props} />;
}
