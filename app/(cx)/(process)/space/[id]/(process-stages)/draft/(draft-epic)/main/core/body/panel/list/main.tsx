import { useContext } from 'react';
import { ConstellationContext } from '@/(logic)/internal/model/draft/constellation/main';
import { ConstellationListEntry } from './entry/main';
import { ConstellationsHandlerContext } from '@/(logic)/internal/handler/constellations/main';

export function DraftConstellationList() {
  const constellationsHandler = useContext(ConstellationsHandlerContext);
  const constellations = constellationsHandler.constellations;

  return (
    <div className='flex h-full w-full flex-shrink-0 flex-col space-y-[1rem] p-[1rem]'>
      {constellations.map((constellation, index) => (
        <ConstellationContext.Provider value={constellation} key={constellation.id}>
          <ConstellationListEntry index={index} key={constellation.id}/>
        </ConstellationContext.Provider>
      ))}
    </div>
  );
}
