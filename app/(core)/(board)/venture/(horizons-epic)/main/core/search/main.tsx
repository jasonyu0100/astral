import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { borderFx, roundedFx, glassFx } from '@/(style)/data';
import { HorizonsSearchInput } from './input/main';

export function HorizonsSearch() {
  return (
    <GlassWindowFrame name={HorizonsSearch.name}
      className='w-full px-[2rem] pb-[2rem] pt-[2rem]'
    >
      <HorizonsSearchInput/>
    </GlassWindowFrame>
  );
}
