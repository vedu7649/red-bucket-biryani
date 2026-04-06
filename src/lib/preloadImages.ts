export function preloadImages(frameCount: number, onInitialLoad: () => void): HTMLImageElement[] {
  if (typeof window === "undefined") return [];
  
  const images: HTMLImageElement[] = new Array(frameCount).fill(null);
  const INITIAL_FRAMES = Math.min(20, frameCount);
  let initialLoadedCount = 0;

  // Load first batch
  for (let i = 1; i <= INITIAL_FRAMES; i++) {
    const img = new Image();
    const frameNumber = i.toString().padStart(4, "0");
    img.src = `/frames/frame_${frameNumber}.webp`;
    
    img.onload = () => {
      initialLoadedCount++;
      if (initialLoadedCount === INITIAL_FRAMES) {
        onInitialLoad(); // Unlock UI
        
        // Background load remaining frames
        for (let j = INITIAL_FRAMES + 1; j <= frameCount; j++) {
          const nextImg = new Image();
          const nextFrame = j.toString().padStart(4, "0");
          nextImg.src = `/frames/frame_${nextFrame}.webp`;
          images[j - 1] = nextImg;
        }
      }
    };
    
    // Fallback error handler
    img.onerror = () => {
       initialLoadedCount++;
       if (initialLoadedCount === INITIAL_FRAMES) onInitialLoad();
    };

    images[i - 1] = img;
  }
  
  return images;
}
