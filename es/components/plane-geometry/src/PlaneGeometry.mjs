import { defineComponent, watch, onUnmounted, renderSlot } from 'vue';
import usePlaneGeometry from './plane-geometry.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';

const _sfc_main = defineComponent({
  props: {
    width: Number,
    height: Number,
    widthSegments: Number,
    heightSegments: Number
  },
  setup(props) {
    const { width, height, widthSegments, heightSegments } = props;
    let { getInstance, remove, replace } = usePlaneGeometry(width, height, widthSegments, heightSegments);
    watch(props, (val, oldVal) => {
      replace(props);
    });
    onUnmounted(() => {
      remove();
    });
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return renderSlot(_ctx.$slots, "default");
}
var PlaneGeometry = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/songshuai/Desktop/project_new/sandi-ui/packages/components/plane-geometry/src/PlaneGeometry.vue"]]);

export { PlaneGeometry as default };
