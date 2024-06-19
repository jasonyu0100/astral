import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import { ChapterUpdateAddVariant } from '@/(server)/(model)/space/chapter/update/add/main';
import { useState } from 'react';
import { SpaceFlowCore } from '../../../../flow/view/main/core/main';
import { SpaceSeaCards } from './cards/main';
import { SpaceSeaCardEdit } from './edit/main';

export function SpaceSeaCore() {
  const [current, currentVariant] = useState(ChapterUpdateAddVariant.CHAPTER);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <GlassAreaContainer
        name={SpaceFlowCore.name}
        sizeFx='w-full h-full'
        className={`flex flex-col overflow-auto`}
      >
        <div className='flex h-full w-full flex-col space-y-[2rem] p-[2rem]'>
          <SpaceSeaCardEdit />
          <HorizontalDivider />
          <p className='text-xl font-bold text-slate-300'>Work</p>
          <SpaceSeaCards />
          <HorizontalDivider />
          <p className='text-xl font-bold text-slate-300'>Complete</p>
          <SpaceSeaCards />
        </div>
      </GlassAreaContainer>
    </div>
  );
}
