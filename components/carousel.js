import Glide from "@glidejs/glide";
import styles from "styles/carousel.module.css";
import { useState, useEffect, cloneElement } from "react";

export default function Carousel({ element = "glide", options, children }) {
  const [slider] = useState(new Glide(`.${element}`, options));

  useEffect(() => {
    slider.mount();

    // subscribe to an event
    slider.on("run.before", (event) => {
      // ... do something cool here
    });

    // cleanup when unmounting component
    return () => slider.destroy();
  }, []);

  return (
    <div className={element}>
      <div className={styles.glide__track} data-glide-el="track">
        <ul className={styles.glide__slides}>
          {children.map((slide, index) => {
            return cloneElement(slide, {
              key: index,
              className: `${slide.props.className} glide__slide`,
            });
          })}
        </ul>
      </div>
    </div>
  );
}
