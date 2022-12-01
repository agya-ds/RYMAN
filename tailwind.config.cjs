module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./node_modules/@yext/search-ui-react/**/*.{js,ts,jsx,tsx}", // New
  ],
  theme: {
    colors: {
      'transparent': 'transparent',
      'white': '#ffffff',
      'black': '#000000',
      'purple-primary': '#231F20',
      'pagination-button': '#e41b13',
      'pink-primary': '#68717a',
      'gray-dark': '#E6E6E6',
      'gray-light': '#F5F5F5',
      'golden': '#C2A636',
      'green-dark': '#002A2F',
      'blue-grad': '#5a7799',
      'location-card-bg': '#F5F5F5',
      'white': '#ffffff',
      'black': '#000000',
      'grey': '#f0f1f2',
      'button-border-color': '#e41b13',
      'location-card-bg-hover': '#68717a'


    },
    fontFamily: {
      'Encode-Sans': ['"Encode Sans", Georgia, Arial, sans-serif'],

    },
    extend: {
      backgroundImage: {
        'bodypattern': "url('images/arrow-down-shallow-white.svg')",
        'hour-pattern': "url('images/location-img.jpg')",
        'hero-banner': "url('images/hero-banner.png')",
        'finder-bg': "url('images/locaor-bg.svg')",

        }
    },
  },
  plugins: [],
};