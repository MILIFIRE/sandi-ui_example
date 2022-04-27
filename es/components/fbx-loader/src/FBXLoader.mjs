import { defineComponent, renderSlot } from 'vue';
import useFBXLoader from './fbx-loader.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';

const _sfc_main = defineComponent({
  props: {
    url: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const { instance } = useFBXLoader(props.url);
    return { instance };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return renderSlot(_ctx.$slots, "default");
}
var FBXLoader = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/songshuai/Desktop/project_new/sandi-ui/packages/components/fbx-loader/src/FBXLoader.vue"]]);

export { FBXLoader as default };
