"use client";

import { useEffect, useState } from "react";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: "/fontiran.css",
    },
  ];
}

export default function Yeganeh() {
  const [t, setT] = useState("یگانه");

  useEffect(() => {
    setInterval(() => {
      setT((prev) => prev + "ه");
    }, 75);
  }, []);

  return (
    <div
      dir="rtl"
      className="text-3xl break-all"
      style={{ fontFamily: "Yekan Bakh FaNum" }}
    >
      {t}
    </div>
  );
}
