import { installComponentWrap } from '../../utils/index.mjs';
import PointerLockControls from './src/PointerLockControls.mjs';
import './src/pointerlock-controls.mjs';

const SDPointerLockControls = installComponentWrap("SDPointerLockControls", PointerLockControls);

export { SDPointerLockControls, SDPointerLockControls as default };
