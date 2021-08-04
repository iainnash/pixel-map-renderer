import { createContext } from "react";

type RendererDataContextType = {
  canvas: CanvasRenderingContext2D;
  spriteSize: number;
  totalNumber: number;
};

export const RendererDataContext =
  createContext<RendererDataContextType | null>(null);
