module.exports = {
    content: [
      "./src/**/*.{html,js,jsx,ts,tsx}", // Adiciona esta linha para garantir que o Tailwind seja aplicado corretamente em arquivos TypeScript
    ],
    theme: {
      extend: {
        colors: {
          background: 'var(--background)',
          foreground: 'var(--foreground)',
          brown: 'var(--bg-brown)',
          orange: 'var(--bg-orange)',
          textDark: 'var(--text-dark)',
          textOrange: 'var(--text-orange)',
        },
        screens: {
          'xs': '475px',
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
          '2xl': '1536px',
        },
      },
    },
    plugins: [],
  }
  