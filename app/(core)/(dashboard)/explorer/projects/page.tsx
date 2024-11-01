'use client';
import PrivateAstralPage from '@/utils/private-astral-page';
import {
  ContextForExplorerProjects,
  useControllerForExplorerProjects,
} from './controller/main';
import { HorizonsView } from './view/view';

function Page() {
  return (
    <ControllerWrapper>
      <HorizonsView />
    </ControllerWrapper>
  );
}

function ControllerWrapper({ children }: { children: React.ReactNode }) {
  const projectsController = useControllerForExplorerProjects();
  return (
    <ContextForExplorerProjects.Provider value={projectsController}>
      {children}
    </ContextForExplorerProjects.Provider>
  );
}

export default PrivateAstralPage(Page);
