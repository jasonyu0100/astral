interface GalleryCoverImageProps
  extends React.ComponentPropsWithoutRef<"img"> {}

export function GalleryCoverImage({ ...props }: GalleryCoverImageProps) {
  return <img className="w-full aspect-square bg-black" {...props} />;
}
