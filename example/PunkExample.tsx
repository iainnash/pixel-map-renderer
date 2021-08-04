import { RendererDataProvider } from "../src/RendererDataProvider";
import { RenderSprite } from "../src/RenderSprite";
// @ts-ignore
import punks from './images/punks.png';

export const PunkExample = () => {
  const idsToRender = [10, 1000, 9998, 8010, 0, 1020];

  return (
    <RendererDataProvider
      spriteImagePath={punks}
      totalNumber={10000}
      spriteSize={24}
    >
      {idsToRender.map((id) => (
        <div className="punk">
          <h3>#{id}</h3>
          <RenderSprite id={id} size="240px" />
        </div>
      ))}
    </RendererDataProvider>
  );
};
