import { installComponentWrap } from '../../utils/index.mjs';
import TextureLoader from './src/TextureLoader.mjs';
export { useTexture } from './src/texture.mjs';

const SDTextureLoader = installComponentWrap("SDTextureLoader", TextureLoader);

export { SDTextureLoader, SDTextureLoader as default };
