import { installComponentWrap } from '../../utils/index.mjs';
import TransformControls from './src/TransformControls.mjs';
import './src/transform-controls.mjs';

const SDTransformControls = installComponentWrap("SDTransformControls", TransformControls);

export { SDTransformControls, SDTransformControls as default };
