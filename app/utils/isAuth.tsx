"use client";
import Cookies from "js-cookie";
import { useEffect } from "react";

export default function insideCosmos(Component: any) {
  return (props: any) => {
    const userCookie = Cookies.get("user");
    const isAuthed = userCookie ? JSON.parse(userCookie).googleId != null : false;
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);

    useEffect(() => {
      if (isMobile) {
        window.location.href = "/";
      } else if (!isAuthed) {
        window.location.href = "/";
        return null;
      }

      return () => {}
    }, []);

    return <Component {...props} />;
  };
}
