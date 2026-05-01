/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'neb-black':  '#0e0e0e',
        'neb-purple': '#8446c2',
        'neb-blue':   '#5564ef',
        'neb-cyan':   '#027ac3',
        'neb-mauve':  '#a85b8a',
        'neb-cream':  '#F9F6FF',
        'neb-ink':    '#1a0a2e',
      },
      fontFamily: {
        sans:  ['Montserrat', 'sans-serif'],
        mono:  ['"Space Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-dark': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M40 0H0v1h40V0zM0 40h40v-1H0v1zM0 0v40h1V0H0zM39 0v40h1V0h-1z' fill='rgba(132,70,194,0.06)'/%3E%3C/svg%3E\")",
        'grid-light': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M40 0H0v1h40V0zM0 40h40v-1H0v1zM0 0v40h1V0H0zM39 0v40h1V0h-1z' fill='rgba(132,70,194,0.08)'/%3E%3C/svg%3E\")",
      },
      animation: {
        'float':     'float 6s ease-in-out infinite',
        'float-slow':'float 9s ease-in-out infinite',
        'scanline':  'scanline 8s linear infinite',
        'marquee':   'marquee 20s linear infinite',
        'glitch':    'glitch 3s infinite',
        'twinkle':   'twinkle 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%':     { transform: 'translateY(-18px) rotate(2deg)' },
        },
        scanline: {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        glitch: {
          '0%,90%,100%':  { transform: 'none', filter: 'none' },
          '92%':           { transform: 'skewX(-3deg)', filter: 'drop-shadow(2px 0 #8446c2)' },
          '94%':           { transform: 'skewX(3deg)',  filter: 'drop-shadow(-2px 0 #5564ef)' },
          '96%':           { transform: 'none',         filter: 'none' },
        },
        twinkle: {
          '0%,100%': { opacity: 0 },
          '50%':     { opacity: 0.8 },
        },
      },
    },
  },
  plugins: [],
};
