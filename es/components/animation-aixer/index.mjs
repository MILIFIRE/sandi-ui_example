import { installComponentWrap } from '../../utils/index.mjs';
import AnimationMixer from './src/AnimationMixer.mjs';
import './src/animation-mixer.mjs';

const SDAnimationMixer = installComponentWrap("SDAnimationMixer", AnimationMixer);

export { SDAnimationMixer, SDAnimationMixer as default };
