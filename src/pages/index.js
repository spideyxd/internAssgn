import { Parallax, IParallax,ParallaxLayer } from "@react-spring/parallax";
import styles from "../styles/styles.module.css";
import Cardd from "../../components/Cardd";
import { useScroll, animated } from '@react-spring/web';
import React, { useState, useEffect,useRef } from "react";


export default function Home({data}) {
  const parallax = useRef();

const handleScroll = () => {
  if (parallax.current) {
    console.log(parallax.current.current)
  }
}

useEffect(() => {
  const container = document.querySelector('.my-class-name')
  container.addEventListener('scroll', handleScroll)
  return () => {
    container.removeEventListener('scroll', handleScroll)
  }
}, [])

  const alignCenter = { display: "flex", alignItems: "center" };
  

  return (
    <div>

      {/* SCROLL TO  */}
      <Parallax pages={5} ref={parallax} className='my-class-name' >
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
            {
            <video
              src={"/v2.mp4"}
              autoPlay
              muted
              loop
              style={{
                borderRadius: "10%",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />}
          </div>
        </ParallaxLayer>
       
             
        {/* NON STICKY LAYER 1 */}
       
        { data.texts.map((item,idx)=> ( <ParallaxLayer key={1}
          offset={idx+1}
          speed={1.5}
          style={{ ...alignCenter, justifyContent: "flex-start" }}
        >
          <Cardd  heading={item.heading} key={1} subHeading={item.description} />
        </ParallaxLayer>)) }
      </Parallax>
     
    </div>
  );
} 

export async function getStaticProps() {
  const res = await fetch("https://mocki.io/v1/ee762599-31ae-4a3d-a6c7-d596525945e1");
  const data =await res.json();
  // console.log(data);
  return {
    props: {
      data,
    }
  };
};