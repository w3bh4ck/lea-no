"use client";
import React, { FC } from "react";

interface IProps {
  children: React.ReactNode;
}
const PageWrapper: FC<IProps> = ({ children }) => {
  return <div className="w-full">{children}</div>;
};

export default PageWrapper;
