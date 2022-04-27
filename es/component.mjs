import './components/index.mjs';
import { SDCylinderGeometry } from './components/cylinder-geometry/index.mjs';
import { SDConeGeometry } from './components/cone-geometry/index.mjs';
import { SDCapsuleGeometry } from './components/capsule-geometry/index.mjs';
import { SDGroup } from './components/group/index.mjs';
import { SDAnimationAction } from './components/animation-action/index.mjs';
import { SDAnimationMixer } from './components/animation-aixer/index.mjs';
import { SDGLTFLoader } from './components/gltf-loader/index.mjs';
import { SDFBXLoader } from './components/fbx-loader/index.mjs';
import { SDMeshBasicMaterial } from './components/mesh-basic-material/index.mjs';
import { SDTextureLoader } from './components/texture-loader/index.mjs';
import { SDDirectionalLight } from './components/directional-light/index.mjs';
import { SDMesh } from './components/mesh/index.mjs';
import { SDPerspectiveCamera } from './components/perspective-camera/index.mjs';
import { SDScene } from './components/scene/index.mjs';
import { SDWebglRenderer } from './components/webgl-renderer/index.mjs';
import { SDOrbitControls } from './components/orbit-controls/index.mjs';
import { SDBoxGeometry } from './components/box-geometry/index.mjs';
import { SDPlaneGeometry } from './components/plane-geometry/index.mjs';
import { SDTransformControls } from './components/transform-controls/index.mjs';
import { SDPointerLockControls } from './components/pointerlock-controls/index.mjs';

var components = [
  SDCylinderGeometry,
  SDConeGeometry,
  SDCapsuleGeometry,
  SDGroup,
  SDAnimationAction,
  SDAnimationMixer,
  SDGLTFLoader,
  SDFBXLoader,
  SDMeshBasicMaterial,
  SDTextureLoader,
  SDDirectionalLight,
  SDMesh,
  SDPerspectiveCamera,
  SDScene,
  SDWebglRenderer,
  SDOrbitControls,
  SDBoxGeometry,
  SDPlaneGeometry,
  SDTransformControls,
  SDPointerLockControls
];

export { components as default };
