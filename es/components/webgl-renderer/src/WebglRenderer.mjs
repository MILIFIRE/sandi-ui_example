import { defineComponent, ref, watch, computed, onMounted, onUnmounted, toRefs, openBlock, createElementBlock, normalizeStyle, renderSlot } from 'vue';
import { webglProps, useRender } from './webgl-renderer.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';

const _sfc_main = defineComponent({
  props: webglProps,
  setup(props) {
    const rendererDom = ref();
    const webglRender = useRender(props.options);
    const { instance, setSize } = webglRender;
    setSize(props.width, props.height);
    instance.setClearColor(props.backgroundColor, props.backgroundAlpha);
    instance.setPixelRatio(props.pixelRatio);
    if (props.renderCallback) {
      instance.setCallBack(props.renderCallback);
    }
    watch(() => props.renderCallback, (fn, oldFN) => {
      if (fn) {
        instance.setCallBack(fn);
      }
      if (oldFN) {
        instance.delCallBack(oldFN);
      }
    });
    watch(() => props.scene, (scene) => {
      if (scene)
        instance.setScene(scene);
    });
    watch(() => props.camera, (camera) => {
      if (camera)
        instance.setCamera(camera);
    });
    computed(() => {
      setSize(props.width, props.height);
    });
    computed(() => {
      instance.setClearColor(props.backgroundColor, props.backgroundAlpha);
    });
    watch(() => props.pixelRatio, (pixelRatio) => {
      3;
      instance.setPixelRatio(pixelRatio);
    });
    onMounted(() => {
      var _a;
      if (props.renderCallback)
        instance.delCallBack(props.renderCallback);
      (_a = rendererDom.value) == null ? void 0 : _a.appendChild(instance.domElement);
      instance.renderScene();
    });
    onUnmounted(() => {
      instance.dispose();
    });
    const { width, height } = toRefs(props);
    return { rendererDom, width, height };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    ref: "rendererDom",
    style: normalizeStyle({ width: _ctx.width + "px", height: _ctx.height + "px" })
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 4);
}
var WebglRenderer = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/songshuai/Desktop/project_new/sandi-ui/packages/components/webgl-renderer/src/WebglRenderer.vue"]]);

export { WebglRenderer as default };
