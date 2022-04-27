import '../../../enum/index.mjs';
import { getCore } from '../../../utils/index.mjs';
import { EventType } from '../../../enum/event.mjs';

const useAnimationAction = (mixer, clip, props) => {
  const core = getCore();
  let instance;
  let animations = [];
  const { parentId, id } = core.getParentAndId();
  const setAnimationClip = (id2) => {
    let clip2;
    switch (typeof id2) {
      case "string":
        clip2 = animations.find((item) => item.name == id2);
        break;
      case "number":
        clip2 = animations[id2];
        break;
      default:
        clip2 = animations[0];
    }
    if (mixer && clip2) {
      if (instance) {
        instance.stop();
      }
      instance = mixer.clipAction(clip2);
      instance.play();
    } else {
      console.log("\u52A8\u753B\u4E0D\u5B58\u5728");
    }
  };
  const setWeight = (weight) => {
    instance.weight = weight;
  };
  const setTimeScale = (timeScale) => {
    instance.timeScale = timeScale;
  };
  const setLoop = (loopMode, loop) => {
    instance.setLoop(loopMode, loop);
  };
  const setStatue = (statue) => {
    switch (statue) {
      case "play":
        instance.play();
        break;
      case "stop":
        instance.stop();
        break;
      case "reset":
        instance.reset();
        break;
      default:
        instance.play();
    }
  };
  const setProps = (weight, timeScale, loopMode, loop, statue) => {
    setWeight(weight);
    setTimeScale(timeScale);
    setLoop(loopMode, loop);
    setStatue(statue);
  };
  const getInstance = () => {
    return instance;
  };
  if (parentId) {
    core.addEventListenerById(parentId, EventType.AnimationMixerLoaded, (event) => {
      const { mixer: _mixer, animations: _animations } = event;
      mixer = _mixer;
      animations = _animations;
      setAnimationClip(props.id);
      const { weight, timeScale, loopMode, loop, statue } = props;
      setProps(weight, timeScale, loopMode, loop, statue);
    });
  }
  return { getInstance, setAnimationClip, setWeight, setProps };
};

export { useAnimationAction as default };
