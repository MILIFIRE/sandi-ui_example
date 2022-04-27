import { getCore } from '../../../utils/index.mjs';
import { PlaneGeometry } from 'three';
import '../../../enum/index.mjs';
import { EventType } from '../../../enum/event.mjs';

const usePlaneGeometry = (width, height, depth, widthSegments) => {
  const core = getCore();
  let node = new PlaneGeometry(width, height, depth, widthSegments);
  const { parentId, id } = core.addNode(node);
  if (parentId) {
    core.dispatchEventById(parentId, { type: EventType.ChangGeometry, geometry: node });
  }
  const replace = (props) => {
    if (parentId) {
      const { width: width2, height: height2, depth: depth2, widthSegments: widthSegments2 } = props;
      const newNode = new PlaneGeometry(width2, height2, depth2, widthSegments2);
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

export { usePlaneGeometry as default };
