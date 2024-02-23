import { Glass } from '@/(components)/layer/main';
import { backgroundStyles } from '@/(components)/styles/data';

export function SidebarGalleryContainer({ children }: { children: React.ReactNode }) {
  return (
    <Glass
      displayName={SidebarGalleryContainer.name}
      className='flex flex-col'
      sizeStyle='aspect-[11/16] w-3/4'
      backgroundStyle={backgroundStyles['glass-10']}
    >
      {children}
    </Glass>
  );
}
