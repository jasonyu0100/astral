"use client";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import { useUser } from "@/state/main";

export default function isAuth(Component: any) {
  return function IsAuth(props: any) {
    const auth = JSON.parse(localStorage?.user || {}).googleId != undefined;

    useEffect(() => {
      if (!auth) {
        return redirect("/");
      }
    }, []);

    if (!auth) {
      return null;
    }

    return <Component {...props} />;
  };
}
