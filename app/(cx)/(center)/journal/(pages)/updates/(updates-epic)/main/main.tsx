import { GlassAreaContainer } from '@/(lib)/(glass)/area/main';
import { containerFx } from '@/(fx)/data';
import { UpdatesMoment } from './moment/main';
import { MomentContext, exampleMoments } from '@/(lgx)/internal/model/journal/moment/main';

export function UpdatesPosts() {
  const moments = exampleMoments

  return (
    <GlassAreaContainer
      name={UpdatesPosts.name}
      sizeFx='flex-grow h-full'
      className={`${containerFx['col-center']} overflow-auto p-[3rem]`}
    >
      {moments.map((moment) => (
        <MomentContext.Provider value={moment} key={moment.id}>
          <UpdatesMoment key={moment.id} />
        </MomentContext.Provider>
      ))}
    </GlassAreaContainer>
  );
}
