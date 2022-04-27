import { getCore } from '../../../utils/index.mjs';
import { Group } from 'three';
import '../../../enum/index.mjs';
import { EventType } from '../../../enum/event.mjs';

const useGroup = () => {
  const core = getCore();
  let instance = new Group();
  const { parentId, id } = core.addNode(instance);
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
  return { getInstance };
};

export { useGroup as default };
