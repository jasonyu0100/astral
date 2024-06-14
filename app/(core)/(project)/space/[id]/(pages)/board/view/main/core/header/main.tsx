import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassFx } from '@/(style)/data';
import { useContext } from 'react';
import { BoardContext } from '../../../../page';

export function SpaceBoardHeader() {
  const boardContext = useContext(BoardContext);

  return (
    <GlassAreaContainer
      name={SpaceBoardHeader.name}
      sizeFx='h-[4rem] w-full flex-shrink-0'
      className={`flex items-center justify-between`}
      glassFx={glassFx['glass-5']}
    ></GlassAreaContainer>
  );
}
