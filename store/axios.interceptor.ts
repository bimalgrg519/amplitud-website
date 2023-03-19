export default (config, store) => {
  config.headers["X-ACCESS-KEY"] = `123`;
  return config;
};
