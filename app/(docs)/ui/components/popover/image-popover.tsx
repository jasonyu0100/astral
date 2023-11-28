export default function ImagePopover() {
  return (
    <>
      <p className="text-gray-500 dark:text-gray-400">
        Due to its central geographic location in Southern Europe,{" "}
        <a
          href="#"
          className="text-blue-600 underline dark:text-blue-500 hover:no-underline"
          data-popover-target="popover-image"
        >
          Italy
        </a>{" "}
        has historically been home to myriad peoples and cultures. In addition
        to the various ancient peoples dispersed throughout what is now
        modern-day Italy, the most predominant being the Indo-European Italic
        peoples who gave the peninsula its name, beginning from the classical
        era, Phoenicians and Carthaginians founded colonies mostly in insular
        Italy
      </p>
      <div
        data-popover=""
        id="popover-image"
        role="tooltip"
        // className="absolute z-10 invisible inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-96 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600"
        className="z-10 inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm w-96 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600"
      >
        <div className="grid grid-cols-5">
          <div className="col-span-3 p-3">
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900 dark:text-white">
                About Italy
              </h3>
              <p>
                Italy is located in the middle of the Mediterranean Sea, in
                Southern Europe it is also considered part of Western Europe. A
                unitary parliamentary republic with Rome as its capital and
                largest city.
              </p>
              <a
                href="#"
                className="flex items-center font-medium text-blue-600 dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700"
              >
                Read more{" "}
                <svg
                  className="w-4 h-4 ml-1"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
          <img
            src="/docs/images/popovers/italy.png"
            className="h-full col-span-2"
            alt="Italy map"
          />
        </div>
        <div data-popper-arrow="" />
      </div>
    </>
  );
}
