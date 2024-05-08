import { Topbar } from '../(base)/(topbar)/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Topbar />
      {children}
    </>
  );
}
