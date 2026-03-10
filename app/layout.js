import "./globals.css";

export const metadata = {
  title: "Demo IA Aula",
  description: "Ferramenta para demonstrar IA em aula",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
