import { defineComponent, onMounted } from 'vue';
import useTransformControls from './transform-controls.mjs';
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
      const { instance } = useTransformControls(props.camera, props.domElement);
      return { instance };
    });
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return null;
}
var TransformControls = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/songshuai/Desktop/project_new/sandi-ui/packages/components/transform-controls/src/TransformControls.vue"]]);

export { TransformControls as default };
