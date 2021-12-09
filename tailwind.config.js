module.exports = {
    purge: [],
    darkMode: 'media', // or 'media' or 'class'
    // darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                "bookmark-purple": "#5267DF",
                "bookmark-red": "#FA5959",
                "bookmark-blue": "#242A45",
                "bookmark-grey": "#9194A2",
                "bookmark-white": "#f7f7f7",
            },
            fontFamily: {
                Poppins: ["Poppins,sans-serif"],
                'sans': ['ui-sans-serif', 'system-ui', ],
                'serif': ['ui-serif', 'Georgia', ],
                'mono': ['ui-monospace', 'SFMono-Regular', ],
                'display': ['Oswald', ],
                'body': ['"Open Sans"', ],
            },
            container: {
                center: true,
                padding: "2rem",
                margin: "2rem",
                border: "1px gray solid",
                boxDecorationBreak: ['hover', 'focus'],
                screens: {
                    sm: '640px',
                    md: '768px',
                    lg: "1124px",
                    xl: "1124px",
                    "2xl": "1124px",

                },
                fontSize: {
                    'xs': '.75rem',
                    'sm': '.875rem',
                    'tiny': '.875rem',
                    'base': '1rem',
                    'lg': '1.125rem',
                    'xl': '1.25rem',
                    '2xl': '1.5rem',
                    '3xl': '1.875rem',
                    '4xl': '2.25rem',
                    '5xl': '3rem',
                    '6xl': '4rem',
                    '7xl': '5rem',
                },
                fontSize: {
                    sm: ['14px', '20px'],
                    base: ['16px', '24px'],
                    lg: ['20px', '28px'],
                    xl: ['24px', '32px'],
                },


            }
        },

    },


    variants: {
        extend: {
            textColor: ['visited'],
            backgroundColor: ['checked'],
            borderColor: ['checked'],
            // Dark Mode
            textOpacity: ['dark'],
            fontFamily: ['hover', 'focus'],
        },
    },

    plugins: [

    ],
}