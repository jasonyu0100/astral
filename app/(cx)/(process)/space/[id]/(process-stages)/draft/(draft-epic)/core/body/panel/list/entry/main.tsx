import { useContext } from 'react';
import { ConstellationContext } from '@/(logic)/internal/data/infra/model/draft/constellation/main';
import { cn } from '@/(logic)/utils/cn';
import { ConstellationsHandlerContext } from '@/(logic)/internal/handler/draft/constellations/main';

export function ConstellationListEntry({ index }: { index: number }) {
  const constellationsHandler =
    useContext(ConstellationsHandlerContext);
  const constellation = useContext(ConstellationContext);
  const active = constellation.id == constellationsHandler.constellationId;

  return (
    <div
      onClick={() => constellationsHandler.constellationActions.updateConstellation(constellation)}
      className='cursor-pointer'
    >
      <p
        className={cn(`text-xl font-bold`, {
          'text-slate-300': active,
          'text-slate-500': !active,
        })}
      >
        {index + 1}. {constellation.title}
      </p>
    </div>
  );
}
