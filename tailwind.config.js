/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      colors:{
        silver:{
          300:'#F0F0F0',
          500:'rgba(0, 0, 0, 0.16)',
          600:'#808080'
        },
        primary:"#E6553B"
      },

      extend:{
        aspectRatio: {
          '4/3': '4 / 3',
          '3/4': '3 / 4',
          '4/5': '4 / 5',
          '1/1': '1 / 1',
        },
      }

    },
  },
  plugins: [],
}


// 通用的斷點數值
// 平板斷點：992px ->用tail的 lg 1024 px
// 手機斷點：767px ->用tail的 md 768 px


// Breakpoint prefix	Minimum width	CSS
// sm	640px	@media (min-width: 640px) { ... }
// md	768px	@media (min-width: 768px) { ... }
// lg	1024px	@media (min-width: 1024px) { ... }