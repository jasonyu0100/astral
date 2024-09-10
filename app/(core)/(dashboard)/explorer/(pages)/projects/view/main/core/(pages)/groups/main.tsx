import { useContext } from 'react';
import {
  ContextForHorizonProjects,
  HorizonsProjectScale,
} from '../../../../../controller/main';
import { HorizonsGroupContainer } from './core/container/main';

export function HorizonsGroupLedger() {
  const {
    state: { scale },
  } = useContext(ContextForHorizonProjects);
  return (
    <>
      {scale === HorizonsProjectScale.Group && (
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
