export default function Layout({ children }: { children: React.ReactNode }) {
  const isCosmosMode = process.env.NEXT_COSMOS_MODE === "true";
  return <>{isCosmosMode && <>{ children }</>}</>;
}
