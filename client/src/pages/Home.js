import React, { useState } from "react";
import "../res/css/Home.css";
import Map from '../components/Map'
import { height } from "@amcharts/amcharts4/.internal/core/utils/Utils";

const Home = () => {
  return (
    // <>
    //   <div className="text-light bg-dark jumbotron text-center">
    //     Test Jumbotron
    //   </div>
    //   <main>
    //     <div className="flex-row justify-center">
    //       <div className="col-12 col-md-8 mb-3"></div>
    //     </div>
    //   </main>
    // </>
    <>

      <div className="bg-primary" style={{height:"100vh"}} >
        <Map />
      </div>
    </>
    
  );
};

export default Home;
