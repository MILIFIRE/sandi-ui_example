import { defineComponent, watch, onUnmounted, renderSlot } from 'vue';
import useCapsuleGeometry from './capsule-geometry.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';

const _sfc_main = defineComponent({
  props: {
    radius: Number,
    length: Number,
    capSubdivisions: Number,
    radialSegments: Number
  },
  setup(props) {
    const { radius, length, capSubdivisions, radialSegments } = props;
    let { getInstance, remove, replace } = useCapsuleGeometry(radius, length, capSubdivisions, radialSegments);
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
var CapsuleGeometry = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/songshuai/Desktop/project_new/sandi-ui/packages/components/capsule-geometry/src/CapsuleGeometry.vue"]]);

export { CapsuleGeometry as default };
