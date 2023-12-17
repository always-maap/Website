"use client";

import { useEffect, useState } from "react";

export default function Yeganeh() {
  const [t, setT] = useState("یگانه");

  useEffect(() => {
    setInterval(() => {
      setT((prev) => prev + "ه");
    }, 75);
  }, []);

  return (
    <div dir="rtl" className="text-3xl break-all">
      {t}
    </div>
  );
}
