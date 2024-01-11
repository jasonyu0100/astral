interface GalleryCoverImageProps
  extends React.ComponentPropsWithoutRef<"img"> {}

export function GalleryCoverImage({ ...props }: GalleryCoverImageProps) {
  return (
    <div className="w-full h-[300px] p-[20px] bg-white flex flex-col items-center">
      <img className="w-full h-full object-fit bg-black" {...props} />
    </div>
  );
}
