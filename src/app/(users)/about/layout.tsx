import Navbar from "../../../components/Navbar";

export default function RootLayout({
  children,
}: {children: React.ReactNode}) {
  return (
    <html>
      <body
      >
        {children}
        <h1>Hello laoyout</h1>
        <Navbar/>
      </body>
    </html>
  );
}