import React from "react";
import styles from "./Slide.module.css";

const Slide = ({ slides }) => {
  const [active, setActive] = React.useState(0);
  const [position, setPosition] = React.useState(0);

  const contentRef = React.useRef();
  let countdownRef = React.useRef();

  const length = slides.length;

  const prevSlide = () => {
    if (active <= 0) setActive(length - 1);
    else setActive(active - 1);
  };

  const nextSlide = () => {
    if (active >= length - 1) setActive(0);
    else setActive(active + 1);
  };

  const resetTimer = () => {
    clearInterval(countdownRef.current);
    countdownRef.current = setInterval(() => {
      nextSlide();
    }, 2000);
  };

  React.useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect();
    setPosition(width * active);
    resetTimer();
  }, [active]);

  return (
    <section className={styles.container}>
      <div
        className={styles.content}
        style={{ transform: `translateX(-${position}px)` }}
        ref={contentRef}
      >
        {slides.map((slide) => (
          <div className={styles.item} key={slide.id}>
            {slide.text}
          </div>
        ))}
      </div>
      <nav className={styles.nav}>
        <button onClick={prevSlide}>Anterior</button>
        <button onClick={nextSlide}>Próximo</button>
      </nav>
    </section>
  );
};

export default Slide;
