import "./Preloader.scss";

import * as React from "react";

export interface PreloaderProps {
  extraClass?: string;
  shape?: "circle" | "rect";
}

export function Preloader({ extraClass = "", shape = "rect" }: PreloaderProps) {
  return <div className={`preloader ${extraClass} ${shape}`} />;
}
