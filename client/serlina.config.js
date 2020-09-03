module.exports = {
  webpack(webpack, { miniCSSLoader }) {
    return {
      module: {
        rules: [{
          test: /\.less$/,
          use: [ miniCSSLoader, 'css-loader', 'less-loader']
        }]
      }
    }
  }
};
