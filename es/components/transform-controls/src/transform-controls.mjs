import { inject } from 'vue';
import { Vector2, Raycaster } from 'three';
import { getCore, isMesh, isOrbit } from '../../../utils/index.mjs';
import { RENDER_ID } from '../../../constants/index.mjs';
import '../../../modules/index.mjs';
import '../../../enum/index.mjs';
import { EventType } from '../../../enum/event.mjs';
import { TransformControls } from '../../../modules/controls/TransformControls.mjs';

const mouse = new Vector2();
const useTransformControls = (camera, domElement) => {
  const core = getCore();
  let renderId;
  let windowSize;
  if (!camera && !domElement) {
    renderId = inject(RENDER_ID);
    if (renderId) {
      core.addEventListenerById(renderId, EventType.RenderSizeChang, (event) => {
        const { width, height } = event;
        windowSize = { width, height };
      });
      const renderNode = core.getNode(renderId);
      camera = renderNode.node.getCamera();
      domElement = renderNode.node.domElement;
    }
  }
  if (camera && domElement) {
    let control;
    control = new TransformControls(camera, domElement);
    const { parentId, id } = core.addNode(control);
    if (parentId) {
      const parentNode = core.getNode(parentId);
      parentNode.node.add(control);
      const raycaster = new Raycaster();
      const onClick = (event) => {
        if (windowSize) {
          event.preventDefault();
          mouse.x = event.offsetX / windowSize.width * 2 - 1;
          mouse.y = -(event.offsetY / windowSize.height) * 2 + 1;
          raycaster.setFromCamera(mouse, camera);
          const childrens = core.getChildrens(parentId);
          const Meshs = childrens.filter((item) => isMesh(item.node)).map((item) => item.node);
          const intersections = raycaster.intersectObjects(Meshs, true);
          console.log("Meshs:", Meshs);
          console.log("intersections:", intersections);
          if (intersections.length > 0) {
            const findeObject = intersections[0].object;
            control.attach(findeObject);
          } else {
            control.detach();
          }
        } else {
          console.warn("unknow window size");
        }
      };
      domElement.addEventListener("click", onClick);
    }
    control.addEventListener("dragging-changed", (event) => {
      if (renderId) {
        const renderNode = core.getNode(renderId);
        if (renderNode.children) {
          const childrenNode = renderNode.children.map((item) => core.getNode(item));
          const orbit = childrenNode.find((item) => isOrbit(item.node));
          if (orbit) {
            orbit.node.enabled = !event.value;
          }
        }
      }
    });
    window.addEventListener("keydown", (event) => {
      console.log("domElement:", domElement);
      switch (event.code) {
        case "KeyQ":
          control.setSpace(control.space === "local" ? "world" : "local");
          break;
        case "KeyW":
          control.setMode("translate");
          break;
        case "KeyE":
          control.setMode("rotate");
          break;
        case "KeyR":
          control.setMode("scale");
          break;
      }
    }, false);
    return { instance: control };
  } else {
    console.log("\u672A\u627E\u5230\u6444\u50CF\u673A \u6216  dom \u5143\u7D20");
    return { instance: void 0 };
  }
};

export { useTransformControls as default };
