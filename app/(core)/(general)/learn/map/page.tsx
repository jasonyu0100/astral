"use client";

import { useState } from "react";

export default function Page() {
  const [layerNum, changeLayerNum] = useState(2);
  const [nodes, setNodes] = useState<any>({});
  const [count, setCount] = useState(0);
  const [id, setId] = useState(0);

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [z, setZ] = useState(0);

  // What would 3D Dilemma look like?

  // Encounters generate a 2d map slice

  // have n nodes in a queue N
  // dequeue a target node and collect 3 neighbour nodes
  // collect mid points on perimeter in a set
  // collect mid point on diameter
  // add boundary nodes for start point
  // add boundary nodes for neighbour nodes
  // remove start node from set
  // repeat until queue N is empty
  // create set G of sets E
  // colour set G w/ algo and highlight set E
  // done

  const dictionaryToArrayOfObjects = (dictionary: { [x: string]: any }) => {
    const result = [];
    for (const key in dictionary) {
      if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
        result.push({ key, value: dictionary[key] });
      }
    }
    return result;
  };

  return (
    <div className="flex flex-col p-[3rem]">
      <div className="flex flex-col w-[10rem] space-y-[1rem]">
        <p className="font-bold">Create</p>
        <p>
          {x}, {y}, {z}
        </p>
        <input
          type="range"
          min="-1000"
          max="1000"
          placeholder="Enter X"
          onChange={(e) => setX(parseInt(e.target.value))}
        />
        <input
          type="range"
          min="-1000"
          max="1000"
          placeholder="Enter Y"
          onChange={(e) => setY(parseInt(e.target.value))}
        />
        <input
          type="range"
          min="-1000"
          max="1000"
          placeholder="Enter Z"
          onChange={(e) => setZ(parseInt(e.target.value))}
        />
        <button
          onClick={() => {
            setNodes({ ...nodes, [count]: { x: x, y: y, z: z } });
            setCount(count + 1);
          }}
        >
          Add Node
        </button>
      </div>
      <div className="flex flex-col w-[10rem] space-y-[1rem]">
        <p className="font-bold">Link</p>
        <select>
          {dictionaryToArrayOfObjects(nodes).map((arr) => {
            const { key, value } = arr;
            return (
              <option value={key} key={key}>
                ID: {key} | {value.x}, {value.y}, {value.z}
              </option>
            );
          })}
        </select>
        <button>Prev</button>
        <button>Connect</button>
        <button>Next</button>
      </div>
      <div className="flex flex-col w-[10rem] space-y-[1rem]">
        <p className="font-bold">List {count}</p>
        <div className="flex flex-col">
          {dictionaryToArrayOfObjects(nodes).map((arr) => {
            const { key, value } = arr;
            return (
              <option value={key} key={key}>
                ID: {key} | {value.x}, {value.y}, {value.z}
              </option>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col w-[10rem] space-y-[1rem]">
        <p className="font-bold">Map</p>
        <div className="w-[10rem] h-[10rem] bg-black" />
      </div>
    </div>
  );
}
