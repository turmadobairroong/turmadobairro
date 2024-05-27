import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'md-5': { max: '980px' },
      'md-6': { max: '800px' },
      'md-7': { max: '715px' },
      'md-8': { max: '605px' },
      'md-9': { max: '510px' },
      'md-9.1': { max: '475px' },
      'md-9.2': { max: '390px' },
      'md-10': { max: '355px' },
      'hg-1': { min: '1540px' },
    },
    extend: {
      colors: {
        primary: '#0075AB',
        secondary: '#FCC76E',
        'white-100': '#FFFEFF',
        'black-100': '#2d2d2d',
      },
    },
  },
  plugins: [],
}
export default config
