"use client";
import Cookies from "js-cookie";
import { useEffect } from "react";

export default function isAuth(Component: any) {
  return function IsAuth(props: any) {
    const userCookie = Cookies.get("user");
    const auth = userCookie ? JSON.parse(userCookie).googleId != null : false;
    console.log("ATUH", auth);

    useEffect(() => {
      if (!auth) {
        window.location.href = "/";
        return null;
      }
    }, []);

    return <Component {...props} />;
  };
}
