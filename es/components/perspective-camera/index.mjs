import { installComponentWrap } from '../../utils/index.mjs';
import PerspectiveCamera from './src/perspective-camera.mjs';
import './src/perspectiveCamera.mjs';

const SDPerspectiveCamera = installComponentWrap("SDPerspectiveCamera", PerspectiveCamera);

export { SDPerspectiveCamera, SDPerspectiveCamera as default };
