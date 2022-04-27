import { installComponentWrap } from '../../utils/index.mjs';
import BoxGeometry from './src/BoxGeometry.mjs';
import './src/box-geometry.mjs';

const SDBoxGeometry = installComponentWrap("SDBoxGeometry", BoxGeometry);

export { SDBoxGeometry, SDBoxGeometry as default };
