import { StudioSpacesRowCategory } from './category/main';
import { StudioSpacesRowDate } from './date/main';
import { StudioSpacesRowDaysLeft } from './day/main';
import { StudioSpacesRowHoursLeft } from './hours/main';
import { StudioSpacesRowInfo } from './info/main';
import { StudioSpacesRowNumber } from './number/main';
import { StudioSpacesRowTarget } from './target/main';

export function StudioSpacesRow() {
  return (
    <div className='grid w-full grid-cols-7 py-[2rem]'>
      <StudioSpacesRowNumber />
      <StudioSpacesRowInfo />
      <StudioSpacesRowCategory />
      <StudioSpacesRowDaysLeft />
      <StudioSpacesRowHoursLeft />
      <StudioSpacesRowDate />
      <StudioSpacesRowTarget />
    </div>
  );
}
