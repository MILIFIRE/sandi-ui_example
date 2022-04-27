import { WebGLRenderer, Clock } from 'three';
import '../../enum/index.mjs';
import { getNow } from '../../utils/index.mjs';
import { EventType } from '../../enum/event.mjs';

class WebGLRendererWrap extends WebGLRenderer {
  constructor(parameters) {
    super(parameters);
    this.callBack = [];
    this.clock = new Clock();
  }
  init(id, core) {
    core.addEventListenerById(id, EventType.Render, (event) => {
      this.setCallBack(event.render);
    });
    core.addEventListenerById(id, EventType.RemoveRender, (event) => {
      this.delCallBack(event.render);
    });
  }
  setScene(currentObjects) {
    this.scene = currentObjects;
  }
  setCamera(currentCamera) {
    this.camera = currentCamera;
  }
  getCamera() {
    return this.camera;
  }
  setCallBack(fn) {
    this.callBack.push(fn);
  }
  delCallBack(fn) {
    this.callBack = this.callBack.filter((item) => item != fn);
  }
  renderScene() {
    const delta = this.clock.getDelta();
    this.callBack.forEach((item) => {
      item(delta, getNow());
    });
    if (this.scene && this.camera) {
      this.render(this.scene, this.camera);
    } else {
      console.warn("\u672A\u68C0\u6D4B\u5230\u573A\u666F\u6216\u8005\u6444\u50CF\u673A");
    }
    requestAnimationFrame(this.renderScene.bind(this));
  }
}

export { WebGLRendererWrap as default };
