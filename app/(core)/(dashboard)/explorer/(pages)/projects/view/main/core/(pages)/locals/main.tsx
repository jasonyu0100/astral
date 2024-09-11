import { useContext } from 'react';
import {
  ContextForExplorerProjects,
  ExplorerProjectScope,
} from '../../../../../controller/main';
import { HorizonsLocalContainer } from './core/container/main';

export function HorizonsLocalLedger() {
  const {
    state: { scope: scale },
  } = useContext(ContextForExplorerProjects);
  return (
    <>
      {scale === ExplorerProjectScope.Local && (
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
