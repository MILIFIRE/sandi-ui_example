import { defineComponent, watch, onUnmounted, renderSlot } from 'vue';
import useCylinderGeometry from './cylinder-geometry.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';

const _sfc_main = defineComponent({
  props: {
    radiusTop: Number,
    radiusBottom: Number,
    height: Number,
    radialSegments: Number,
    heightSegments: Number,
    openEnded: Boolean,
    thetaStart: Number,
    thetaLength: Number
  },
  setup(props) {
    const {
      radiusTop,
      radiusBottom,
      height,
      radialSegments,
      heightSegments,
      openEnded,
      thetaStart,
      thetaLength
    } = props;
    let { getInstance, remove, replace } = useCylinderGeometry(radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength);
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
var CylinderGeometry = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/songshuai/Desktop/project_new/sandi-ui/packages/components/cylinder-geometry/src/CylinderGeometry.vue"]]);

export { CylinderGeometry as default };
