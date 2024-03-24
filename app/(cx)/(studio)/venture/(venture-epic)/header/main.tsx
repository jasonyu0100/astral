import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from '@/(design)/(styles)/data';
import { GlassContainer } from '@/(components)/(basic)/glass/container/main';
import { VentureActionButton } from './action/main';
import { VentureInfo } from './info/main';

export function VentureHeader() {
  return (
    <GlassContainer
      sizeStyle='w-full h-[220px]'
      displayName={VentureHeader.name}
      glassStyle={backgroundStyles['glass-5']}
      className={`p-[4rem] flex flex-row items-center space-x-[8rem]`}
    >
      <VentureInfo />
      <VentureActionButton
        onClick={() => {
          alert("TODO")
        }}
      />
    </GlassContainer>
  );
}
