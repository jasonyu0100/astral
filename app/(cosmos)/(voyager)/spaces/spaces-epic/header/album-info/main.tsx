'use client';

export function SpacesAlbumInfo({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex h-full flex-row items-center space-x-[2rem]'>
      {children}
    </div>
  );
}
