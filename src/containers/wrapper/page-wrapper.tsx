import React, { FC } from "react";

interface IProps {
  children: React.ReactNode;
}
const PageWrapper: FC<IProps> = ({ children }) => {
  return <main>{children}</main>;
};

export default PageWrapper;
