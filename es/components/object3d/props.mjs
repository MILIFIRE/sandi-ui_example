import { watch } from 'vue';

const object3dProps = {
  translateX: {
    type: Number,
    require: false
  },
  translateY: {
    type: Number,
    require: false
  },
  translateZ: {
    type: Number,
    require: false
  },
  rotateX: {
    type: Number,
    require: false
  },
  rotateY: {
    type: Number,
    require: false
  },
  rotateZ: {
    type: Number,
    require: false
  },
  rotationX: {
    type: Number,
    require: false
  },
  rotationY: {
    type: Number,
    require: false
  },
  rotationZ: {
    type: Number,
    require: false
  },
  positionX: {
    type: Number,
    require: false
  },
  positionY: {
    type: Number,
    require: false
  },
  positionZ: {
    type: Number,
    require: false
  },
  scaleX: {
    type: Number,
    require: false
  },
  scaleY: {
    type: Number,
    require: false
  },
  scaleZ: {
    type: Number,
    require: false
  },
  scaleXYZ: {
    type: Number,
    require: false
  },
  visible: {
    type: Boolean,
    require: false
  }
};
const watchWrap = (map, unWatch) => {
  map.add(unWatch);
};
const isFunction = (prop) => typeof prop === "function";
const mapFn = (watchSet, props, instance, mapKey, key1, key2) => {
  if (instance[key1]) {
    if (props[mapKey]) {
      instance[key1][key2] = props[mapKey];
    }
    watchWrap(watchSet, watch(() => props[mapKey], (val, oldVal) => {
      instance[key1][key2] = val;
    }));
  }
};
const propsWatch = (props, instance) => {
  const watchSet = /* @__PURE__ */ new Set();
  const mapProps = {
    "positionX": (props2, instance2) => {
      mapFn(watchSet, props2, instance2, "positionX", "position", "x");
    },
    "positionY": (props2, instance2) => {
      mapFn(watchSet, props2, instance2, "positionY", "position", "y");
    },
    "positionZ": (props2, instance2) => {
      mapFn(watchSet, props2, instance2, "positionZ", "position", "z");
    },
    "rotationX": (props2, instance2) => {
      mapFn(watchSet, props2, instance2, "rotationX", "rotation", "x");
    },
    "rotationY": (props2, instance2) => {
      mapFn(watchSet, props2, instance2, "rotationY", "rotation", "y");
    },
    "rotationZ": (props2, instance2) => {
      mapFn(watchSet, props2, instance2, "rotationZ", "rotation", "z");
    },
    "scaleX": (props2, instance2) => {
      mapFn(watchSet, props2, instance2, "scaleX", "scale", "x");
    },
    "scaleY": (props2, instance2) => {
      mapFn(watchSet, props2, instance2, "scaleY", "scale", "y");
    },
    "scaleZ": (props2, instance2) => {
      mapFn(watchSet, props2, instance2, "scaleZ", "scale", "z");
    },
    "scaleXYZ": (props2, instance2, val, oldVal) => {
      if (props2["scaleXYZ"]) {
        let val2 = props2["scaleXYZ"];
        instance2.scale.set(val2, val2, val2);
      }
      watchWrap(watchSet, watch(() => props2["scaleXYZ"], (val2, oldVal2) => {
        instance2.scale.set(val2, val2, val2);
      }));
    }
  };
  for (let propKey in object3dProps) {
    if (instance[propKey]) {
      if (props[propKey]) {
        if (isFunction(instance[propKey])) {
          instance[propKey](props[propKey]);
        } else {
          instance[propKey] = props[propKey];
        }
      }
      watchWrap(watchSet, watch(() => props[propKey], (val) => {
        if (isFunction(instance[propKey])) {
          instance[propKey](val);
        } else {
          instance[propKey] = val;
        }
      }));
    } else {
      if (mapProps[propKey]) {
        mapProps[propKey](props, instance);
      } else {
        console.log("instance not have props ", propKey);
      }
    }
  }
  return watchSet;
};

export { object3dProps, propsWatch };
