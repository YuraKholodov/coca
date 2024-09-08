const config = {
  mode: "production",
  entry: {
    main: "./src/js/main.js",
    pricing: "./src/js/pricing.js",
  },
  output: {
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};

module.exports = config;
