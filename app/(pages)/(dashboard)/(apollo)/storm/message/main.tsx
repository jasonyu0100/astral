export default function StormMessageInput() {
  return (
    <div className="flex flex-row flex-shrink-0 items-center justify-evenly bg-slate-800 w-full h-[80px]">
      <div className="w-[50px] h-[50px] bg-white flex justify-center items-center">
        <div className="w-[40px] h-[40px] rounded-[20px] bg-slate-700"></div>
      </div>
      <div className="w-[450px] h-[30px] bg-slate-600 rounded-[30px]"></div>
      <div className="w-[100px] h-[50px] bg-white flex flex-row justify-evenly items-center">
        <div className="w-[40px] h-[40px] rounded-[20px] bg-slate-700"></div>
        <div className="w-[40px] h-[40px] rounded-[20px] bg-slate-700"></div>
      </div>
    </div>
  );
}
