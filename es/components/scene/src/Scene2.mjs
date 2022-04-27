import { defineComponent, onMounted, onUnmounted, renderSlot } from 'vue';
import useScenes from './scene.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';

const _sfc_main = defineComponent({
  setup() {
    const { instance } = useScenes();
    onMounted(() => {
    });
    onUnmounted(() => {
    });
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return renderSlot(_ctx.$slots, "default");
}
var Scene = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/songshuai/Desktop/project_new/sandi-ui/packages/components/scene/src/Scene.vue"]]);

export { Scene as default };
