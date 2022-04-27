import { defineComponent, onMounted, openBlock, createElementBlock } from 'vue';
import useDsirectionalLight from './directional-light.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';

const _sfc_main = defineComponent({
  props: {
    color: {
      type: Number,
      defaule: 16777215
    },
    intensity: {
      type: Number,
      defaule: 2
    }
  },
  setup(props) {
    const { instance } = useDsirectionalLight(props.color, props.intensity);
    onMounted(() => {
    });
  }
});
const _hoisted_1 = { ref: "rendererDom" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, null, 512);
}
var DirectionalLight = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/songshuai/Desktop/project_new/sandi-ui/packages/components/directional-light/src/DirectionalLight.vue"]]);

export { DirectionalLight as default };
