interface StormSidePanelSectionToggleProps {
  show: boolean;
  toggleShow: () => void;
}

export default function StormSidePanelSectionToggle({
  show,
  toggleShow,
}: StormSidePanelSectionToggleProps) {
  return (
    <>
      <div onClick={() => toggleShow()}>
        {show ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
          >
            <g clip-path="url(#clip0_2912_5065)">
              <path
                d="M14.82 17.1799L24 26.3399L33.18 17.1799L36 19.9999L24 31.9999L12 19.9999L14.82 17.1799Z"
                fill="#CBD5E1"
              />
            </g>
            <defs>
              <clipPath id="clip0_2912_5065">
                <rect width="48" height="48" fill="white" />
              </clipPath>
            </defs>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
          >
            <g clip-path="url(#clip0_2912_5068)">
              <path
                d="M14.82 30.82L24 21.66L33.18 30.82L36 28L24 16L12 28L14.82 30.82Z"
                fill="#CBD5E1"
              />
            </g>
            <defs>
              <clipPath id="clip0_2912_5068">
                <rect width="48" height="48" fill="white" />
              </clipPath>
            </defs>
          </svg>
        )}
      </div>
    </>
  );
}
