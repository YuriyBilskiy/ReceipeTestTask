import './globals.css';
export const metadata = {
  title: "Recipes",
  description: "You can find, a lot of recipes",
  icons: "/chef.svg",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
