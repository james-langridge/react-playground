import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="container mx-auto my-10 px-5">{children}</div>;
}
