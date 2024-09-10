import { useContext } from 'react';
import {
  ContextForHorizonProjects,
  HorizonProjectScale,
} from '../../../../../controller/main';
import { HorizonsClusterContainer } from './core/container/main';

export function HorizonsClusterLedger() {
  const {
    state: { scale },
  } = useContext(ContextForHorizonProjects);
  return (
    <>
      {scale === HorizonProjectScale.Cluster && (
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
