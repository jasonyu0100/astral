import { Glass } from '@/(components)/glass/main';
import { containerStyles } from '@/(components)/styles/data';
import { createContext, useContext } from 'react';
import { FlowContext } from '../../../page';
import { FlowMoment } from './moment/main';
import { MomentObj } from '@/(logic)/model/flow/moment/main';

export const FlowMomentContext = createContext({} as MomentObj);

export function FlowMoments() {
  const { moments } = useContext(FlowContext);

  return (
    <div className='w-full' style={{ height: '100%' }}>
      <Glass
        displayName={FlowMoments.name}
        sizeStyle='w-full h-full'
        className={`${containerStyles['col-center']} overflow-auto p-[3rem]`}
      >
        {moments.map((moment) => (
          // eslint-disable-next-line react/jsx-key
          <FlowMomentContext.Provider value={moment}>
            <FlowMoment/>
          </FlowMomentContext.Provider>
        ))}
      </Glass>
    </div>
  );
}
