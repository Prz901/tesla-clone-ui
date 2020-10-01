import { useMotionValue } from "framer-motion";

import { useContext, useEffect } from "react";
import ModelsContext from "./ModelsContext";

export default function useWrapperScroll() {
  const { wrapperRef } = useContext(ModelsContext);

  const scrollY = useMotionValue(0);
  const scrollProgress = useMotionValue(0);

  useEffect(() => {
    const element = wrapperRef.current;

    if (element) {
      const updateScrollValue = () => {
        const { scrollTop, scrollHeight, offsetHeight } = element;

        const fullScroll = scrollHeight - offsetHeight;

        scrollY.set(scrollTop); //quantidade de pixels que o usuario esta scrollando que é um Numero
        scrollProgress.set(scrollTop / fullScroll); // Progesso que o usuario fez na pagina (0 ou 1 ) (%)
      };

      element.addEventListener("scroll", updateScrollValue);

      return () => element?.removeEventListener("scroll", updateScrollValue);
    }
  }, [scrollY, scrollProgress, wrapperRef]);

  return { scrollY, scrollProgress };
}
