import { installComponentWrap } from '../../utils/index.mjs';
import DirectionalLight from './src/DirectionalLight.mjs';
import './src/directional-light.mjs';

const SDDirectionalLight = installComponentWrap("SDDirectionalLight", DirectionalLight);

export { SDDirectionalLight, SDDirectionalLight as default };
