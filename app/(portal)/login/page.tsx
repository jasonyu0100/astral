"use client";
import { LoginView } from "./view";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    const fetchData = async () => {
      fetch("/api/portal/login", {
        method: "POST",
        body: JSON.stringify({
          email: "test@email.com",
          password: "password",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(async (resp) => {
          const data = await resp.json();
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchData();
  }, []);

  return <LoginView />;
}
