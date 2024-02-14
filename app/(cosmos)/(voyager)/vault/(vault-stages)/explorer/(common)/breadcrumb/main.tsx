import { Layer } from '@/(common)/layer/main';
import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from '@/(common)/styles/data';

export function CollectionBreadcrumbs({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={CollectionBreadcrumbs.name}
      sizeStyle='w-full h-[60px] mt-0'
      borderStyle={`${borderStyles['border-b']}`}
      className={`${containerStyles['row-center']} px-[2rem]`}
    >
      <div className='flex flex-row items-center space-x-[1rem]'>
        {children}
      </div>
    </Layer>
  );
}
