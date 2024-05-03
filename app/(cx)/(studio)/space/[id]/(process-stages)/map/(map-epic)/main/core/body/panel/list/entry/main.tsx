import { useContext } from 'react';
import { ConstellationContext } from '@/(lgx)/internal/model/map/constellation/main';
import { cn } from '@/(lgx)/utils/cn';
import { ConstellationsHandlerContext } from '@/(lgx)/internal/handler/constellations/main';

export function ConstellationListEntry({ index }: { index: number }) {
  const constellationsHandler =
    useContext(ConstellationsHandlerContext);
  const constellation = useContext(ConstellationContext);
  const active = constellation.id == constellationsHandler.constellationId;

  return (
    <div
      onClick={() => constellationsHandler.constellationActions.updateConstellation(constellation)}
      className='w-full flex cursor-pointer'
    >
      <p
        className={cn(`text-md font-bold`, {
          'text-slate-400': active,
          'text-slate-500': !active,
        })}
      >
        {index+1}. {constellation.title}
      </p>
    </div>
  );
}
