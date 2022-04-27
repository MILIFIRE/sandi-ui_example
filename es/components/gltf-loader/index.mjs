import { installComponentWrap } from '../../utils/index.mjs';
import GLTFLoader from './src/GLTFLoader.mjs';
import './src/gltf-loader.mjs';

const SDGLTFLoader = installComponentWrap("SDGLTFLoader", GLTFLoader);

export { SDGLTFLoader, SDGLTFLoader as default };
