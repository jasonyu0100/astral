import { useContext } from 'react';
import {
  ContextForHorizonProjects,
  HorizonProjectScale,
} from '../../../../../controller/main';
import { HorizonsLocalContainer } from './core/container/main';

export function HorizonsLocalLedger() {
  const {
    state: { scale },
  } = useContext(ContextForHorizonProjects);
  return (
    <>
      {scale === HorizonProjectScale.Local && (
        <>
          <HorizonsLocalContainer />
          <HorizonsLocalContainer />
          <HorizonsLocalContainer />
          <HorizonsLocalContainer />
          <HorizonsLocalContainer />
          <HorizonsLocalContainer />
          <HorizonsLocalContainer />
        </>
      )}
    </>
  );
}
