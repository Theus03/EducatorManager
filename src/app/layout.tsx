import "../styles/globals.css"


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth flex justify-center">
      <body
        className="antialiased">
        {children}
      </body>
    </html>
  );
}
