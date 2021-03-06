

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {    
    letterSpacing: {
      tightest: '-0.14px',
      suite: '-0.44px',
      tighter: '-.05em',
      mpOne:'-0.01em',
      tight: '-.025em',
      mOnePx: '-0.0625em',
      OnePx: '0.0625em',
      normal: '0',
      pointZNine: '0.006em',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      widest: '.25em',
      'ultraWide': '.15em',
    },    
    extend: {
      screens: {
        'sm': '375px',
        'xl': '1440px'
      },
      borderRadius: {
        '2xl': '15px'
      },
      fontFamily: {
        epilogue: "'Epilogue', serif" 
      },
      lineHeight: {
        '56': '56px',
        '26': '26px',
        '78': '78px'
      },
      fontSize: {
        32: ['32px'],
        15: ['15px', {
        letterSpacing: '-0.083px',
        lineHeight: '32px',
        }],
        38: ['38px', {
        letterSpacing: '-0.53px',
        lineHeight: '44px',
        }],
        40: ['40px', {
        letterSpacing: '-0.42px',
        lineHeight: '48px',
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
        cream: '#F3EDE7',
        purple: '#DB65E2',
      },
       opacity: {
        '48': '.48',
      },
       blur: {
        xl: '135.914px',
      },
      borderWidth: {
        '1': '1px'
      },
      width: {
        '21': '5.29rem',
        '49': '197px',
        '73': '294px',
        '151': '9.48rem',
        '82': '343px',
        '768': '48rem',
        '689': '43.063rem',
        '5xl': '1109px',
        '5xlp': '1345px',
        '6xl': '1440px',
        '1/8':'80%'
      },
      height: {
        '19': '1.19rem',
        '39':'150px',
        '49': '197px',
        '73': '294px',
        '545': '545px',
        '600': '37.5rem',
        '640': '640px',
        '98': '420px',
        '100': '464px',
        '482': '482px',
        '684': '684px'
      },
       minWidth: {
      '689': '689px',
    },
      margin: {
        '15': '58px',
        '53': '3.35rem',
        '155': '9.69rem',
        '41': '10.375rem',
        '13': '3.125rem', 
        '90': '348px',
        '100': '500px',
        '120': '750px',
        '130': '900px'
      },
      maxWidth: {
        'xlLess': '35.8rem',
        '281': '281px',
        '5xl': '1108.85px',
        '5xlp': '1345px',
        '8xl': '1440px',
        '689': '689px'
      },
    },
  },
  plugins: [],
}