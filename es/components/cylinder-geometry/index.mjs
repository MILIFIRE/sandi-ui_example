import { installComponentWrap } from '../../utils/index.mjs';
import CylinderGeometry from './src/CylinderGeometry.mjs';
import './src/cylinder-geometry.mjs';

const SDCylinderGeometry = installComponentWrap("SDCylinderGeometry", CylinderGeometry);

export { SDCylinderGeometry, SDCylinderGeometry as default };
