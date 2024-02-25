import { Glass } from '@/(components)/(basic)/glass/main';
import { useContext } from 'react';
import { SpacesContext } from '../../(studio-stages)/all/page';
import { SpacesSpace } from './space/main';

export function SpacesList() {
  const { spaces } = useContext(SpacesContext);

  return (
    <Glass
      sizeStyle='w-full'
      displayName={SpacesList.name}
      className={`flex-col divide-y-[1px] divide-slate-500 divide-opacity-30`}
    >
      {spaces?.map((space, index) => (
        <SpacesSpace space={space} index={index} />
      ))}
    </Glass>
  );
}
