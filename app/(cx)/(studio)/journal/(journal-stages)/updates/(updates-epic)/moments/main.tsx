import { GlassAreaContainer } from '@/(components)/(basic)/glass/area/main';
import { containerStyles } from '@/(design)/(styles)/data';
import { UpdatesMoment } from './moment/main';
import { MomentContext, exampleMoments } from '@/(logic)/internal/model/flow/moment/main';

export function UpdatesPosts() {
  const moments = exampleMoments

  return (
    <GlassAreaContainer
      name={UpdatesPosts.name}
      size='flex-grow h-full'
      className={`${containerStyles['col-center']} overflow-auto p-[3rem]`}
    >
      {moments.map((moment) => (
        <MomentContext.Provider value={moment} key={moment.id}>
          <UpdatesMoment key={moment.id} />
        </MomentContext.Provider>
      ))}
    </GlassAreaContainer>
  );
}
