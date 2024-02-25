import { Glass } from '@/(components)/(basic)/glass/main';
import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from '@/(design)/(styles)/data';

export function CollectionBreadcrumbs({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Glass
      displayName={CollectionBreadcrumbs.name}
      sizeStyle='w-full h-[60px] mt-0'
      borderStyle={`${borderStyles['border-b']}`}
      className={`${containerStyles['row-center']} px-[2rem]`}
    >
      <div className='flex flex-row items-center space-x-[1rem]'>
        {children}
      </div>
    </Glass>
  );
}
