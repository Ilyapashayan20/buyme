module.exports = {
  module: {
    rules: [
      {
        test: /\.(scss|sass)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: ['./src/styles/vars.scss'],
            },
          },
        ],
      },
    ],
  },
}
