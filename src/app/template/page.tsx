"use client";

import React from "react";
import { useTopLoader } from "nextjs-toploader";

const Template = () => {
  const loader = useTopLoader();
  return (
    <div>
      <button type="button" onClick={() => loader.start()}>
        Start
      </button>
      <br />
      <button type="button" onClick={() => loader.setProgress(0.5)}>
        Set Progress
      </button>
    </div>
  );
};

export default Template;
