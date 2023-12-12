import { backgroundStyles, borderStyles, containerStyles } from "../../layer/data";
import Layer from "../../layer/main";

export function DashboardPlayer({ children }: { children: React.ReactNode }) {
  return (
    <Layer
      displayName={DashboardPlayer.name}
      sizeStyle="h-[1rem] w-full"
      containerStyle={containerStyles["row-centered"]}
      backgroundStyle={"bg-gradient-to-br from-slate-900 to-slate-950"}
    >
      {children}
    </Layer>
  );
}
