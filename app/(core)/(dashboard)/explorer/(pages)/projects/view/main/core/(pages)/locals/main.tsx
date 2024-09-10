import { useContext } from 'react';
import {
  ContextForHorizonProjects,
  HorizonsProjectScale,
} from '../../../../../controller/main';
import { HorizonsLocalContainer } from './core/container/main';

export function HorizonsLocalLedger() {
  const {
    state: { scale },
  } = useContext(ContextForHorizonProjects);
  return (
    <>
      {scale === HorizonsProjectScale.Local && (
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
