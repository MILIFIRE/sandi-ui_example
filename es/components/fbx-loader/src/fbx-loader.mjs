import { getCore } from '../../../utils/index.mjs';
import '../../../modules/index.mjs';
import '../../../enum/index.mjs';
import { EventType } from '../../../enum/event.mjs';
import { FBXLoader } from '../../../modules/loaders/FBXLoader.mjs';

const useFBXLoader = (url) => {
  const core = getCore();
  let materialMap = /* @__PURE__ */ new Map();
  let meshMap = /* @__PURE__ */ new Map();
  let object = null;
  const { parentId, id } = core.addNode({ isGLTF: true, isload: false });
  const parentNode = core.getParent();
  const setMaterial = (objects, material, key) => {
    const mesh = objects.find((item) => {
      if (item.type == "SkinnedMesh" && item.name == key)
        return item;
    });
    if (mesh) {
      mesh.material = material;
    }
  };
  const findBone = (bones, key) => {
    let steak = [...bones];
    while (steak.length != 0) {
      const bone = steak.pop();
      if ((bone == null ? void 0 : bone.name) == key) {
        return bone;
      }
      if (bone == null ? void 0 : bone.children) {
        bone.children.forEach((item) => {
          if (item.type === "Bone") {
            steak.push(item);
          }
        });
      }
    }
    return null;
  };
  const setMesh = (bones, mesh, key) => {
    let _bone = findBone(bones, key);
    _bone == null ? void 0 : _bone.add(mesh);
  };
  const removeMesh = (bones, mesh, key) => {
    let _bone = findBone(bones, key);
    _bone == null ? void 0 : _bone.remove(mesh);
  };
  core.addEventListenerById(id, EventType.ChangMaterial, (event) => {
    const { material, key } = event;
    if (key && material) {
      materialMap.set(key, material);
      if (object) {
        setMaterial(object.children, material, key);
      }
    }
  });
  core.addEventListenerById(id, EventType.ChangMesh, (event) => {
    const { mesh, key } = event;
    if (key && mesh) {
      meshMap.set(key, mesh);
      if (object) {
        setMesh(object.children.filter((item) => item.type == "Bone"), mesh, key);
      }
    }
  });
  const instance = new FBXLoader();
  instance.load(url, (object3d) => {
    if (parentNode) {
      parentNode.node.add(object3d);
      core.dispatchEventById(id, { type: EventType.AnimationsReady, payload: { object3d, animations: object3d.animations } });
      core.setNode(id, { isFBX: true, object3d, isload: true });
      if (materialMap.size !== 0) {
        materialMap.forEach((material, key) => {
          setMaterial(object3d.children, material, key);
        });
      }
    }
  });
  return {
    instance
  };
};

export { useFBXLoader as default };
