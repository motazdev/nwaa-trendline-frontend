import React, { ReactNode } from "react";

const AppContainer = ({ children }: { children: ReactNode }) => {
  return <div className="lg:px-[120px] md:px-10 px-5">{children}</div>;
};

export default AppContainer;
