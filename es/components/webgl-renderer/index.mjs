import { installComponentWrap } from '../../utils/index.mjs';
import WebglRenderer from './src/WebglRenderer.mjs';
export { useRender, webglProps } from './src/webgl-renderer.mjs';

const SDWebglRenderer = installComponentWrap("SDWebglRenderer", WebglRenderer);

export { SDWebglRenderer, SDWebglRenderer as default };
