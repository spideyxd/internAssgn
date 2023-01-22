import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "../src/styles/styles.module.css";
import Cardd from "./Cardd";
import React, { useState, useEffect } from "react";




const Section = (data) => {
  
  const alignCenter = { display: "flex", alignItems: "center" };
  

  return (
    <div>
      {/* SCROLL TO  */}
      <Parallax pages={5}>
        <ParallaxLayer
          offset={0}
          speed={1.5}
          style={{ ...alignCenter, justifyContent: "center" }}
        >
          <p className={styles.scrollText}>Double the hires, half the effort</p>
        </ParallaxLayer>

        {/* STICKY LAYER  */}

        <ParallaxLayer
          sticky={{ start: 1, end: 3 }}
          style={{ ...alignCenter, justifyContent: "flex-end" }}
        >
          <div style={{ width: "45%", height: "30rem", marginRight: "10vw" }}>
            <video
              src={"/v1.mp4"}
              autoPlay
              muted
              loop
              style={{
                borderRadius: "10%",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </ParallaxLayer>

        {/* NON STICKY LAYER 1 */}
       
        { data.data.texts.map((item,idx)=> ( <ParallaxLayer
          offset={idx+1}
          speed={1.5}
          style={{ ...alignCenter, justifyContent: "flex-start" }}
        >
          <Cardd heading={item.heading} subHeading={item.description} />
        </ParallaxLayer>)) }
      </Parallax>
    </div>
  );
};





export default Section;
