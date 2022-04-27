import { installComponentWrap } from '../../utils/index.mjs';
import FBXLoader from './src/FBXLoader.mjs';
import './src/fbx-loader.mjs';

const SDFBXLoader = installComponentWrap("SDFBXLoader", FBXLoader);

export { SDFBXLoader, SDFBXLoader as default };
