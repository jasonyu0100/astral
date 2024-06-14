import { StudioSpaceRowCount } from './count/main';
import { StudioSpacesRowDate } from './date/main';
import { StudioSpacesRowDay } from './day/main';
import { StudioSpacesRowHorizon } from './horizon/main';
import { SpaceInfo } from './info/main';

export function StudioSpacesRowContents() {
  return (
    <div className='flex flex-row space-x-[50px]'>
      <StudioSpaceRowCount />
      <SpaceInfo />
      <StudioSpacesRowHorizon />
      <StudioSpacesRowDay />
      <StudioSpacesRowDate />
    </div>
  );
}
