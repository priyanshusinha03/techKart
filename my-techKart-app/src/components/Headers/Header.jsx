import React from "react";
import MainHeader from "./MainHeader";
import TopHeader from "./TopHeader";

const Header = () => {
  return (
    <div style={{position:"sticky",top:"0"}}>
      <TopHeader />
      <MainHeader />
    </div>
  );
};

export default Header;
