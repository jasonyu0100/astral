import { DashboardBody } from '@/(core)/(dashboard)/common/controller/body/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return <DashboardBody>{children}</DashboardBody>;
}
