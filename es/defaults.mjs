import { version } from './version.mjs';

const INSTALLED = Symbol("INSTALLED");
var installerComponents = (components = []) => {
  const install = (app) => {
    if (app[INSTALLED])
      return;
    app[INSTALLED] = true;
    components.forEach((c) => app.use(c));
  };
  return {
    version,
    install
  };
};

export { installerComponents as default };
