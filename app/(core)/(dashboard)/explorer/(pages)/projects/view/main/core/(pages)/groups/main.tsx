import { useContext } from 'react';
import {
  ContextForExplorerProjects,
  ExplorerProjectsScope,
} from '../../../../../controller/main';
import { HorizonsGroupContainer } from './core/container/main';

export function HorizonsGroupLedger() {
  const {
    state: { scope: scale },
  } = useContext(ContextForExplorerProjects);
  return (
    <>
      {scale === ExplorerProjectsScope.Group && (
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
