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
          // Customizando os breakpoints
          '2xs': '300px', // Tamano 2x extra pequeno
          sm: '240px', // Tamanho pequeno
          md: '768px', // Tamanho médio (padrão)
          lg: '1024px', // Tamanho grande (padrão)
          xl: '1280px', // Tamanho extra grande (padrão)
          '2xl': '1536px', // Tamanho 2x extra grande
          // Você pode adicionar mais breakpoints conforme necessário
        },
      },
    },
    plugins: [],
  }
  