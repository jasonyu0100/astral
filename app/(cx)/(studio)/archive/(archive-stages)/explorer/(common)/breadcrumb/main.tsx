import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import {
  glassFx,
  borderFx,
  containerFx,
} from '@/(design)/(fx)/data';

export function CollectionBreadcrumbs({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GlassAreaContainer
      name={CollectionBreadcrumbs.name}
      sizeFx='w-full h-[60px] mt-0'
      borderFx={`${borderFx['border-b']}`}
      className={`${containerFx['row-center']} px-[2rem]`}
    >
      <div className='flex flex-row items-center space-x-[1rem]'>
        {children}
      </div>
    </GlassAreaContainer>
  );
}
