

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {    
    letterSpacing: {
      tightest: '-0.14px',
      suite: '-0.44px',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      pointZNine: '0.09px',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      widest: '.25em',
      'ultraWide': '.15em',
    },    
    extend: {
      screens: {
        'xlPlus': '90rem',
        'sm': '375px'
    },
      fontFamily: {
        epilogue: "'Epilogue', serif" 
      },
      lineHeight: {
        '56': '56px'
      },
      fontSize: {
        32: ['32px'],
        38: ['38px', {
        letterSpacing: '-0.53px',
        lineHeight: '44px',
        }],
        56: ['56px', {
        letterSpacing: '-0.78px',
        lineHeight: '64px',
      }],
      },
      colors: {
        DarkBlue: '#172339',
        screenBackground: '#FAF8F6',
        creamWhite: '#FAF8F6',
        grey: '#49566D',
      },
      borderWidth: {
        '1': '1px'
      },
      width: {
        '21': '5.29rem',
        '151': '9.48rem',
        '768': '48rem',
      },
      height: {
        '19': '1.19rem'
      },
      margin: {
        '53': '3.35rem',
        '155': '9.69rem',
        '41': '10.375rem',
        '13': '3.125rem',        
      },
      maxWidth: {
        'xlLess': '35.8rem'
      },
    },
  },
  plugins: [],
}