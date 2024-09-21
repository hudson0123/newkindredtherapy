import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" scrol>
      <body>
        {children}
      </body>
    </html>
  );
}
