import { useScroll, useTransform } from "framer-motion";

export function useScrollFrame(frameCount: number) {
  const { scrollYProgress } = useScroll();
  
  // The frame sequence plays from scroll progress 0.0 to 0.5
  // After 0.5, it stays on the final frame (frames are 0 to frameCount - 1)
  return useTransform(scrollYProgress, [0, 0.5], [0, frameCount - 1]);
}
