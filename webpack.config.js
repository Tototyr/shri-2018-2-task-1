const path  = require('path');
const { initBackendStub } = require("./utils/backend-stub");
const PUBLIC_PATH = path.join(__dirname, "public");

module.exports = (env, argv) => ({
  entry: "./src/index.js",
  output: {
    path: PUBLIC_PATH,
    filename: "index.js"
  },
  devServer: {
    contentBase: PUBLIC_PATH,
    compress: true,
    port: 9000,
    before: initBackendStub
  }
});