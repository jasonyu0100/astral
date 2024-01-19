import { useContext } from "react";
import { CreativeSpaceContext } from "../main";

export function SpaceDay() {
  const { space } = useContext(CreativeSpaceContext)
  const timeDiff = new Date().getTime() - new Date(space.time).getTime();
  const daysDifference = Math.floor(timeDiff / (1000 * 60 * 60 * 24));


  return (
    <div className='flex items-center'>
      <p className='font-bold text-lg text-white'>Day {daysDifference}</p>
    </div>
  );
}
