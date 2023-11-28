"use client";
import { useEffect, useState } from "react";

export interface HelloFormProps {
    categoryIndex: number;
    changeCategoryIndex: (index: number) => void;
}

export default function HelloForm({ categoryIndex, changeCategoryIndex } : HelloFormProps) {
  const categories = [
    "star",
    "creator",
    "writer",
    "creative",
    "personality",
    "musician",
    "photographer",
    "dj",
    "mover",
    "artist",
    "storyteller",
    "performer",
    "illustrator",
    "producer",
    "designer",
    "architect",
  ];

  const [tag, changeTag] = useState("");
  const [fname, changeFname] = useState("");
  const [lname, changeLname] = useState("");
  const [email, changeEmail] = useState("");
  const [role, changeRole] = useState("");
  // TODO ADD ENCRYPTION
  const [password, changePassword] = useState("");
  const [rePassword, changeRePassword] = useState("");

  useEffect(() => {
    changeRole(categories[categoryIndex])
  }, [categoryIndex])

  return (
    <div className="flex flex-col items-center p-[50px] h-full w-full">
      <div className="flex flex-col space-y-[30px] self-center">
        <div className="w-[550px] h-[50px] border-b border-slate-950">
          <input
            className="w-full h-full appearance-none border-transparent focus:border-transparent focus:ring-0 text-slate-950 text-3xl font-extraBold leading-9"
            type="text"
            name="tag"
            onChange={(e) => changeTag(e.target.value)}
            value={tag}
            placeholder="J22"
          />
        </div>
        <div className="w-[550px] h-[50px] border-b border-slate-950">
          <input
            className="w-full h-full appearance-none border-transparent focus:border-transparent focus:ring-0 text-slate-950 text-3xl font-extraBold leading-9"
            type="text"
            title="first name"
            value={fname}
            onChange={(e) => changeFname(e.target.value)}
            placeholder="Jason"
          />
        </div>
        <div className="w-[550px] h-[50px] border-b border-slate-950">
          <input
            className="w-full h-full appearance-none border-transparent focus:border-transparent focus:ring-0 text-slate-950 text-3xl font-extraBold leading-9"
            type="text"
            title="last name"
            value={lname}
            onChange={(e) => changeLname(e.target.value)}
            placeholder="Yu"
          />
        </div>
        <div className="w-[550px] h-[50px] border-b border-slate-950">
          <input
            className="w-full h-full appearance-none border-transparent focus:border-transparent focus:ring-0 text-slate-950 text-3xl font-extraBold leading-9"
            type="text"
            title="email"
            value={email}
            onChange={(e) => changeEmail(e.target.value)}
            placeholder="example@email.com"
          />
        </div>
        <div className="w-[550px] h-[50px] border-b border-slate-950 ">
          <select
            value={role}
            title="position"
            onChange={(e) => {
              changeRole(e.target.value);
              changeCategoryIndex(categories.indexOf(e.target.value));
            }}
            className="w-full h-full appearance-none border-transparent focus:border-transparent focus:ring-0 text-slate-950 text-3xl font-extraBold leading-9"
          >
            {categories.map((category) => (
              <option value={category}>{category}</option>
            ))}
          </select>
        </div>
        <div className="w-[550px] h-[50px] border-b border-slate-950">
          <input
            className="w-full h-full appearance-none border-transparent focus:border-transparent focus:ring-0 text-slate-950 text-3xl font-extraBold leading-9"
            type="password"
            title="password"
            value={password}
            onChange={(e) => changePassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <div className="w-[550px] h-[50px] border-b border-slate-950">
          <input
            className="w-full h-full appearance-none border-transparent focus:border-transparent focus:ring-0 text-slate-950 text-3xl font-extraBold leading-9"
            type="password"
            title="re-enter password"
            value={rePassword}
            onChange={(e) => changeRePassword(e.target.value)}
            placeholder="Re-enter password"
          />
        </div>
      </div>
      <a className="w-[550px] h-[75px] bg-slate-950 flex flex-col justify-center items-center mt-auto" href="/collection">
        <div className="text-center text-white text-3xl font-bold leading-9">
          REGISTER
        </div>
      </a>
    </div>
  );
}
