"use client";
import {
  GlassContainer,
  sharpGlassBorder,
} from "@/(pages)/(common)/texture/glass/main";

export default function ApolloStorm() {
  return (
    <>
      <div className="flex flex-row w-[800px] bg-blue-600">
        <div className="flex flex-col flex-shrink-0 bg-red-600 rounded-md w-[600px] h-[700px] justify-between">
          <div className="flex flex-col justify-center items-center flex-shrink-0 bg-green-600 rounded-md w-[600px] h-[100px]">
            <div className="w-[50px] h-[50px] bg-white"></div>
          </div>
          <div className="flex flex-col flex-shrink-0 bg-violet-600 rounded-md w-[600px] h-[500px] p-[20px] space-y-[20px]">
            <p className="bg-white rounded-md p-3 max-w-[300px] mr-auto">
              2341132s
            </p>
            <p className="ml-auto bg-white rounded-md p-3 max-w-[300px]">
              2341132s
            </p>
          </div>
          <div className="flex flex-row flex-shrink-0 items-center justify-evenly bg-green-600 rounded-md w-[600px] h-[100px]">
            <div className="w-[500px] h-[80px] bg-white"></div>
            <div className="w-[50px] h-[50px] bg-white"></div>
          </div>
        </div>
        <div className="flex flex-col items-center flex-shrink-0 bg-white rounded-md w-[200px] h-[700px] p-[20px] overflow-auto space-y-[20px]">
          <div className="flex flex-col w-[150px] h-[200px] flex-shrink-0 bg-green-600">asdfafdsfsad</div>
          <div className="flex flex-col w-[150px] h-[200px] flex-shrink-0 bg-green-600">asdfafdsfsad</div>
          <div className="flex flex-col w-[150px] h-[200px] flex-shrink-0 bg-green-600">asdfafdsfsad</div>
          <div className="flex flex-col w-[150px] h-[200px] flex-shrink-0 bg-green-600">asdfafdsfsad</div>
          <div className="flex flex-col w-[150px] h-[200px] flex-shrink-0 bg-green-600">asdfafdsfsad</div>
          <div className="flex flex-col w-[150px] h-[200px] flex-shrink-0 bg-green-600">asdfafdsfsad</div>
        </div>
      </div>
    </>
  );
}
