import { installComponentWrap } from '../../utils/index.mjs';
import AnimationAction from './src/AnimationAction.mjs';
import './src/animation-action.mjs';

const SDAnimationAction = installComponentWrap("SDAnimationAction", AnimationAction);

export { SDAnimationAction, SDAnimationAction as default };
