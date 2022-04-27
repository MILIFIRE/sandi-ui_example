import { installComponentWrap } from '../../utils/index.mjs';
import OrbitControls from './src/OrbitControls.mjs';
import './src/orbit-controls.mjs';

const SDOrbitControls = installComponentWrap("SDOrbitControls", OrbitControls);

export { SDOrbitControls, SDOrbitControls as default };
