/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
import tailwindClipPath from 'tailwind-clip-path'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'ranch': ['Lora' ],
      'RubikVinyl': ['Rubik Vinyl' ],
      'Lora': ['Lora', ],
      'display': ['Oswald', ],
      'DMSerifText': ['DM Serif Text' ],
      'Kanit': ['Kanit' ],
    },
    extend: {
      clipPath: {
        // custom: 'polygon(100% 0, 91% 20%, 100% 39%, 100% 55%, 93% 77%, 100% 100%, 0 100%, 0 0)',
        custom: 'polygon(0 33%, 13% 16%, 0 0, 100% 0, 100% 35%, 88% 48%, 100% 65%, 90% 82%, 100% 100%, 0 100%, 0 68%, 12% 50%)',
        // custom: 'polygon(100% 0, 70% 66%, 100% 100%, 0 100%, 0 0)',
        contactME: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)',
        title:' polygon(0 0, 49% 6%, 100% 0, 72% 0, 49% 15%, 30% 0)',
        education:' polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
        
        contact1:'polygon(65% 0, 100% 50%, 65% 100%, 0 100%, 0 0);',
       contact2:'  polygon(100% 0, 100% 100%, 35% 100%, 0 50%, 35% 0)',
      },
    },
  },
  plugins: [daisyui,tailwindClipPath],
}

