import { installComponentWrap } from '../../utils/index.mjs';
import ConeGeometry from './src/ConeGeometry.mjs';
import './src/cone-geometry.mjs';

const SDConeGeometry = installComponentWrap("SDConeGeometry", ConeGeometry);

export { SDConeGeometry, SDConeGeometry as default };
