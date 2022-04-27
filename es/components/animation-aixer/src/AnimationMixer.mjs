import { defineComponent, onUnmounted, renderSlot } from 'vue';
import useAnimationMixer from './animation-mixer.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';

const _sfc_main = defineComponent({
  props: { id: { type: Number, default: 0 } },
  setup() {
    const { getInstance } = useAnimationMixer();
    onUnmounted(() => {
      getInstance();
    });
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return renderSlot(_ctx.$slots, "default");
}
var AnimationMixer = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/songshuai/Desktop/project_new/sandi-ui/packages/components/animation-aixer/src/AnimationMixer.vue"]]);

export { AnimationMixer as default };
