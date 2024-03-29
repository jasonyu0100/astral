import {
  glassFx,
  borderFx,
  containerFx,
} from '@/(design)/(fx)/data';
import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { VentureActionButton } from './action/main';
import { VentureInfo } from './info/main';

export function VentureHeader() {
  return (
    <GlassAreaContainer
      sizeFx='w-full h-[220px]'
      name={VentureHeader.name}
      glassFx={glassFx['glass-5']}
      className={`p-[4rem] flex flex-row items-center space-x-[8rem]`}
    >
      <VentureInfo />
      <VentureActionButton
        onClick={() => {
          alert("TODO")
        }}
      />
    </GlassAreaContainer>
  );
}
