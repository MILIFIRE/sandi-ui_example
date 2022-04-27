import { installComponentWrap } from '../../utils/index.mjs';
import MeshBasicMaterial from './src/MeshBasicMaterial.mjs';
export { default } from './src/MeshBasicMaterial.mjs';
import './src/mesh-basic-material.mjs';

const SDMeshBasicMaterial = installComponentWrap("SDMeshBasicMaterial", MeshBasicMaterial);

export { SDMeshBasicMaterial };
