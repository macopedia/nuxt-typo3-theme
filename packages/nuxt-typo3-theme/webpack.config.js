const path = require('path')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|ts|vue)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/
      },
      {
        test: /\.postcss$/,
        sideEffects: true,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: path.join('.', 'postcss.config.js')
              }
            }
          }
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        sideEffects: true,
        oneOf: [
          // this matches `<style module>`
          {
            resourceQuery: /module/,
            use: [
              'vue-style-loader',
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  modules: {
                    localIdentName: !isProduction
                      ? '[name]__[local]___[hash:base64:5]'
                      : '[hash:base64:5]'
                  }
                }
              },
              'sass-loader'
            ]
          },
          // this matches plain `<style>` or `<style scoped>`
          {
            resourceQuery: /\?vue/,
            use: ['vue-style-loader', 'css-loader', 'sass-loader']
          },
          // regular css/scss file
          {
            use: ['style-loader', 'css-loader', 'sass-loader']
          }
        ]
      }
    ]
  },
  plugins: [
    new StyleLintPlugin({
      files: ['src/**/*.{vue,scss}']
    })
  ]
}
