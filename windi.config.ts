import icons from '@windicss/plugin-icons'
import colors from 'windicss/colors'
import { defineConfig } from 'windicss/helpers'
import forms from 'windicss/plugin/forms'

export default defineConfig({
  attributify: {
    prefix: 'w:',
  },
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      gray: '#e7ecef',
      black: colors.black,
      dark: '#252836',
      primary: '#EA7C69',
      secondary: '#9288E0',
    },
    extend: {
      gridTemplateColumns: {
        '1/3': 'repeat(auto-fit, minmax(24rem, 1fr))',
      },
    },
  },

  plugins: [forms, icons],
  extract: {
    include: ['src/**/*.{vue,html}'],
    exclude: ['node_modules', '.git'],
  },
})
