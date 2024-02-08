import { Layer } from '@/(common)/layer/main';
import { backgroundStyles, borderStyles } from '@/(common)/styles/data';
import { CollectionAddCover } from './cover/main';
import { CollectionAddInfo } from './info/main';
import { ButtonInputProps } from '@/(common)/types/main';

export function GalleryCollectionAdd({ ...props }: ButtonInputProps) {
  return (
    <button {...props}>
      <Layer
        displayName={GalleryCollectionAdd.name}
        sizeStyle='h-[200px] aspect-[32/16]'
        backgroundStyle={backgroundStyles['glass-10']}
        borderStyle={`${borderStyles.rounded} ${borderStyles['border-all']}`}
      >
        <div className='flex h-full w-full flex-row items-center'>
          <CollectionAddCover />
          <CollectionAddInfo />
        </div>
      </Layer>
    </button>
  );
}
