import { installComponentWrap } from '../../utils/index.mjs';
import Scene from './src/Scene2.mjs';
import './src/scene.mjs';

const SDScene = installComponentWrap("SDScene", Scene);

export { SDScene, SDScene as default };
