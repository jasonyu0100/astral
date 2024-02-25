import { useContext } from 'react';
import { DraftContext } from '../../../../page';
import { ConstellationContext } from '@/(logic)/internal/data/infra/model/draft/constellation/main';
import { ConstellationListEntry } from './entry/main';

export function DraftConstellationList() {
  const { constellations } =
    useContext(DraftContext);

  return (
    <div className='flex h-full w-full flex-shrink-0 flex-col space-y-[1rem] p-[1rem]'>
      {constellations.map((constellation, index) => (
        // eslint-disable-next-line react/jsx-key
        <ConstellationContext.Provider value={constellation}>
          <ConstellationListEntry index={index} />
        </ConstellationContext.Provider>
      ))}
    </div>
  );
}
