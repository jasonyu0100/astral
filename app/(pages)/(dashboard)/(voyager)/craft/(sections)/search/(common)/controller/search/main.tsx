import Layer from "@/(pages)/(common)/layer/main";
import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";

export default function StoreSearch() {
  return (
    <Layer
      sizeStyle="w-full h-[3rem] rounded-full overflow-hidden"
      backgroundStyle={backgroundStyles["glass-10"]}
      containerStyle={containerStyles["row-center"]}
      borderStyle={borderStyles["border-all"]}
    >
      <input
        className="  px-[1rem] text-white text-xl font-bold font-['Creato Display'] leading-7 h-[3rem] bg-transparent outline-none"
        placeholder="enter search..."
      />
    </Layer>
  );
}
