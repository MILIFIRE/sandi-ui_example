import { installComponentWrap } from '../../utils/index.mjs';
import Group from './src/Group.mjs';
import './src/group2.mjs';

const SDGroup = installComponentWrap("SDGroup", Group);

export { SDGroup, SDGroup as default };
