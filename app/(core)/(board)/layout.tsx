import { Topbar } from '../(common)/(topbar)/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <Topbar />
      {children}
    </>
  );
}
