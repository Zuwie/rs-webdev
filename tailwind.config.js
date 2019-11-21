/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    colors: {
      transparent: 'transparent',

      lightShade: '#FFFFFF',
      lightAccent: '#948FA5',

      primary: '#574574',

      darkAccent: '#7B7990',
      darkShade: '#2E283A',

      lightGrey: '#b7dddd'
    },
    fontFamily: {
      body: ['Lato']
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem'
    }
  },
  corePlugins: {},
  plugins: []
}
