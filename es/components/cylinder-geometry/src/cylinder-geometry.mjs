import { getCore } from '../../../utils/index.mjs';
import { CylinderGeometry } from 'three';
import '../../../enum/index.mjs';
import { EventType } from '../../../enum/event.mjs';

const useCylinderGeometry = (radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength) => {
  const core = getCore();
  let node = new CylinderGeometry(radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength);
  const { parentId, id } = core.addNode(node);
  if (parentId) {
    core.dispatchEventById(parentId, { type: EventType.ChangGeometry, geometry: node });
  }
  const replace = (props) => {
    if (parentId) {
      const {
        radiusTop: radiusTop2,
        radiusBottom: radiusBottom2,
        height: height2,
        radialSegments: radialSegments2,
        heightSegments: heightSegments2,
        openEnded: openEnded2,
        thetaStart: thetaStart2,
        thetaLength: thetaLength2
      } = props;
      const newNode = new CylinderGeometry(radiusTop2, radiusBottom2, height2, radialSegments2, heightSegments2, openEnded2, thetaStart2, thetaLength2);
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

export { useCylinderGeometry as default };
