import { inject } from 'vue';
import { Vector2, Vector3, Raycaster } from 'three';
import { getCore, getNow, isMesh } from '../../../utils/index.mjs';
import { RENDER_ID } from '../../../constants/index.mjs';
import '../../../modules/index.mjs';
import { PointerLockControls } from '../../../modules/controls/PointerLockControls.mjs';

const mouse = new Vector2();
const usePointerLockControls = (camera, domElement) => {
  const core = getCore();
  let renderId = inject(RENDER_ID);
  let renderNode;
  if (renderId) {
    renderNode = core.getNode(renderId);
  } else {
    console.warn("usePointerLockControls no found any webglrender");
  }
  if (renderNode) {
    if (!camera)
      camera = renderNode.node.getCamera();
    if (!domElement)
      domElement = renderNode.node.domElement;
  } else {
    console.warn("not found webglRender, please check use SDwebglRender");
  }
  let control;
  let remove;
  let moveForward = false;
  let moveBackward = false;
  let moveLeft = false;
  let moveRight = false;
  let canJump = false;
  let prevTime = getNow();
  const velocity = new Vector3();
  const direction = new Vector3();
  let callBack = {};
  let gravity = 9.8;
  let mass = 1;
  let moveScale = 10;
  let movingResistance = 5;
  let characterHeight = 1;
  let junpHeight = 1;
  const execute = (callbackName) => {
    if (callBack[callbackName]) {
      callBack[callbackName]();
    } else {
      console.warn(` not found callBack with ${callbackName}`);
    }
  };
  const setCallBack = (key, fn) => {
    callBack[key] = fn;
  };
  const setCharacter = (options) => {
    gravity = options.gravity || gravity;
    mass = options.mass || mass;
    moveScale = options.moveScale || moveScale;
    movingResistance = options.movingResistance || movingResistance;
    characterHeight = options.characterHeight || characterHeight;
    junpHeight = options.junpHeight || junpHeight;
  };
  if (camera && domElement) {
    const raycaster = new Raycaster();
    control = new PointerLockControls(camera, domElement);
    const { parentId, id } = core.addNode(control);
    control.addEventListener("lock", function() {
      if (callBack.lock) {
        execute("lock");
      }
    });
    control.addEventListener("unlock", function() {
      setTimeout(() => {
        if (callBack.unlock) {
          execute("unlock");
        }
      }, 1100);
    });
    const onKeyDown = function(event) {
      event.preventDefault();
      switch (event.code) {
        case "ArrowUp":
        case "KeyW":
          moveForward = true;
          break;
        case "ArrowLeft":
        case "KeyA":
          moveLeft = true;
          break;
        case "ArrowDown":
        case "KeyS":
          moveBackward = true;
          break;
        case "ArrowRight":
        case "KeyD":
          moveRight = true;
          break;
        case "Space":
          if (canJump === true)
            velocity.y += junpHeight;
          canJump = false;
          break;
      }
    };
    const onKeyUp = function(event) {
      switch (event.code) {
        case "ArrowUp":
        case "KeyW":
          moveForward = false;
          break;
        case "ArrowLeft":
        case "KeyA":
          moveLeft = false;
          break;
        case "ArrowDown":
        case "KeyS":
          moveBackward = false;
          break;
        case "ArrowRight":
        case "KeyD":
          moveRight = false;
          break;
      }
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    if (parentId) {
      const raycaster2 = new Raycaster(new Vector3(), new Vector3(0, -1, 0), 0, characterHeight);
      const renderFN = (_, time) => {
        if (control.isLocked === true) {
          raycaster2.far = characterHeight;
          raycaster2.ray.origin.copy(control.getObject().position);
          const childrens = core.getChildrens(parentId);
          const Meshs = childrens.filter((item) => isMesh(item.node)).map((item) => item.node);
          const intersections = raycaster2.intersectObjects(Meshs, false);
          const onObject = intersections.length > 0;
          const delta = (time - prevTime) / 1e3;
          velocity.x -= velocity.x * movingResistance * delta;
          velocity.z -= velocity.z * movingResistance * delta;
          velocity.y -= gravity * mass * delta;
          direction.z = Number(moveForward) - Number(moveBackward);
          direction.x = Number(moveRight) - Number(moveLeft);
          direction.normalize();
          if (moveForward || moveBackward)
            velocity.z -= direction.z * moveScale * delta;
          if (moveLeft || moveRight)
            velocity.x -= direction.x * moveScale * delta;
          if (onObject === true) {
            velocity.y = Math.max(0, velocity.y);
            canJump = true;
          }
          control.moveRight(-velocity.x * delta);
          control.moveForward(-velocity.z * delta);
          control.getObject().position.y += velocity.y * delta;
          if (control.getObject().position.y < characterHeight) {
            velocity.y = 0;
            control.getObject().position.y = characterHeight;
            canJump = true;
          }
        }
        prevTime = time;
      };
      renderNode == null ? void 0 : renderNode.node.setCallBack(renderFN);
    }
    remove = () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  } else {
    console.log("not found any camere or domelement");
  }
  return { instance: control, setCallBack, remove, setCharacter };
};

export { usePointerLockControls as default };
