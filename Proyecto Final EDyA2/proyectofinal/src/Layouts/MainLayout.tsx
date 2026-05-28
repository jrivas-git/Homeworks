import type { ReactNode } from "react";
import Navbar from "../Components/Shared/Navbar";

interface Props {
  children: ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main className="page">{children}</main>
    </>
  );
}