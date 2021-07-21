import React from "react";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    // this is the shared style
  


`;

const Root = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export default Root;
