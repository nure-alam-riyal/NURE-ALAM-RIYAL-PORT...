/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
import tailwindClipPath from 'tailwind-clip-path'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      clipPath: {
        custom: 'polygon(100% 0, 70% 66%, 100% 100%, 0 100%, 0 0)',
        title:' polygon(0 0, 49% 6%, 100% 0, 72% 0, 49% 15%, 30% 0)',
        education:' polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
        
        contact1:'polygon(65% 0, 100% 50%, 65% 100%, 0 100%, 0 0);',
       contact2:'  polygon(100% 0, 100% 100%, 35% 100%, 0 50%, 35% 0)',
      },
    },
  },
  plugins: [daisyui,tailwindClipPath],
}

