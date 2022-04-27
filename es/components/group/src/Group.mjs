import useGroup from './group2.mjs';
import { object3dProps, propsWatch } from '../../object3d/props.mjs';
import { defineComponent, onUnmounted, renderSlot } from 'vue';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';

const _sfc_main = defineComponent({
  props: {
    ...object3dProps
  },
  setup(props) {
    const { getInstance } = useGroup();
    getInstance().position.set(0, 0, 0);
    propsWatch(props, getInstance());
    onUnmounted(() => {
    });
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return renderSlot(_ctx.$slots, "default");
}
var Group = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/songshuai/Desktop/project_new/sandi-ui/packages/components/group/src/Group.vue"]]);

export { Group as default };
