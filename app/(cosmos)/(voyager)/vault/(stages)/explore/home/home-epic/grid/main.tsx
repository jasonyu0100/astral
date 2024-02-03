export function HomeGalleryGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className='columns-2 w-full'>
      {children}
    </div>
  );
}
