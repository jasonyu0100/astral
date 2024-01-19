import { Layer } from '@/(common)/layer/main';
import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from '@/(common)/styles/data';

export function CollectionBreadcrumbs({ children }: { children: React.ReactNode }) {
  return (
    <Layer
      displayName={CollectionBreadcrumbs.name}
      sizeStyle='max-w-[800px] w-full h-[4rem] mt-0'
      backgroundStyle={backgroundStyles['gradient-900']}
      borderStyle={`${borderStyles['border-all']} ${borderStyles.rounded}`}
      className={`${containerStyles['row-center']} px-[2rem]`}
    >
      <div className='flex flex-row space-x-[1rem] items-center'>
        {children}
      </div>
    </Layer>
  );
}
