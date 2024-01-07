"use client";
import { useEffect, useState } from "react";
import { LoginView } from "./view";

export default function Page() {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/data");
        console.log(response)
        if (response.ok) {
          const result = await response.json();
          setData(result);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that this effect runs only once on component mount

  return (
    <div>
      {/* <LoginView /> */}
      {/* Display the fetched data */}
      {data && (
        <div>
          <h2 className="text-white">Data from API:</h2>
          <pre className="text-white">{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
