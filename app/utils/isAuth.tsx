"use client";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import { isAuthenticated } from "./Auth";


export default function isAuth(Component: any) {
  return function IsAuth(props: any) {
    const auth = localStorage.user.googleId != "";

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