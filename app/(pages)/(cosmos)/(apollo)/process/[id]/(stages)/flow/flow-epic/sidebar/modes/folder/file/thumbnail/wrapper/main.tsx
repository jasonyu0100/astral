interface LibraryThumbnailWrapper
  extends React.ComponentPropsWithoutRef<"button"> {
  children: React.ReactNode;
}

export function FolderFileThumbnailWrapper({
  children,
  ...props
}: LibraryThumbnailWrapper) {
  return (
    <button className="h-[150px] w-[120px] p-[10px] bg-white flex flex-col" {...props}>
      {children}
    </button>
  );
}
