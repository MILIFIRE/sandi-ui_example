import '../../../modules/index.mjs';
import { nextTick } from 'vue';
import { getCore } from '../../../utils/index.mjs';
import '../../../enum/index.mjs';
import WebGLRendererWrap from '../../../modules/renderers/WebGLRendererWrap.mjs';
import { EventType } from '../../../enum/event.mjs';

const webglProps = {
  camera: {
    type: Object,
    required: false,
    default: null
  },
  scene: {
    type: Object,
    required: false,
    default: null
  },
  options: {
    type: Object,
    required: false
  },
  width: {
    type: Number,
    required: true,
    default: 1e3
  },
  height: {
    type: Number,
    required: true,
    default: 1e3
  },
  pixelRatio: {
    type: Number,
    required: false,
    default: window.devicePixelRatio
  },
  backgroundColor: {
    type: Number,
    required: false,
    default: 0
  },
  backgroundAlpha: {
    type: Number,
    required: false,
    default: 1
  },
  renderCallback: {
    type: Function,
    required: false
  }
};
const useRender = (parameters) => {
  const core = getCore();
  const instance = new WebGLRendererWrap(parameters);
  core.addNode(instance);
  const { id } = core.getParentAndId();
  instance.init(id, core);
  const setSize = (width, height) => {
    instance.setSize(width, height);
    nextTick(() => {
      core.dispatchEventById(id, { type: EventType.RenderSizeChang, width, height });
    });
  };
  return {
    instance,
    setSize
  };
};

export { useRender, webglProps };
