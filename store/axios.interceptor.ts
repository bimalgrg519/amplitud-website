export default (config, store) => {
  config.headers["X-ACCESS-KEY"] = `123`;
  config.headers["LEGAL"] = `123`;
  return config;
};
