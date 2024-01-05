interface SectionCoverImageProps
  extends React.ComponentPropsWithoutRef<"img"> {}

export function SectionCoverImage({ ...props }: SectionCoverImageProps) {
  return (
    <div className="w-full h-[250px] p-[10px] bg-black flex flex-col items-center">
      <div className="p-[20px] bg-white w-full h-full">
        <img
          className="w-full h-full object-fill bg-white"
          {...props}
        />
      </div>
    </div>
  );
}
