import React from "react";
import SimpleSlider from "../slider/slider";
import Footer from "./footer";
import Header from "./header";

const Layout = (props) => {
  return (
    <>
      <div className="page">
      
          <Header className={"light"} />
        

          <div className="page-wrapper">{props.component}</div>
          <Footer />
       

        
      </div>
    </>
  );
};
export default Layout;
