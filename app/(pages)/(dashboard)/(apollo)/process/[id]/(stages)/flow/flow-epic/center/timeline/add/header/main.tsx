import { Layer } from "@/(pages)/(common)/layer/main";
import { borderStyles, containerStyles } from "@/(pages)/(common)/styles/data";

export function FlowPointHeader() {
  return (
    <div className="w-full h-[60px] pb-[20px]">
      <div className="flex flex-col w-full items-center space-y-[20px]">
        <p className="text-slate-500 font-bold text-xl">New Moment</p>
        <Layer
          containerStyle={containerStyles["row-centered"]}
          sizeStyle="w-full"
          borderStyle={borderStyles["border-b"]}
          displayName={FlowPointHeader.name}
        >
          <div className="flex flex-row w-full justify-between items-center">
            <div className="w-[15px] h-[15px] bg-slate-400 rounded-full"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="24"
              viewBox="0 0 15 24"
              fill="none"
            >
              <path
                d="M2.99969 0L0.179688 2.82L9.33969 12L0.179688 21.18L2.99969 24L14.9997 12L2.99969 0Z"
                fill="#CBD5E1"
              />
            </svg>
          </div>
        </Layer>
      </div>
    </div>
  );
}
