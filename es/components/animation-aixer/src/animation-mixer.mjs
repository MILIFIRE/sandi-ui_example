import { inject } from 'vue';
import { AnimationMixer } from 'three';
import '../../../enum/index.mjs';
import { getCore } from '../../../utils/index.mjs';
import { RENDER_ID } from '../../../constants/index.mjs';
import { EventType } from '../../../enum/event.mjs';

const useAnimationMixer = () => {
  const core = getCore();
  let instance;
  let renderBcak;
  const { parentId, id } = core.addNode({});
  const renderId = inject(RENDER_ID);
  const getInstance = () => {
    return instance;
  };
  const removeRender = () => {
    if (renderId && renderBcak) {
      core.dispatchEventById(renderId, { type: EventType.RemoveRender, render: renderBcak });
    }
  };
  if (parentId) {
    core.addEventListenerById(parentId, EventType.AnimationsReady, (event) => {
      const { object3d, animations } = event.payload;
      instance = new AnimationMixer(object3d);
      renderBcak = (delta) => {
        instance.update(delta);
      };
      if (renderId) {
        core.dispatchEventById(renderId, { type: EventType.Render, render: renderBcak });
      }
      core.dispatchEventById(id, { type: EventType.AnimationMixerLoaded, mixer: instance, animations });
    });
  }
  return {
    getInstance,
    removeRender
  };
};

export { useAnimationMixer as default };
