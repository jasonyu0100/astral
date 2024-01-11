import { CosmosBackground } from "../(common)/background/cosmos/main";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function Layout({ children }: { children: React.ReactNode }) {
  const isCosmosMode = process.env.COSMOS_MODE === "true";
  return (
      <CosmosBackground>{isCosmosMode && <>{children}</>}</CosmosBackground>
  );
}
