import { Topbar } from '../(topbar)/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Topbar />
      {children}
    </>
  );
}
