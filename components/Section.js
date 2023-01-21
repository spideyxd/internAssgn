import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "../src/styles/styles.module.css";

const Section = () => {
  const alignCenter = { display: "flex", alignItems: "center" };
  return (
    <div>
      {/* SCROLL TO  */}
      <Parallax pages={5}>
        <ParallaxLayer
          offset={0}
          speed={0.5}
          style={{ ...alignCenter,  justifyContent: "center" }}
        >
          <p  className={styles.scrollText}>Double the hires, half the effort</p>
        </ParallaxLayer>

    {/* STICKY LAYER  */}

        <ParallaxLayer
          sticky={{ start: 1, end: 3 }}
          style={{ ...alignCenter, justifyContent: "flex-end" }}
        >
          <div className={`${styles.card} ${styles.sticky}`}>
            <p>I'm a sticky layer</p>
          </div>
        </ParallaxLayer>


        {/* NON STICKY LAYER 1 */}

        <ParallaxLayer
          offset={1}
          speed={1.5}
          style={{ ...alignCenter, justifyContent: "flex-start" }}
        >
          <div className={`${styles.card} ${styles.parallax} ${styles.purple}`}>
            <p>I'm not</p>
          </div>
        </ParallaxLayer>

  {/* NON STICKY LAYER 2 */}

        <ParallaxLayer
          offset={2}
          speed={1.5}
          style={{ ...alignCenter, justifyContent: "flex-start" }}
        >
          <div className={`${styles.card} ${styles.parallax} ${styles.blue}`}>
            <p>Neither am I</p>
          </div>
        </ParallaxLayer>


  {/* NON STICKY LAYER 3 */}

         <ParallaxLayer
         offset={3}
         speed={1.5}
         style={{ ...alignCenter, justifyContent: "flex-start" }}
       >
         <div className={`${styles.card} ${styles.parallax} ${styles.blue}`}>
           <p>Neither am I</p>
         </div>
       </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Section;
