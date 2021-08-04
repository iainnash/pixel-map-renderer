import "../src/RendererDataProvider";
import { RendererDataProvider } from "../src/RendererDataProvider";
import {RenderSprite} from '../src/RenderSprite';

export const PunkExample = () => {
  const idsToRender = [10, 1000, 3040, 8010];

  return (
    <RendererDataProvider spriteImagePath="./images/punks.png" totalNumber={10000} spriteSize={24}>
      {idsToRender.map((id) => (
        <RenderSprite id={id} size="240px" />
      ))}
    </RendererDataProvider>
  )
}