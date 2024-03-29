import { GlassAreaContainer } from '@/(components)/(basic)/glass/area/main';
import {
  glassStyles,
  borderStyles,
  containerStyles,
} from '@/(design)/(styles)/data';

export function CollectionBreadcrumbs({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GlassAreaContainer
      name={CollectionBreadcrumbs.name}
      size='w-full h-[60px] mt-0'
      border={`${borderStyles['border-b']}`}
      className={`${containerStyles['row-center']} px-[2rem]`}
    >
      <div className='flex flex-row items-center space-x-[1rem]'>
        {children}
      </div>
    </GlassAreaContainer>
  );
}
