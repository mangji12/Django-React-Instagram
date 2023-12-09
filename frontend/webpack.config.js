module.exports = {
  module: {
    rules: [
      /**
       * TODO: SASS 코드를 사용할수 있겠끔 sass-loader를 구성하세요.
       */
      {
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
