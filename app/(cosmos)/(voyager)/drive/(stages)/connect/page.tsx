"use client";
import { useState } from "react";
import { ConnectView } from "./view";
import { connectObject } from "@/tables/resource/table";
import insideCosmos from "@/utils/isAuth";
import { ConnectElementObj } from "@/tables/resource/connect/element/main";

interface ConnectHandler {
  connectQuery: (query: string) => void;
  updateResult: (i: number, data: any) => void;
}
export interface ConnectViewProps {
  searchHandler: ConnectHandler;
  results: ConnectElementObj[];
}

function Page() {
  const [results, changeResults] = useState(connectObject.example.results);

  const connectHandler : ConnectHandler = {
    connectQuery: (query: string) => {
      if (query === "") {
        changeResults(connectObject.example.results);
      } else {
        changeResults([]);
      }
    },
    updateResult: (i: number, data: any) => {
      changeResults((prev: any[]) =>
        prev.map((o: any, j: number) => (j === i ? { ...o, ...data } : o))
      );
    }
  }

  return <ConnectView results={results} searchHandler={connectHandler} />;
}

export default insideCosmos(Page);