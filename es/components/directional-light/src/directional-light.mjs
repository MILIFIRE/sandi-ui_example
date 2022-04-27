import { getCore } from '../../../utils/index.mjs';
import { DirectionalLight } from 'three';

const useDsirectionalLight = (color, intensity) => {
  const core = getCore();
  const node = new DirectionalLight(color, intensity);
  node.position.set(1, 1, 1);
  core.addNode(node);
  const { parentId, id } = core.addNode(node);
  if (parentId) {
    const parentNode = core.getNode(parentId);
    parentNode.node.add(node);
  }
  return { instance: node };
};

export { useDsirectionalLight as default };
