import { useContext } from 'react';
import {
  ContextForExplorerProjects,
  ExplorerProjectScope,
} from '../../../../../controller/main';
import { HorizonsGroupContainer } from './core/container/main';

export function HorizonsGroupLedger() {
  const {
    state: { scope: scale },
  } = useContext(ContextForExplorerProjects);
  return (
    <>
      {scale === ExplorerProjectScope.Group && (
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
