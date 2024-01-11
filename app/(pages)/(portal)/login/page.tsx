"use client";
import { LoginView } from "./view";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useUser } from "@/(pages)/(cosmos)/state/main";
import { useEffect } from "react";

export default function Page() {

  // const [data, setData] = useState();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("/api/data");
  //       console.log(response);
  //       if (response.ok) {
  //         const result = await response.json();
  //         setData(result);
  //       } else {
  //         console.error("Failed to fetch data");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return <LoginView />;
}
