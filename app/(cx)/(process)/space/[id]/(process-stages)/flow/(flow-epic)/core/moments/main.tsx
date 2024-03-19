import { GlassContainer } from '@/(components)/(basic)/glass/container/main';
import { containerStyles } from '@/(design)/(styles)/data';
import { createContext, useContext } from 'react';
import { FlowMoment } from './moment/main';
import { MomentObj } from '@/(logic)/internal/model/flow/moment/main';
import { MomentsHandlerContext } from '@/(logic)/internal/handler/flow/moments/main';

export const FlowMomentContext = createContext({} as MomentObj);

export function FlowMoments() {
  const momentsHandler = useContext(MomentsHandlerContext);
  const moments = momentsHandler.moments;

  return (
    <div className='w-full' style={{ height: '100%' }}>
      <GlassContainer
        displayName={FlowMoments.name}
        sizeStyle='w-full h-full'
        className={`${containerStyles['col-center']} overflow-auto p-[3rem]`}
      >
        {moments.map((moment) => (
          <FlowMomentContext.Provider value={moment} key={moment.id}>
            <FlowMoment key={moment.id}/>
          </FlowMomentContext.Provider>
        ))}
      </GlassContainer>
    </div>
  );
}
