import { defineComponent, watch, onUnmounted, renderSlot } from 'vue';
import useBoxGeometry from './box-geometry.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';

const _sfc_main = defineComponent({
  props: {
    width: Number,
    height: Number,
    depth: Number,
    widthSegments: Number,
    heightSegments: Number,
    depthSegments: Number
  },
  setup(props) {
    const {
      width,
      height,
      depth,
      widthSegments,
      heightSegments,
      depthSegments
    } = props;
    let { getInstance, remove, replace } = useBoxGeometry(width, height, depth, widthSegments, heightSegments, depthSegments);
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
var BoxGeometry = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/songshuai/Desktop/project_new/sandi-ui/packages/components/box-geometry/src/BoxGeometry.vue"]]);

export { BoxGeometry as default };
