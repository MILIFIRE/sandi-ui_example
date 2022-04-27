import { PerspectiveCamera } from 'three';
import { getCore } from '../../../utils/index.mjs';
import { inject } from 'vue';
import '../../../enum/index.mjs';
import { RENDER_ID } from '../../../constants/index.mjs';
import { EventType } from '../../../enum/event.mjs';

const usePerspectiveCamera = (fov, aspect, near, far) => {
  const core = getCore();
  let instance = new PerspectiveCamera(fov, aspect, near, far);
  const renderId = inject(RENDER_ID);
  if (typeof renderId == "number") {
    const parentNode = core.getParent();
    if (parentNode && parentNode.node.isObject3D) {
      parentNode.node.add(instance);
    }
    core.addNode(instance);
    const renderNode = core.getNode(renderId);
    renderNode.node.setCamera(instance);
    const domElement = renderNode.node.domElement;
    instance.aspect = aspect || domElement.width / domElement.height;
    instance.updateProjectionMatrix();
    core.addEventListenerById(renderId, EventType.RenderSizeChang, (event) => {
      const { width, height } = event;
      instance.aspect = aspect || width / height;
      instance.updateProjectionMatrix();
    });
  }
  return {
    instance
  };
};

export { usePerspectiveCamera as default };
