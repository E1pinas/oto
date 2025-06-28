// eslint-disable-next-line no-unused-vars
import { animate, delay, motion, useInView } from "framer-motion";
import { useRef } from "react";
const variante = {
  inicial: {
    opacity: 0,
    scale: 0,
  },
  animate: ({ index }) => ({
    opacity: 1,
    scale: 1,
    transition: { 
      // duration: 1,
       delay: index * 0.1 },
  }),
};
export const Gif = ({ gif, index }) => {
  const ref = useRef(null);
  const estaVisto = useInView(ref, {
    once: true,
  });
  return (
    <motion.img
      className=" w-full sm:w-64 md:w-64 lg:w-64 h-64 object-cover rounded-lg"
      src={gif.images.original.url}
      alt={gif.title}
      ref={ref}
      drag
      custom={{ index }}
      whileHover={{
        scale: 1.1,
      }}
      initial="inicial"
      animate={estaVisto ? "animate" : ""}
      variants={variante}
    />
  );
};
