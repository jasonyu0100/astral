import { useContext } from 'react';
import {
  ContextForExplorerProjects,
  ExplorerProjectsScope,
} from '../../../../../controller/main';
import { HorizonsClusterContainer } from './core/container/main';

export function HorizonsClusterLedger() {
  const {
    state: { scope: scope },
  } = useContext(ContextForExplorerProjects);
  return (
    <>
      {scope === ExplorerProjectsScope.Cluster && (
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
