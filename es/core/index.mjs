import { getCurrentInstance, provide, inject } from 'vue';
import { EventDispatcher, WebGLRenderer, Scene } from 'three';
import { RENDER_ID, SCENE_ID, UID } from '../constants/index.mjs';

class v3dCore extends EventDispatcher {
  constructor() {
    super(...arguments);
    this.map = /* @__PURE__ */ new Map();
  }
  addNode(node) {
    const ComponentInstance = getCurrentInstance();
    const id = ComponentInstance.uid;
    if (node instanceof WebGLRenderer) {
      provide(RENDER_ID, id);
    }
    if (node instanceof Scene && node.isScene) {
      provide(SCENE_ID, id);
    }
    provide(UID, id);
    const parentId = inject(UID);
    if (parentId) {
      const node2 = this.map.get(parentId);
      if (node2) {
        node2.children ? node2.children.push(id) : node2.children = [id];
      }
    }
    this.map.set(id, { id, parent: parentId, children: void 0, node });
    return { parentId, id };
  }
  addNodeWithId(node, parentId, id) {
    if (parentId) {
      const node2 = this.map.get(parentId);
      if (node2) {
        node2.children ? node2.children.push(id) : node2.children = [id];
      }
    }
    this.map.set(id, { id, parent: parentId, children: void 0, node });
    return { parentId, id };
  }
  setNode(id, newNode) {
    const { parent, children, node: oldNode } = this.map.get(id);
    this.map.set(id, { id, parent, children, node: newNode });
  }
  delNode(id) {
    const node = this.map.get(id);
    if (node == null ? void 0 : node.parent) {
      const parent = this.map.get(node.parent);
      if (parent == null ? void 0 : parent.children) {
        const children = parent.children.filter((childrenId) => childrenId != id);
        if (children.length > 0) {
          parent.children = children;
        } else {
          parent.children = void 0;
        }
      }
    }
    this.map.delete(id);
  }
  getParentAndId() {
    const ComponentInstance = getCurrentInstance();
    const id = ComponentInstance.uid;
    return {
      parentId: inject(UID),
      id
    };
  }
  getNode(id) {
    return this.map.get(id);
  }
  getChildrens(parentId) {
    const parentNode = this.map.get(parentId);
    if (parentNode) {
      if (parentNode.children) {
        return parentNode.children.map((childrenItem) => {
          const childrenNode = this.map.get(childrenItem);
          if (childrenNode && childrenNode.children) {
            return this.getChildrens(childrenNode.id).concat(childrenNode);
          } else {
            return [childrenNode];
          }
        }).flat();
      } else {
        return [parentNode];
      }
    } else {
      return [];
    }
  }
  getParent() {
    const parentId = inject(UID);
    if (parentId) {
      return this.map.get(parentId);
    } else {
      return void 0;
    }
  }
  addEventListenerById(id, type, fn) {
    this.addEventListener(`${type}-${id}`, fn);
  }
  dispatchEventById(id, event) {
    const { type: oldType } = event;
    this.dispatchEvent({ ...event, type: `${oldType}-${id}` });
  }
}

export { v3dCore as default };
