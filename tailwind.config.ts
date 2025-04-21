module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#10B981', // Green for primary headlines
        'brand-accent': '#FACC15', // Yellow for accents and hover states
        'neutral': {
          300: '#D1D1D1', // For body text and sub-headings
        },
      },
      backgroundColor: {
        'hoverAccent': 'rgba(250, 204, 21, 0.1)', // 10% opacity of brand-accent
      },
      borderColor: {
        'brand-accent/30': 'rgba(250, 204, 21, 0.3)', // 30% opacity for card borders
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              color: '#10B981',
            },
            h2: {
              color: '#10B981',
            },
            h3: {
              color: '#10B981',
            },
            h4: {
              color: '#10B981',
            },
          },
        },
      },
    },
  },
  plugins: [],
}
