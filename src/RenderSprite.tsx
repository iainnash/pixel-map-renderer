import { RendererDataContext } from "./RendererDataContext";
import { useRef, useContext, useEffect } from "react";

export const RenderSprite = ({
  size = "100%",
  id,
  className,
}: {
  size?: string;
  className?: string;
  id: number;
}) => {
  const imageDataContext = useContext(RendererDataContext);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current && imageDataContext) {
      const canvasCtx = canvasRef.current.getContext("2d");
      if (!canvasCtx) {
        return;
      }
      const sideLength = Math.sqrt(imageDataContext.totalNumber);
      const x = (id % sideLength) * imageDataContext.spriteSize;
      const y = Math.floor(id / sideLength) * imageDataContext.spriteSize;
      console.log({id, sideLength, x, y})
      canvasCtx.putImageData(
        imageDataContext.canvas.getImageData(
          x,
          y,
          imageDataContext.spriteSize,
          imageDataContext.spriteSize
        ),
        0,
        0
      );
    }
  }, [canvasRef, imageDataContext]);
  return (
    <canvas
      style={{
        width: size,
        height: size,
        imageRendering: 'crisp-edges',
      }}
      className={className}
      ref={canvasRef}
      width={24}
      height={24}
    ></canvas>
  );
};
