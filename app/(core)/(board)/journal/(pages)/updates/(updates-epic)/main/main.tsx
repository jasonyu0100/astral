import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { containerFx } from '@/(style)/data';
import { UpdatesMoment } from './moment/main';
import {
  MomentContext,
  exampleMoments,
} from '@/(types)/model/journal/moment/main';

export function UpdatesPosts() {
  const moments = exampleMoments;

  return (
    <div className='flex h-full w-full flex-col overflow-auto p-[2rem]'>
      {moments.map((moment) => (
        <MomentContext.Provider value={moment} key={moment.id}>
          <UpdatesMoment key={moment.id} />
        </MomentContext.Provider>
      ))}
    </div>
  );
}
