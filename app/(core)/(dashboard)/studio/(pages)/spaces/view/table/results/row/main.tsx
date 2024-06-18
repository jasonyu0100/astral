import { StudioSpacesRowCategory } from './category/main';
import { StudioSpacesRowIndex } from './count/main';
import { StudioSpacesRowDate } from './date/main';
import { StudioSpacesRowDaysLeft } from './day/main';
import { StudioSpacesRowHoursLeft } from './hours/main';
import { StudioSpacesRowInfo } from './info/main';
import { StudioSpacesRowMore } from './more/main';

export function StudioSpacesRow() {
  return (
    <div className='grid w-full grid-cols-7'>
      <StudioSpacesRowIndex />
      <StudioSpacesRowInfo />
      <StudioSpacesRowCategory />
      <StudioSpacesRowHoursLeft />
      <StudioSpacesRowDaysLeft />
      <StudioSpacesRowDate />
      <StudioSpacesRowMore />
    </div>
  );
}
