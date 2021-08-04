import React, { useEffect, useState } from "react";
import { RendererDataContext } from "./RendererDataContext";

type RendererDataProviderProps = {
  children: React.ReactNode;
  spriteImagePath: string;
  totalNumber: number;
  spriteSize: number;
};

export const RendererDataProvider = ({
  children,
  spriteImagePath,
  totalNumber,
  spriteSize,
}: RendererDataProviderProps) => {
  const [canvas, setCanvas] = useState<CanvasRenderingContext2D | null>(null);
  useEffect(() => {
    if (canvas) {
      return;
    }
    const img = new Image();
    img.src = spriteImagePath;
    img.addEventListener("load", () => {
      const canvas = document.createElement("canvas");
      const size = Math.sqrt(totalNumber) * spriteSize;
      canvas.width = size;
      canvas.height = size;
      canvas.getContext("2d")?.drawImage(img, 0, 0);
      setCanvas(canvas.getContext("2d"));
    });
  }, [canvas]);

  return (
    <RendererDataContext.Provider
      value={
        canvas
          ? {
              canvas,
              spriteSize,
              totalNumber,
            }
          : null
      }
    >
      {children}
    </RendererDataContext.Provider>
  );
};
