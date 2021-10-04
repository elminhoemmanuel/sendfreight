module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {

    extend: {
      
      backgroundImage: theme => ({
        'hero-bg': "url('/images/farmhero.jpg')",
       }),
      colors: {
        revorange:"#FF6634",
        orangelight:"#FFEBFF",
        header:"#303030",
        body:"#747474",
        graytext:"#8D8D8D",
        tagred:"#FF6634",
        tagbg:"rgba(255, 102, 52, 0.05)",
        testgray:"#FCFCFC",
        graybg:"#F8F8F8",
        brandsbg:"#FEFEFE",
        advertbg:"#FBFBFB",
        footerbg:"#1F2131",
        
      }
    },

    screens: {
      'xs': '330px',
      // => @media (min-width: 330px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '769px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    }
  },
  plugins: [],
}
