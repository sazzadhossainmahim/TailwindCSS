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
            },
            fontFamily: {
                Poppins: ["Poppins,sans-serif"],
            },
            container: {
                center: true,
                padding: "1rem",
                screens: {
                    sm: '640px',
                    md: '768px',
                    lg: "1124px",
                    xl: "1124px",
                    "2xl": "1124px",

                },
            }
        },


        variants: {
            extend: {
                textColor: ['visited'],
                backgroundColor: ['checked'],
                borderColor: ['checked'],
                // Dark Mode
                textOpacity: ['dark'],
            },
        },
        plugins: [],
    }
    // const color = require('tailwind/colors')

// module.exports = {
//     theme: {
//         colors: {
//             gray: colors.coolGray,
//             blue: colors.lightBlue,
//             red: colors.rose,
//         },

//     }
// }