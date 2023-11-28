"use client";

import { ReactNode } from "react";
import ReactDOMServer from "react-dom/server";

interface ParentComponentProps {
  children: ReactNode;
  title: string;
  description?: string;
}

const ShowcaseComponent: React.FC<ParentComponentProps> = ({
  children,
  title,
  description="",
}) => {
  return (
    <div className="flex-col">
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <h2 className="text-2xl font-extrabold dark:text-white">{title}</h2>
      <div className="py-4"></div>
      <div className="p-5 border-x border-y border-gray-100 rounded">
        {children}
      </div>
      {description && (
        <div className="py-4 pl-8">
          <p className="text-lg font-normal dark:text-white">
            Description: {description}
          </p>
        </div>
      )}
      <div className="py-4"></div>
      <button
        type="button"
        onClick={() => alert(ReactDOMServer.renderToString(children as any))}
        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
      >
        <svg
          className="w-6 h-6 text-white dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 16"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
          />
        </svg>
      </button>
    </div>
  );
};

export const ShowcaseWindowComponent: React.FC<ParentComponentProps> = ({
  children,
  title,
  description="",
}) => {
  return (
    <div className="max-w-full">
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <h2 className="text-2xl font-extrabold dark:text-white">{title}</h2>
      <div className="py-4"></div>
      <div className="ml-8 max-w-full mx-auto border border-gray-300 h-auto overflow-auto">
        {children}
      </div>
      {description && (
        <div className="py-4">
          <p className="text-lg font-normal dark:text-white">{description}</p>
        </div>
      )}
      <div className="py-4"></div>
      <button
        type="button"
        onClick={() => alert(ReactDOMServer.renderToString(children as any))}
        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
      >
        <svg
          className="w-6 h-6 text-white dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 16"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
          />
        </svg>
      </button>
    </div>
  );
};

export default ShowcaseComponent;
