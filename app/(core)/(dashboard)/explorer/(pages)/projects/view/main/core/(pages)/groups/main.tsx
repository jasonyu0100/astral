import { useContext } from 'react';
import {
  ContextForHorizonProjects,
  HorizonProjectScale,
} from '../../../../../controller/main';
import { HorizonsGroupContainer } from './core/container/main';

export function HorizonsGroupLedger() {
  const {
    state: { scale },
  } = useContext(ContextForHorizonProjects);
  return (
    <>
      {scale === HorizonProjectScale.Group && (
        <>
          <HorizonsGroupContainer />
          <HorizonsGroupContainer />
          <HorizonsGroupContainer />
          <HorizonsGroupContainer />
          <HorizonsGroupContainer />
          <HorizonsGroupContainer />
          <HorizonsGroupContainer />
        </>
      )}
    </>
  );
}
