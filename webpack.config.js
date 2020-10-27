const HtmlWebpackPlugin = require("html-webpack-plugin");

const path = require("path");

module.exports = {
  entry: {
    main: "./src/index.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  module: {                                          
    rules: [
        {
            test: /\.js$/,                       
            exclude: /node_modules/,              
            use:{
                loader: "babel-loader"               
            }
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }
    ]
  },
  devServer: {
    port: 3000,
    historyApiFallback: true
  },
  devtool: "inline-source-map",
  resolve: {
    alias: {
      "@page": path.resolve(__dirname, "src/page/"),
    }
  },
  optimization: {
    splitChunks: {
      minSize: 10000,
      maxSize: 250000,
    }
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.join(__dirname, "./public/index.html"),
    inject: true
  })]
};