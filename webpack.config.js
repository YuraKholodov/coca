const config = {
  mode: "production",
  entry: {
    main: "./src/js/main.js",
    pricing: "./src/js/pricing.js",
    contact: "./src/js/contact.js",
    about: "./src/js/about.js",
    blog: "./src/js/blog.js",
    blogItem: "./src/js/blog-item.js",
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
