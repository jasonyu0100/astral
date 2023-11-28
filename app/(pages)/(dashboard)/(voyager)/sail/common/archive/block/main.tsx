export interface BlockProps {
  x: number;
  y: number;
}

export interface BlockSkeletonProps {
  x: number;
  y: number;
  w: number;
  h: number;
}

export default function BlockSkeleton({ w, h, x, y }: BlockSkeletonProps) {
  return (
    <div style={{width:w*100, height: h*100, left: x, top: y}} className={`bg-slate-800 p-[20px] absolute shadow justify-center items-center inline-flex`}>
      <div style={{width:w*100-40, height: h*100-40}} className={`w-[${w*100 - 40}px] h-[${h* 100 - 40}px] bg-slate-600 rounded-[10px]`} />
    </div>
  );
}
