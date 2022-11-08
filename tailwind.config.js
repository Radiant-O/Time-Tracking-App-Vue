/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      sm: '360px',
      lg:'1280px'
    },
    fontFamily:{

    },
    extend: {
      colors: {
        myblue: 'hsl(246, 80%, 60%)',
        workred: 'hsl(15, 100%, 70%)',
        softblue: 'hsl(195, 74%, 62%)',
        studyred: 'hsl(348, 100%, 68%)',
        mylimegreen: 'hsl(145, 58%, 55%)',
        violet: 'hsl(264, 64%, 52%)',
        softorange: 'hsl(43, 84%, 65%)',
        vdarkblue: 'hsl(226, 43%, 10%)',
        darkblue: 'hsl(235, 46%, 20%)',
        destatblue: 'hsl(235, 45%, 61%)',
        paleblue: 'hsl(236, 100%, 87%)'
      }
    },
  },
  plugins: [],
}
