export function HomeGalleryGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex w-full flex-row flex-wrap items-center gap-[50px] pb-[50px]'>
      {children}
    </div>
  );
}
