"use client";

export default function ApolloLaunch() {
  return (
    <div className="flex flex-row">
      <div className="flex flex-shrink-0 bg-slate-500 rounded-md w-[500px] h-[700px]">
        <div className="px-[20px] h-[50px] flex flex-row w-full  items-center space-x-[20px] mt-auto mb-[20px]">
          <div className="w-[50px] h-[50px] bg-white rounded-[25px]" />
          <p className="text-white font-bold">J22</p>
          <p className="text-white font-regular">21 hours ago</p>
        </div>
      </div>
      <div className="flex flex-col ml-[40px] overflow-auto space-y-[20px]  h-[700px]">
        <div className="bg-white w-[300px] h-[150px] rounded-[10px] flex-shrink-0" />
        <div className="w-full mt-[5px] h-[0px] border border-slate-400 border-opacity-30"/>
        <div className="bg-white w-[300px] h-[150px] rounded-[10px] flex-shrink-0" />
        <div className="bg-white w-[300px] h-[150px] rounded-[10px] flex-shrink-0" />
        <div className="bg-white w-[300px] h-[150px] rounded-[10px] flex-shrink-0" />
        <div className="bg-white w-[300px] h-[150px] rounded-[10px] flex-shrink-0" />
        <div className="bg-white w-[300px] h-[150px] rounded-[10px] flex-shrink-0" />
        <div className="bg-white w-[300px] h-[150px] rounded-[10px] flex-shrink-0" />
      </div>
    </div>
  );
}
