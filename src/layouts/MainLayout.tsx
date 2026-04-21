import { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return <div className="p-6">{children}</div>;
};

export default MainLayout;