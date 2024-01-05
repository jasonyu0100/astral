import { Layer } from "@/(pages)/(common)/layer/main";
import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
export interface FlowStepsAddProps
  extends React.ComponentPropsWithoutRef<"button"> {}

export function FlowStepsAdd({
  ...props
}: FlowStepsAddProps) {
  return (
    <Layer
      displayName={FlowStepsAdd.name}
      sizeStyle="h-[100px] w-[80px]"
      containerStyle={containerStyles["row-centered"]}
      borderStyle={borderStyles["border-l"]}
    >
      <button {...props}>
        <Layer
          displayName={FlowStepsAdd.name}
          sizeStyle="w-[40px] h-[40px]"
          backgroundStyle={backgroundStyles["glass-10"]}
          containerStyle={containerStyles["col-centered"]}
          borderStyle={borderStyles["rounded-full"]}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <mask
              id="mask0_2930_1508"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_2930_1508)">
              <path
                d="M11 13H5V11H11V5H13V11H19V13H13V19H11V13Z"
                fill="#CBD5E1"
              />
            </g>
          </svg>
        </Layer>
      </button>
    </Layer>
  );
}
