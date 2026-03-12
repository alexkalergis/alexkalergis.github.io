"use client";

import { Dancing_Script } from "next/font/google";
import "./signature.scss";

const dancing = Dancing_Script({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
});

export function Signature() {
  return (
    <span className={`signature ${dancing.className}`}>
      Alex Kalergis
    </span>
  );
}
