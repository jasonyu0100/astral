import { StudioSpacesRowCategory } from './category/main';
import { StudioSpacesRowDate } from './date/main';
import { StudioSpacesRowDays } from './day/main';
import { StudioSpacesRowInfo } from './info/main';
import { StudioSpacesRowNumber } from './number/main';
import { StudioSpacesRowStat } from './stat/main';
import { StudioSpacesRowTarget } from './target/main';

export function StudioSpacesRow() {
  return (
    <div className='grid w-full grid-cols-7 py-[2rem]'>
      <StudioSpacesRowNumber />
      <StudioSpacesRowInfo />
      <StudioSpacesRowCategory />
      <StudioSpacesRowStat />
      <StudioSpacesRowDays />
      <StudioSpacesRowDate />
      <StudioSpacesRowTarget />
    </div>
  );
}
