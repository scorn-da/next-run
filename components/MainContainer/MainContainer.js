import React from 'react';
import Navbar from "components/Navbar/Navbar";
import Head from "next/head";

const MainContainer = ({ children, title }) => {
  return (
      <>
        <Head>
          <title>{title}</title>
        </Head>
        <div>
          <Navbar />
          {children}
        </div>
      </>
  );
};

export default MainContainer;