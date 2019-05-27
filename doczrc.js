import { css } from 'docz-plugin-css'

export default {
  title: 'React Components!',
  description: 'A boilerplate for building reusable react components library',
  dest: '/docs',
  themeConfig: {
    colors: {
      primary: '#DB4D4D'
    }
  },
  // onCreateWebpackChain: config => {
  //   // Allow CSS imports
  //   config.module
  //     .rule('scss')
  //     .test(/\.css|scss|sass$/)
  //     .use('style')
  //     .loader('style-loader')
  //     .end()
  //     .use('css')
  //     .loader('css-loader')
  //     .end()
  // },
  // modifyBundlerConfig: bundlerConfig => {
  //   const rules = [
  //     {
  //       test: /\.css$/,
  //       use: [
  //         { loader: 'style-loader' },
  //         {
  //           loader: 'css-loader',
  //           options: {
  //             importLoaders: 1,
  //             modules: false
  //           }
  //         },
  //         { loader: 'postcss-loader' }
  //       ]
  //     }
  //   ]
  //   bundlerConfig.module.rules.push(...rules)
  //   return bundlerConfig
  // },
  plugins: [
    css({
      preprocessor: 'postcss',
      cssmodules: false,
      loaderOpts: {
        /* whatever your preprocessor loader accept */
      }
    })
  ],
  base: process.env.DOCZ_BASE || '/modern-react-library/',
  menu: [
    {
      name: 'Getting Started',
      menu: ['Introduction', 'Installation']
    },
    {
      name: 'Components',
      menu: ['Button']
    }
  ]
}
