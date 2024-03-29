import {
  glassStyles,
  borderStyles,
  containerStyles,
} from '@/(design)/(styles)/data';
import { GlassAreaContainer } from '@/(components)/(basic)/glass/area/main';
import { VentureActionButton } from './action/main';
import { VentureInfo } from './info/main';

export function VentureHeader() {
  return (
    <GlassAreaContainer
      sizeStyle='w-full h-[220px]'
      displayName={VentureHeader.name}
      glassStyle={glassStyles['glass-5']}
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
