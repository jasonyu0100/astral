import { FileObj } from "@/tables/resource/file/main";
import React, { useState } from "react";

export function UploadFilesInput({
  onChange,
}: {
  onChange: (files: FileObj[]) => void;
}) {
  const [uploadedFileObjs, changeUploadedFileObjs] = useState<FileObj[]>([]);

  const handleFileChange = async (event: any) => {
    // get file attributes
    const files = Array.from(event.target.files);
    const payload: FileObj[] = [];
    for (let file of files) {
      const name = file.name;
      const type = file.type;
      const size = file.size;

      // get secure url from our server
      const { url } = await fetch("/s3Url").then((res) => res.json());

      // post the image directly to the s3 bucket
      await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: file,
      });
      const fileSrc = url.split("?")[0];

      // post request to my server to store any extra data
      const filePayload: FileObj = {
        id: crypto.randomUUID(),
        src: fileSrc,
        name: name,
        type: type,
        size: size,
      };

      changeUploadedFileObjs((prev) => [...prev, filePayload]);
      payload.push(filePayload);
    }
    onChange(payload);
  };
  return (
    <div className="flex flex-col bg-white space-y-2 pb-[2rem] border-b-[1px] border-slate-500">
      <label
        htmlFor="fileInput"
        className="w-full text-slate-500 text-md font-bold"
      >
        Choose files:
      </label>
      <div className="relative p-4 border-[3px] border-blue-500">
        <input
          type="file"
          id="fileInput"
          multiple
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          onChange={(e) => handleFileChange(e)}
        />
        <div className="flex flex-row w-full items-center space-x-[1rem]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-[3rem] h-[3rem]"
            viewBox="0 0 24 24"
            fill="none"
          >
            <mask
              id="mask0_2959_7"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_2959_7)">
              <path
                d="M11 16V7.85L8.4 10.45L7 9L12 4L17 9L15.6 10.45L13 7.85V16H11ZM6 20C5.45 20 4.97917 19.8042 4.5875 19.4125C4.19583 19.0208 4 18.55 4 18V15H6V18H18V15H20V18C20 18.55 19.8042 19.0208 19.4125 19.4125C19.0208 19.8042 18.55 20 18 20H6Z"
                fill="#3B82F6"
              />
            </g>
          </svg>
          <p className="mt-1 text-lg text-blue-500 font-bold">
            Upload your files here
          </p>
        </div>
      </div>
      {uploadedFileObjs.map((uploadedFileObj, i) => (
        <div className="p-[1rem] w-full">
          <div className="flex flex-row space-x-[2rem] items-center">
            <img
              src={uploadedFileObj.src}
              alt={uploadedFileObj.name}
              className="bg-black h-[100px] aspect-square shadow-md"
            />
            <div className="flex flex-col">
              <p className="text-lg font-bold">{uploadedFileObj.name}</p>
              <p className="text-sm text-slate-500">{uploadedFileObj.type}</p>
              <p className="text-md text-slate-500">
                {uploadedFileObj.size} bytes
              </p>
            </div>
            <button
              className="w-[30px] h-[30px] bg-red-300 rounded-full"
              onClick={() => {
                changeUploadedFileObjs((prev) =>
                  prev.filter((_, index) => index !== i)
                );
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
                viewBox="0 0 24 24"
                fill="none"
              >
                <mask
                  id="mask0_2962_7"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                >
                  <rect width="24" height="24" className="fill-slate-100" />
                </mask>
                <g mask="url(#mask0_2962_7)">
                  <path
                    d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z"
                    className="fill-slate-100"
                  />
                </g>
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
