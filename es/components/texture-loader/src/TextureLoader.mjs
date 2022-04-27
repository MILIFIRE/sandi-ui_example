import { defineComponent, watch, onUnmounted, renderSlot } from 'vue';
import { useTexture } from './texture.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';

const _sfc_main = defineComponent({
  props: {
    type: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    disabled: Boolean
  },
  setup(props) {
    const { instance, setTexture } = useTexture();
    const texture = instance.load(props.url);
    if (!props.disabled) {
      setTexture(texture, props.type);
    }
    watch(() => props.disabled, (val) => {
      if (!val) {
        setTexture(texture, props.type);
      }
    });
    onUnmounted(() => {
      texture.dispose();
    });
    return { instance };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return renderSlot(_ctx.$slots, "default");
}
var TextureLoader = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/songshuai/Desktop/project_new/sandi-ui/packages/components/texture-loader/src/TextureLoader.vue"]]);

export { TextureLoader as default };
