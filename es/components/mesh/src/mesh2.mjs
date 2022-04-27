import { getCore } from '../../../utils/index.mjs';
import { BoxGeometry, MeshBasicMaterial, Mesh } from 'three';
import '../../../enum/index.mjs';
import { EventType } from '../../../enum/event.mjs';

const useMesh = (geometry, material, geometryType, geometryParam = {}) => {
  const core = getCore();
  let updateCallback;
  if (!geometry && !geometryType) {
    geometry = new BoxGeometry(1, 1, 1);
  }
  if (!material) {
    material = new MeshBasicMaterial({ color: 65280 });
  }
  let instance = new Mesh(geometry, material);
  const { parentId, id } = core.addNode(instance);
  const changGeometry = (geometry2) => {
    if (parentId) {
      const { node: parent } = core.getNode(parentId);
      const { material: material2, children, position: p, rotation: r, scale: s } = instance;
      parent == null ? void 0 : parent.remove(instance);
      instance = new Mesh(geometry2, material2);
      instance.position.set(p.x, p.y, p.z);
      instance.rotation.set(r.x, r.y, r.z);
      instance.scale.set(s.x, s.y, s.z);
      parent == null ? void 0 : parent.add(instance);
      children.forEach((object3D) => {
        instance.add(object3D);
      });
      core.setNode(id, instance);
    }
  };
  const ChangMaterial = (material2) => {
    instance.material = material2;
  };
  core.addEventListenerById(id, EventType.ChangMaterial, (Event) => {
    const { material: material2 } = Event;
    ChangMaterial(material2);
  });
  core.addEventListenerById(id, EventType.ChangGeometry, (Event) => {
    const { geometry: geometry2 } = Event;
    changGeometry(geometry2);
    updateCallback(instance);
  });
  core.addEventListenerById(id, EventType.AddObject3d, (Event) => {
    const { object3d } = Event;
    instance.add(object3d);
  });
  if (parentId) {
    core.dispatchEventById(parentId, { type: EventType.AddObject3d, object3d: instance });
  }
  const getInstance = () => {
    return instance;
  };
  const update = (fn) => {
    updateCallback = fn;
  };
  return { getInstance, update };
};

export { useMesh as default };
