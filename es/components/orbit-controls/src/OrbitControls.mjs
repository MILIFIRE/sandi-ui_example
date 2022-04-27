import { defineComponent, onMounted, openBlock, createElementBlock } from 'vue';
import useOrbitControls from './orbit-controls.mjs';
import { Camera } from 'three';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';

const _sfc_main = defineComponent({
  props: {
    camera: {
      type: Camera,
      required: false
    },
    domElement: {
      type: Object,
      required: false
    }
  },
  setup(props) {
    onMounted(() => {
      const { instance } = useOrbitControls(props.camera, props.domElement);
      return { instance };
    });
  }
});
const _hoisted_1 = { ref: "rendererDom" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, null, 512);
}
var OrbitControls = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/songshuai/Desktop/project_new/sandi-ui/packages/components/orbit-controls/src/OrbitControls.vue"]]);

export { OrbitControls as default };
