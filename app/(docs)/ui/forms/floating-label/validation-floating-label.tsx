export default function ValidationFloatingLabel() {
  return (
    <>
      {/* Success messages */}
      <div className="grid items-end gap-6 mb-6 md:grid-cols-3">
        <div>
          <div className="relative">
            <input
              type="text"
              id="filled_success"
              aria-describedby="filled_success_help"
              className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-green-600 dark:border-green-500 appearance-none dark:text-white dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="filled_success"
              className="absolute text-sm text-green-600 dark:text-green-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Filled success
            </label>
          </div>
          <p
            id="filled_success_help"
            className="mt-2 text-xs text-green-600 dark:text-green-400"
          >
            <span className="font-medium">Well done!</span> Some success
            message.
          </p>
        </div>
        <div>
          <div className="relative">
            <input
              type="text"
              id="outlined_success"
              aria-describedby="outlined_success_help"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-green-600 appearance-none dark:text-white dark:border-green-500 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="outlined_success"
              className="absolute text-sm text-green-600 dark:text-green-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Outlined success
            </label>
          </div>
          <p
            id="outlined_success_help"
            className="mt-2 text-xs text-green-600 dark:text-green-400"
          >
            <span className="font-medium">Well done!</span> Some success
            message.
          </p>
        </div>
        <div>
          <div className="relative z-0">
            <input
              type="text"
              id="standard_success"
              aria-describedby="standard_success_help"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-green-600 appearance-none dark:text-white dark:border-green-500 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="standard_success"
              className="absolute text-sm text-green-600 dark:text-green-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Standard success
            </label>
          </div>
          <p
            id="standard_success_help"
            className="mt-2 text-xs text-green-600 dark:text-green-400"
          >
            <span className="font-medium">Well done!</span> Some success
            message.
          </p>
        </div>
      </div>
      {/* Error messages */}
      <div className="grid items-end gap-6 md:grid-cols-3">
        <div>
          <div className="relative">
            <input
              type="text"
              id="filled_error"
              aria-describedby="filled_error_help"
              className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 appearance-none dark:text-white dark:border-red-500 focus:outline-none focus:ring-0 border-red-600 focus:border-red-600 dark:focus-border-red-500 peer"
              placeholder=" "
            />
            <label
              htmlFor="filled_error"
              className="absolute text-sm duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 text-red-600 dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Filled error
            </label>
          </div>
          <p
            id="filled_error_help"
            className="mt-2 text-xs text-red-600 dark:text-red-400"
          >
            <span className="font-medium">Oh, snapp!</span> Some error message.
          </p>
        </div>
        <div>
          <div className="relative">
            <input
              type="text"
              id="outlined_error"
              aria-describedby="outlined_error_help"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none dark:text-white dark:border-red-500 border-red-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="outlined_error"
              className="absolute text-sm text-red-600 dark:text-red-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Outlined error
            </label>
          </div>
          <p
            id="outlined_error_help"
            className="mt-2 text-xs text-red-600 dark:text-red-400"
          >
            <span className="font-medium">Oh, snapp!</span> Some error message.
          </p>
        </div>
        <div>
          <div className="relative z-0">
            <input
              type="text"
              id="standard_error"
              aria-describedby="standard_error_help"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-red-600 appearance-none dark:text-white dark:border-red-500 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="standard_error"
              className="absolute text-sm text-red-600 dark:text-red-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Standard error
            </label>
          </div>
          <p
            id="standard_error_help"
            className="mt-2 text-xs text-red-600 dark:text-red-400"
          >
            <span className="font-medium">Oh, snapp!</span> Some error message.
          </p>
        </div>
      </div>
    </>
  );
}
