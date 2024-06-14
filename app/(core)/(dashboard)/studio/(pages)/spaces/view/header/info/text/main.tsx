import { StudioSpacesHeaderTextMain } from './main/main';
import { StudioSpacesHeaderTextSub } from './sub/main';

export function StudioSpacesHeaderText() {
  return (
    <div className='flex h-[200px] flex-col justify-center space-y-[1rem] px-[40px] py-[40px]'>
      <StudioSpacesHeaderTextMain>NOW</StudioSpacesHeaderTextMain>
      <StudioSpacesHeaderTextSub>Shared</StudioSpacesHeaderTextSub>
    </div>
  );
}
