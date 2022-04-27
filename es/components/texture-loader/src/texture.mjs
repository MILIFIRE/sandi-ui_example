import { getCore } from '../../../utils/index.mjs';
import { TextureLoader, Material } from 'three';

const useTexture = () => {
  const core = getCore();
  const instance = new TextureLoader();
  const { parentId, id } = core.addNode(instance);
  const setTexture = (texture, texureType) => {
    if (parentId) {
      const parentNode = core.getNode(parentId);
      const node = parentNode.node;
      if (node instanceof Material) {
        parentNode.node[texureType] = texture;
      } else {
        console.warn(`parent node dont have ${texureType}`);
      }
    }
  };
  return {
    instance,
    setTexture,
    loadAsync: instance.loadAsync.bind(instance)
  };
};
var texture = { useTexture };

export { texture as default, useTexture };
