import { getCore } from '../../../utils/index.mjs';
import { ConeGeometry } from 'three';
import '../../../enum/index.mjs';
import { EventType } from '../../../enum/event.mjs';

const useConeGeometry = (radius, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength) => {
  const core = getCore();
  let node = new ConeGeometry(radius, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength);
  const { parentId, id } = core.addNode(node);
  if (parentId) {
    core.dispatchEventById(parentId, { type: EventType.ChangGeometry, geometry: node });
  }
  const replace = (props) => {
    if (parentId) {
      const {
        height: height2,
        radialSegments: radialSegments2,
        heightSegments: heightSegments2,
        openEnded: openEnded2,
        thetaStart: thetaStart2,
        thetaLength: thetaLength2
      } = props;
      const newNode = new ConeGeometry(height2, radialSegments2, heightSegments2, openEnded2, thetaStart2, thetaLength2);
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

export { useConeGeometry as default };
