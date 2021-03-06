const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  configureWebpack: {
    devtool: "source-map",
    plugins: [new CopyWebpackPlugin(["public/_redirects"])]
  },
  chainWebpack: config => {
    config.module.rule("scss").oneOfs.store.forEach(item => {
      item
        .use("sass-resources-loader")
        .loader("sass-resources-loader")
        .options({ resources: "./src/styles/_shared.scss" })
        .end();
    });

    config.module
      .rule("gql")
      .test(/\.gql$/)
      .use("graphql-tag/loader")
      .loader("graphql-tag/loader")
      .end();
  }
};
