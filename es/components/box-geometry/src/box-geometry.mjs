import { getCore } from '../../../utils/index.mjs';
import { BoxGeometry } from 'three';
import '../../../enum/index.mjs';
import { EventType } from '../../../enum/event.mjs';

const useBoxGeometry = (width, height, depth, widthSegments, heightSegments, depthSegments) => {
  const core = getCore();
  let node = new BoxGeometry(width, height, depth, widthSegments, heightSegments, depthSegments);
  const { parentId, id } = core.addNode(node);
  if (parentId) {
    core.dispatchEventById(parentId, { type: EventType.ChangGeometry, geometry: node });
  }
  const replace = (props) => {
    if (parentId) {
      const { width: width2, height: height2, depth: depth2, widthSegments: widthSegments2, heightSegments: heightSegments2, depthSegments: depthSegments2 } = props;
      const newNode = new BoxGeometry(width2, height2, depth2, widthSegments2, heightSegments2, depthSegments2);
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

export { useBoxGeometry as default };
