import { useContext } from 'react';
import {
  ContextForHorizonProjects,
  HorizonsProjectScale,
} from '../../../../../controller/main';
import { HorizonsClusterContainer } from './core/container/main';

export function HorizonsClusterLedger() {
  const {
    state: { scale },
  } = useContext(ContextForHorizonProjects);
  return (
    <>
      {scale === HorizonsProjectScale.Cluster && (
        <>
          <HorizonsClusterContainer />
          <HorizonsClusterContainer />
          <HorizonsClusterContainer />
          <HorizonsClusterContainer />
          <HorizonsClusterContainer />
          <HorizonsClusterContainer />
          <HorizonsClusterContainer />
        </>
      )}
    </>
  );
}
