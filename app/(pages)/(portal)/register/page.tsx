"use client"

import { useEffect } from "react";
import { RegisterView } from "./view";

export default function Page() {
  useEffect(() => {
    const fetchData = async () => {
      fetch("/api/portal/register", {
        method: "POST",
        body: JSON.stringify({
          fname: "John",
          lname: "Smith",
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
  return <RegisterView />;
}
