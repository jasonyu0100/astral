import { SpacesHeaderTextMain } from './main/main';
import { SpacesHeaderTextSub } from './sub/main';

export function SpacesHeaderText() {
  return (
    <div className='flex h-[200px] flex-col justify-center space-y-[1rem] px-[40px] py-[40px]'>
      <SpacesHeaderTextMain>NOW</SpacesHeaderTextMain>
      <SpacesHeaderTextSub>Shared</SpacesHeaderTextSub>
    </div>
  );
}
