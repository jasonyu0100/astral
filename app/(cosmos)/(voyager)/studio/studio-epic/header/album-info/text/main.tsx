import { SpacesContext } from '@/(cosmos)/(voyager)/studio/(stages)/all/page';
import { useContext } from 'react';
import { SpacesHeaderTextMain } from './main/main';
import { SpacesHeaderTextSub } from './sub/main';

export function SpacesHeaderText() {
  const { type } = useContext(SpacesContext);

  return (
    <div className='flex h-[200px] flex-col justify-center space-y-[1rem] px-[40px] py-[40px]'>
      <SpacesHeaderTextMain>{type}</SpacesHeaderTextMain>
      <SpacesHeaderTextSub>Shared</SpacesHeaderTextSub>
    </div>
  );
}
