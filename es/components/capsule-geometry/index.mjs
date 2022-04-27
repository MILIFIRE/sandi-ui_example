import { installComponentWrap } from '../../utils/index.mjs';
import CapsuleGeometry from './src/CapsuleGeometry.mjs';
import './src/capsule-geometry.mjs';

const SDCapsuleGeometry = installComponentWrap("SDCapsuleGeometry", CapsuleGeometry);

export { SDCapsuleGeometry, SDCapsuleGeometry as default };
