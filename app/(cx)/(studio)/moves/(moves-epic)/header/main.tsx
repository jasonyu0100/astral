import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from '@/(design)/(styles)/data';
import { GlassContainer } from '@/(components)/(basic)/glass/container/main';
import { MovesActionButton } from './action/main';
import { MovesInfo } from './info/main';

export function MovesHeader() {
  return (
    <GlassContainer
      sizeStyle='w-full h-[220px]'
      displayName={MovesHeader.name}
      glassStyle={backgroundStyles['glass-5']}
      className={`p-[4rem] flex flex-row items-center space-x-[8rem]`}
    >
      <MovesInfo />
      <MovesActionButton
        onClick={() => {
          alert("TODO")
        }}
      />
    </GlassContainer>
  );
}
