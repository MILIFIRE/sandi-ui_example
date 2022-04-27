import { Scene } from 'three';
import { getCore } from '../../../utils/index.mjs';
import '../../../enum/index.mjs';
import { EventType } from '../../../enum/event.mjs';

const useScenes = () => {
  const core = getCore();
  const instance = new Scene();
  const { parentId, id } = core.addNode(instance);
  if (parentId) {
    const parentNode = core.getNode(parentId);
    parentNode.node.setScene(instance);
  }
  core.addEventListenerById(id, EventType.AddObject3d, (Event) => {
    const { object3d } = Event;
    instance.add(object3d);
  });
  return {
    instance
  };
};

export { useScenes as default };
