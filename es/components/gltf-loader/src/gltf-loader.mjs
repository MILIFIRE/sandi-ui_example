import { getCore } from '../../../utils/index.mjs';
import '../../../modules/index.mjs';
import '../../../enum/index.mjs';
import { GLTFLoader } from '../../../modules/loaders/GLTFLoader.mjs';
import { EventType } from '../../../enum/event.mjs';

const useGLTFloader = (url) => {
  const core = getCore();
  const instance = new GLTFLoader();
  const { parentId, id } = core.addNode({ isGLTF: true, isload: false });
  const parentNode = core.getParent();
  instance.load(url, (gltf) => {
    const { scene } = gltf;
    if (parentNode) {
      parentNode.node.add(scene);
      core.dispatchEventById(id, { type: EventType.AnimationsReady, payload: { object3d: gltf.scene, animations: gltf.animations } });
      core.setNode(id, { isGLTF: true, gltf, isload: true });
    }
  });
  return {
    instance
  };
};

export { useGLTFloader as default };
