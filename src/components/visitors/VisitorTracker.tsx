"use client";

import { useEffect } from "react";

const VisitorTracker = () => {
  useEffect(() => {
    fetch("/api/track-visitor", { method: "POST" }).catch(console.error);
  }, []);

  return null;
};
export default VisitorTracker;
