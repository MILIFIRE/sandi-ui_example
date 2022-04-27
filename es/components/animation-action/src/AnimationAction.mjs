import { defineComponent, watch, onMounted, renderSlot } from 'vue';
import '../../../enum/index.mjs';
import useAnimationAction from './animation-action.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { LoopMode } from '../../../enum/animation.mjs';

const _sfc_main = defineComponent({
  props: {
    id: { type: [Number, String], default: 0 },
    weight: { type: Number, default: 1 },
    timeScale: { type: Number, default: 1 },
    loopMode: {
      type: Number,
      default: LoopMode.LoopRepeat
    },
    loop: { type: Number, default: Infinity },
    statue: { type: String, default: "play" }
  },
  setup(props) {
    const { getInstance, setAnimationClip, setProps } = useAnimationAction(void 0, void 0, props);
    watch(() => props.id, (val, oldVal) => {
      const { weight, timeScale, loopMode, loop, statue } = props;
      setAnimationClip(val);
      setProps(weight, timeScale, loopMode, loop, statue);
    });
    watch(props, (val) => {
      const { weight, timeScale, loopMode, loop, statue } = val;
      setProps(weight, timeScale, loopMode, loop, statue);
    });
    onMounted(() => {
      getInstance();
    });
    return { getInstance };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return renderSlot(_ctx.$slots, "default");
}
var AnimationAction = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/songshuai/Desktop/project_new/sandi-ui/packages/components/animation-action/src/AnimationAction.vue"]]);

export { AnimationAction as default };
