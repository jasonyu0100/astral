import { ReserveView } from "./(pages)/(portal)/reserve/view";

export default function Page() {
  return (
    <div className="w-screen h-screen relative flex flex-col justify-center items-center bg-gradient-to-b from-violet-950 to-slate-950">
      <ReserveView />
    </div>
  );
}
