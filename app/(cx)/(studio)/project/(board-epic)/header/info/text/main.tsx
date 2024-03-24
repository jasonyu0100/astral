import { SpacesHeaderTextMain } from './main/main';
import { SpacesHeaderTextSub } from './sub/main';

export function MovesHeaderText() {
  return (
    <div className='flex flex-col justify-center space-y-[1rem]'>
      <SpacesHeaderTextMain>IMAGINE</SpacesHeaderTextMain>
      <SpacesHeaderTextSub>Now</SpacesHeaderTextSub>
    </div>
  );
}
