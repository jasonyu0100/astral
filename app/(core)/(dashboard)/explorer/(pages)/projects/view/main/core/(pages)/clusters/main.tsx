import { useContext } from 'react';
import {
  ContextForExplorerProjects,
  ExplorerProjectScope,
} from '../../../../../controller/main';
import { HorizonsClusterContainer } from './core/container/main';

export function HorizonsClusterLedger() {
  const {
    state: { scope: scope },
  } = useContext(ContextForExplorerProjects);
  return (
    <>
      {scope === ExplorerProjectScope.Cluster && (
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
