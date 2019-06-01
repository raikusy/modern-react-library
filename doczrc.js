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
