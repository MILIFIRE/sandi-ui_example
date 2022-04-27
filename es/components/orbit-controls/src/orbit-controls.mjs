import '../../../modules/index.mjs';
import { inject } from 'vue';
import { getCore } from '../../../utils/index.mjs';
import { RENDER_ID } from '../../../constants/index.mjs';
import { OrbitControls } from '../../../modules/controls/OrbitControls.mjs';

const useOrbitControls = (camera, domElement) => {
  const core = getCore();
  if (!camera && !domElement) {
    const renderId = inject(RENDER_ID);
    if (renderId) {
      const renderNode = core.getNode(renderId);
      camera = renderNode.node.getCamera();
      domElement = renderNode.node.domElement;
    }
  }
  if (camera && domElement) {
    const control = new OrbitControls(camera, domElement);
    const { parentId, id } = core.addNode(control);
    control.minDistance = 0;
    control.maxDistance = 2e3;
    return { instance: control };
  } else {
    console.log("\u672A\u627E\u5230\u6444\u50CF\u673A \u6216  dom \u5143\u7D20");
    return { instance: void 0 };
  }
};

export { useOrbitControls as default };
