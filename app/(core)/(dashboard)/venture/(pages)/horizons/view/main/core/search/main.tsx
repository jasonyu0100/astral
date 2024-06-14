import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { borderFx, roundedFx, glassFx } from '@/(style)/data';
import { HorizonsSearchInput } from './input/main';

export function HorizonsSearch() {
  return (
    <div className='p-[2rem] shadow-glow'>
      <HorizonsSearchInput />
    </div>
  );
}
