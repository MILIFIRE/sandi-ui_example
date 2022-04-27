import { defineComponent, onMounted, watch, onUnmounted } from 'vue';
import usePointerLockControls from './pointerlock-controls.mjs';
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
    },
    lock: {
      type: Boolean,
      default: false
    },
    connect: {
      type: Boolean,
      default: true
    },
    unlockCallback: {
      type: Function,
      required: false
    },
    options: {
      type: Object,
      required: false
    }
  },
  setup(props) {
    onMounted(() => {
      const { instance, setCharacter, setCallBack, remove } = usePointerLockControls(props.camera, props.domElement);
      if (props.lock) {
        instance.lock();
      }
      if (props.options)
        [
          setCharacter(props.options)
        ];
      watch(() => props.lock, (val) => {
        if (val) {
          instance.lock();
        } else {
          instance.unlock();
        }
      });
      watch(() => props.options, (val) => {
        if (val)
          setCharacter(val);
      });
      if (props.unlockCallback) {
        setCallBack("unlock", props.unlockCallback);
      }
      onUnmounted(() => {
        if (remove) {
          remove();
        }
      });
    });
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return null;
}
var PointerLockControls = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/songshuai/Desktop/project_new/sandi-ui/packages/components/pointerlock-controls/src/PointerLockControls.vue"]]);

export { PointerLockControls as default };
