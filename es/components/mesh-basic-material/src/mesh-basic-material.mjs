import { MeshBasicMaterial } from 'three';
import { getCore } from '../../../utils/index.mjs';
import '../../../enum/index.mjs';
import { EventType } from '../../../enum/event.mjs';

const useBasicMaterial = (props) => {
  const core = getCore();
  const key = props.meshName;
  const warpProps = { ...props };
  delete warpProps.meshName;
  const instance = new MeshBasicMaterial(warpProps);
  instance.needsUpdate = true;
  const { parentId, id } = core.addNode(instance);
  if (parentId) {
    core.dispatchEventById(parentId, { type: EventType.ChangMaterial, material: instance, key: props.meshName });
  }
  return {
    instance
  };
};

export { useBasicMaterial as default };
