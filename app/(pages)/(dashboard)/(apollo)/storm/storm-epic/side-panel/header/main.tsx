import Layer from "@/(pages)/(common)/layer/main";
import { containerStyles } from "@/(pages)/(common)/styles/data";

export default function SidePanelHeader() {
  return (
    <div className="flex flex-row items-center flex-shrink-0 w-full h-[80px] px-[2rem] space-x-[2rem] justify-between">
      <p className="text-white font-extraBold text-xl">Conversations</p>
      <Layer
        sizeStyle="w-[50px] h-[50px] rounded-[25px] overflow-hidden"
        containerStyle={containerStyles["col-centered"]}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
        >
          <mask
            id="mask0_2433_4355"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="50"
            height="50"
          >
            <rect width="50" height="50" fill="#CBD5E1" />
          </mask>
          <g mask="url(#mask0_2433_4355)">
            <path
              d="M26.2498 25L16.6665 15.4167L19.5832 12.5L32.0832 25L19.5832 37.5L16.6665 34.5833L26.2498 25Z"
              fill="#CBD5E1"
            />
          </g>
        </svg>
      </Layer>
    </div>
  );
}
