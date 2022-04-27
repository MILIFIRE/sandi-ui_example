import { getCurrentInstance } from 'vue';
import '../modules/index.mjs';
import { OrbitControls } from '../modules/controls/OrbitControls.mjs';

;
const installComponentWrap = (name, component) => {
  component.install = (app) => {
    app.component(name, component);
  };
  return component;
};
const getCore = () => {
  const vm = getCurrentInstance();
  if (vm) {
    return vm.appContext.config.globalProperties.$getv3dCore();
  } else {
    throw Error("Sandi-ui:Core\u5B9E\u4F8B\u83B7\u53D6\u9519\u8BEF");
  }
};
const getNow = () => {
  return (typeof performance === "undefined" ? Date : performance).now();
};
const isMesh = (object) => {
  if (object.isMesh) {
    return true;
  } else {
    false;
  }
};
const isOrbit = (object) => {
  if (object instanceof OrbitControls) {
    return true;
  } else {
    false;
  }
};

export { getCore, getNow, installComponentWrap, isMesh, isOrbit };
