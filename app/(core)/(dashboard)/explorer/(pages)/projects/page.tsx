'use client';
import protectedUnderAstralAuth from '@/utils/isAuth';
import {
  ContextForHorizonProjects,
  useControllerForProjects,
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
  const projectsController = useControllerForProjects();
  return (
    <ContextForHorizonProjects.Provider value={projectsController}>
      {children}
    </ContextForHorizonProjects.Provider>
  );
}

export default protectedUnderAstralAuth(Page);
