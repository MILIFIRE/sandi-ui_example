import { getCore } from '../../../utils/index.mjs';
import { CapsuleGeometry } from 'three';
import '../../../enum/index.mjs';
import { EventType } from '../../../enum/event.mjs';

const useCapsuleGeometry = (radius, length, capSubdivisions, radialSegments) => {
  const core = getCore();
  let node = new CapsuleGeometry(radius, length, capSubdivisions, radialSegments);
  const { parentId, id } = core.addNode(node);
  if (parentId) {
    core.dispatchEventById(parentId, { type: EventType.ChangGeometry, geometry: node });
  }
  const replace = (props) => {
    if (parentId) {
      const { radius: radius2, length: length2, capSubdivisions: capSubdivisions2, radialSegments: radialSegments2 } = props;
      const newNode = new CapsuleGeometry(radius2, length2, capSubdivisions2, radialSegments2);
      core.dispatchEventById(parentId, { type: EventType.ChangGeometry, geometry: newNode });
      core.setNode(id, newNode);
      node.dispose();
      node = newNode;
    }
  };
  const remove = () => {
    node.dispose();
    core.delNode(id);
  };
  const getInstance = () => node;
  return { getInstance, remove, replace };
};

export { useCapsuleGeometry as default };
