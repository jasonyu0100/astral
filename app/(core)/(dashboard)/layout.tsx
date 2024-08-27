import { DashboardTopbar } from '../common/(topbar)/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <DashboardTopbar />
      {children}
    </>
  );
}
