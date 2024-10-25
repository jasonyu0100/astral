import { useContext } from 'react';
import {
  ContextForExplorerProjects,
  ExplorerProjectsScope,
} from '../../../../../controller/main';
import { HorizonsLocalContainer } from './core/container/main';

export function HorizonsLocalLedger() {
  const {
    state: { scope: scale },
  } = useContext(ContextForExplorerProjects);
  return (
    <>
      {scale === ExplorerProjectsScope.Local && (
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
