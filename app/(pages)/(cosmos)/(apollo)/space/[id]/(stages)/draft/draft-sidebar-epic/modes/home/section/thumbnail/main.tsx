interface LibraryElementThumbnailProps
  extends React.ComponentPropsWithoutRef<"img"> {}

export function DriveSectionThumbanil({
  ...props
}: LibraryElementThumbnailProps) {
  return (
      <img className="w-full aspect-square cursor-pointer" {...props} />
  );
}
