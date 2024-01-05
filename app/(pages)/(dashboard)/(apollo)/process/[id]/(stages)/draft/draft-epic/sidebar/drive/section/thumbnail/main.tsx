interface LibraryElementThumbnailProps
  extends React.ComponentPropsWithoutRef<"img"> {}

export function DriveSectionThumbanil({
  ...props
}: LibraryElementThumbnailProps) {
  return <img className="w-[100px] h-[100px]" {...props} />;
}
