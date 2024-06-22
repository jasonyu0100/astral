import { StudioSpacesRowCategory } from './category/main';
import { StudioSpacesRowDate } from './date/main';
import { StudioSpacesRowDaysLeft } from './day/main';
import { StudioSpacesRowHoursLeft } from './hours/main';
import { StudioSpacesRowInfo } from './info/main';
import { StudioSpacesRowMore } from './more/main';
import { StudioSpacesRowNumber } from './number/main';

export function StudioSpacesRow() {
  return (
    <div className='grid w-full grid-cols-7'>
      <StudioSpacesRowNumber />
      <StudioSpacesRowInfo />
      <StudioSpacesRowCategory />
      <StudioSpacesRowHoursLeft />
      <StudioSpacesRowDaysLeft />
      <StudioSpacesRowDate />
      <StudioSpacesRowMore />
    </div>
  );
}
