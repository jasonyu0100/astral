import { GlassAreaContainer } from '@/(pkgs)/(glass)/area/main';
import { containerFx } from '@/(fx)/data';
import { createContext, useContext } from 'react';
import { FlowMoment } from './moment/main';
import { MomentObj } from '@/(lgx)/internal/model/journal/moment/main';
import { MomentsHandlerContext } from '@/(lgx)/internal/handler/moments/main';

export const FlowMomentContext = createContext({} as MomentObj);

export function FlowMoments() {
  const momentsHandler = useContext(MomentsHandlerContext);
  const moments = momentsHandler.moments;

  return (
    <div className='w-full' style={{ height: '100%' }}>
      <GlassAreaContainer
        name={FlowMoments.name}
        sizeFx='w-full h-full'
        className={`${containerFx['col-center']} overflow-auto p-[3rem]`}
      >
        {moments.map((moment) => (
          <FlowMomentContext.Provider value={moment} key={moment.id}>
            <FlowMoment key={moment.id}/>
          </FlowMomentContext.Provider>
        ))}
      </GlassAreaContainer>
    </div>
  );
}
