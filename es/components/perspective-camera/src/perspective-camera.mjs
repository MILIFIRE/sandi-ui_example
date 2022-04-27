import { defineComponent, onMounted, onUnmounted } from 'vue';
import usePerspectiveCamera from './perspectiveCamera.mjs';
import { object3dProps, propsWatch } from '../../object3d/props.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';

const _sfc_main = defineComponent({
  props: {
    ...object3dProps,
    fov: {
      type: Number
    },
    aspect: {
      type: Number
    },
    near: {
      type: Number
    },
    far: {
      type: Number
    }
  },
  setup(props) {
    const { fov, aspect, near, far } = props;
    const { instance } = usePerspectiveCamera(fov, aspect, near, far);
    propsWatch(props, instance);
    onMounted(() => {
    });
    onUnmounted(() => {
    });
    return { instance };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return null;
}
var PerspectiveCamera = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/songshuai/Desktop/project_new/sandi-ui/packages/components/perspective-camera/src/perspective-camera.vue"]]);

export { PerspectiveCamera as default };
