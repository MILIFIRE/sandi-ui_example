import { defineComponent, onUnmounted, watch, renderSlot } from 'vue';
import { Color } from 'three';
import useBasicMaterial from './mesh-basic-material.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';

const _sfc_main = defineComponent({
  props: {
    color: { type: Number, default: 16777215 },
    map: {
      type: Object,
      default: null
    },
    alphaMap: {
      type: Object,
      default: null
    },
    aoMap: {
      type: Object,
      default: null
    },
    reflectivity: {
      type: Number,
      default: 1
    },
    refractionRatio: {
      type: Number,
      default: 0.98
    },
    meshName: String
  },
  setup(props) {
    const { instance } = useBasicMaterial(props);
    onUnmounted(() => {
      instance.dispose();
    });
    watch(props, (val) => {
      const { color, map, alphaMap, reflectivity, refractionRatio } = val;
      instance.color = new Color(color);
      if (map) {
        instance.map = map;
      }
      if (alphaMap) {
        instance.alphaMap = alphaMap;
      }
      if (reflectivity) {
        instance.reflectivity = reflectivity;
      }
      if (refractionRatio) {
        instance.refractionRatio = refractionRatio;
      }
    });
    return { instance };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return renderSlot(_ctx.$slots, "default");
}
var MeshBasicMaterial = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/songshuai/Desktop/project_new/sandi-ui/packages/components/mesh-basic-material/src/MeshBasicMaterial.vue"]]);

export { MeshBasicMaterial as default };
