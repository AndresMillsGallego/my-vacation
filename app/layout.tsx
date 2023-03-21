import "./global.css";

export const metadata = {
  title: "My Vacation",
  description: "A place to organize your next vacation!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
