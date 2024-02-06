export function PortalGalleryTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex h-full w-full flex-col items-center justify-center'>
      <div className='w-full text-center font-permanentMarker text-[64px] font-normal capitalize leading-9 text-black'>
        {children}
      </div>
    </div>
  );
}
