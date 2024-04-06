import { useContext } from 'react';
import { ConstellationContext } from '@/(logic)/internal/model/draft/constellation/main';
import { cn } from '@/(logic)/utils/cn';
import { ConstellationsHandlerContext } from '@/(logic)/internal/handler/constellations/main';

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
