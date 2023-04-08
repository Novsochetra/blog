import { ReactNode } from "react";

export default function Container({ children }: { children?: ReactNode }) {
  return <div className="container m-auto flex flex-col">{children}</div>;
}
