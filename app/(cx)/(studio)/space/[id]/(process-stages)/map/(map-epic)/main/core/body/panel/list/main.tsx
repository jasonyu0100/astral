import { useContext } from 'react';
import { ConstellationContext } from '@/(lgx)/internal/model/map/constellation/main';
import { ConstellationListEntry } from './entry/main';
import { ConstellationsHandlerContext } from '@/(lgx)/internal/handler/constellations/main';
import { MapModalContext } from '@/(cx)/(modals)/(process)/map-modal/main';

export function MapConstellationList() {
  const constellationsHandler = useContext(ConstellationsHandlerContext);
  const constellations = constellationsHandler.constellations;
  const modalContext = useContext(MapModalContext);
  const { open } = modalContext.addConstellationModal;

  return (
    <div className='flex h-full w-full flex-shrink-0 flex-col space-y-[1rem] p-[1rem]'>
      {constellations.map((constellation, index) => (
        <ConstellationContext.Provider
          value={constellation}
          key={constellation.id}
        >
          <ConstellationListEntry index={index} key={constellation.id} />
        </ConstellationContext.Provider>
      ))}
      <div
        className='flex w-full cursor-pointer'
        onClick={() => {
          open();
        }}
      >
        <p className={`text-md animate-pulse-slow font-bold text-slate-500`}>
          Add Page
        </p>
      </div>
      <p className='ml-[1rem] font-extraBold text-xl text-slate-300'></p>
    </div>
  );
}
