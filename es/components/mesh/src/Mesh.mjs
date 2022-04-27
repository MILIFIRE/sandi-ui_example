import { BufferGeometry, Material } from 'three';
import useMesh from './mesh2.mjs';
import { object3dProps, propsWatch } from '../../object3d/props.mjs';
import { defineComponent, onUnmounted, renderSlot } from 'vue';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';

const _sfc_main = defineComponent({
  props: {
    ...object3dProps,
    geometry: {
      type: BufferGeometry,
      required: false
    },
    material: {
      type: Material,
      required: false
    },
    geometryType: {
      type: String,
      required: false
    },
    geometryParam: {
      type: Object,
      required: false
    }
  },
  setup(props) {
    const { getInstance, update } = useMesh(props.geometry, props.material, props.geometryType, props.geometryParam);
    let watchStopSet = propsWatch(props, getInstance());
    const updateWatch = (instance) => {
      if (watchStopSet) {
        watchStopSet.forEach((stop) => stop());
        watchStopSet = propsWatch(props, instance);
      }
    };
    update(updateWatch);
    onUnmounted(() => {
    });
    return { getInstance };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return renderSlot(_ctx.$slots, "default");
}
var Mesh = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/songshuai/Desktop/project_new/sandi-ui/packages/components/mesh/src/Mesh.vue"]]);

export { Mesh as default };
