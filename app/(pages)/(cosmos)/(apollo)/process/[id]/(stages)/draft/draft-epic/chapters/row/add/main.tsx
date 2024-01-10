import { Layer } from "@/(pages)/(common)/layer/main";
import { backgroundStyles, borderStyles } from "@/(pages)/(common)/styles/data";

interface DraftChaptersAddProps
  extends React.ComponentPropsWithoutRef<"button"> {}
export default function DraftChaptersAdd({ ...props }: DraftChaptersAddProps) {
  return (
    <button {...props}>
      <Layer
        displayName={DraftChaptersAdd.name}
        sizeStyle="w-[200px] h-[40px]"
        backgroundStyle={backgroundStyles["glass-5"]}
        borderStyle={borderStyles["rounded-full"]}
      >
        <div className="w-full h-full justify-center flex items-center">
          <div className="text-slate-500 font-bold">Add</div>
        </div>
      </Layer>
    </button>
  );
}
