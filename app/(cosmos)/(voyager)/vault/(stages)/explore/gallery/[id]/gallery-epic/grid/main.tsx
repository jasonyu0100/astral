export function GalleryCollectionGrid({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex-grow ' style={{ height: '100%' }}>
      <div className='flex w-full flex-row flex-wrap gap-[50px] overflow-auto'>
        {children}
      </div>
    </div>
  );
}
