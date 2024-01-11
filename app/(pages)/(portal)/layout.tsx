export default function Layout({ children }: { children: React.ReactNode }) {
  const isPortalMode = process.env.PORTAL_MODE === "true";
  return (
    <div className="w-screen h-screen relative flex flex-col justify-center items-center bg-gradient-to-b from-violet-950 to-slate-950">
      {isPortalMode && <>{children}</>}
    </div>
  );
}
