import { installComponentWrap } from '../../utils/index.mjs';
import Mesh from './src/Mesh.mjs';
import './src/mesh2.mjs';

const SDMesh = installComponentWrap("SDMesh", Mesh);

export { SDMesh, SDMesh as default };
