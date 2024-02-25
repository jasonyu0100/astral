import { useContext } from 'react';
import { DraftContext } from '../../../../../page';
import { ConstellationContext } from '@/(logic)/internal/data/infra/model/draft/constellation/main';
import { cn } from '@/(logic)/utils/cn';

export function ConstellationListEntry({ index }: { index: number }) {
  const { constellationId, constellationHandler } =
    useContext(DraftContext);
  const constellation = useContext(ConstellationContext);

  return (
    <div
      onClick={() => constellationHandler.updateConstellation(constellation)}
      className='cursor-pointer'
    >
      <p
        className={cn(`text-xl font-bold`, {
          'text-slate-300': constellation.id === constellationId,
          'text-slate-500': constellation.id !== constellationId,
        })}
      >
        {index + 1}. {constellation.title}
      </p>
    </div>
  );
}
