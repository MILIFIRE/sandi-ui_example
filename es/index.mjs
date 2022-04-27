import installerComponents from './defaults.mjs';
import components from './component.mjs';
import v3dCore from './core/index.mjs';
import './components/index.mjs';
export { SDAnimationAction } from './components/animation-action/index.mjs';
export { SDAnimationMixer } from './components/animation-aixer/index.mjs';
export { SDBoxGeometry } from './components/box-geometry/index.mjs';
export { SDPlaneGeometry } from './components/plane-geometry/index.mjs';
export { SDCapsuleGeometry } from './components/capsule-geometry/index.mjs';
export { SDConeGeometry } from './components/cone-geometry/index.mjs';
export { SDCylinderGeometry } from './components/cylinder-geometry/index.mjs';
export { SDDirectionalLight } from './components/directional-light/index.mjs';
export { SDGLTFLoader } from './components/gltf-loader/index.mjs';
export { SDFBXLoader } from './components/fbx-loader/index.mjs';
export { SDMesh } from './components/mesh/index.mjs';
export { SDGroup } from './components/group/index.mjs';
export { SDMeshBasicMaterial } from './components/mesh-basic-material/index.mjs';
export { SDOrbitControls } from './components/orbit-controls/index.mjs';
export { SDPerspectiveCamera } from './components/perspective-camera/index.mjs';
export { SDScene } from './components/scene/index.mjs';
export { useTexture } from './components/texture-loader/src/texture.mjs';
export { SDTextureLoader } from './components/texture-loader/index.mjs';
export { useRender, webglProps } from './components/webgl-renderer/src/webgl-renderer.mjs';
export { SDWebglRenderer } from './components/webgl-renderer/index.mjs';
export { SDTransformControls } from './components/transform-controls/index.mjs';
export { SDPointerLockControls } from './components/pointerlock-controls/index.mjs';

const installer = (app) => {
  const v3dCoreInstance = new v3dCore();
  app.config.globalProperties.$getv3dCore = () => v3dCoreInstance;
  installerComponents(components).install(app);
};

export { installer as default };
