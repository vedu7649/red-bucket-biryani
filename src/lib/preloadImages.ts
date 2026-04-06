export function preloadImages(frameCount: number): HTMLImageElement[] {
  if (typeof window === "undefined") return []; // Ensure it only runs on the client
  
  const images: HTMLImageElement[] = [];
  for (let i = 1; i <= frameCount; i++) {
    const img = new Image();
    const frameNumber = i.toString().padStart(3, "0");
    img.src = `/frames/frame_0${frameNumber}.png`;
    images.push(img);
  }
  return images;
}
