import { HomeGalleryAddCover } from './cover/main';
import { HomeGalleryAddInfo } from './info/main';
import { ButtonInputProps } from '@/(common)/types/main';
import { Layer } from '@/(common)/layer/main';
import { backgroundStyles } from '@/(common)/styles/data';
import { GalleryContainer } from '@/(cosmos)/(voyager)/vault/(stages)/explore/home/home-epic/grid/container/main';

export function HomeGalleryAdd({ ...props }: ButtonInputProps) {
  return (
    <button {...props}>
      <Layer
        displayName={GalleryContainer.name}
        sizeStyle='h-[500px] aspect-[11/16]'
        backgroundStyle={backgroundStyles['glass-10']}
      >
        <div className='flex h-full w-full flex-col'>
          <HomeGalleryAddCover />
          <HomeGalleryAddInfo />
        </div>
      </Layer>
    </button>
  );
}
