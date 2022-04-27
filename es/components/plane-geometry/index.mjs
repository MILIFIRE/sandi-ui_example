import { installComponentWrap } from '../../utils/index.mjs';
import PlaneGeometry from './src/PlaneGeometry.mjs';
import './src/plane-geometry.mjs';

const SDPlaneGeometry = installComponentWrap("SDPlaneGeometry", PlaneGeometry);

export { SDPlaneGeometry, SDPlaneGeometry as default };
