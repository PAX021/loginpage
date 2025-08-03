import "./globals.scss";
import { AuthProvider } from "@/context/AuthContext";

export const metadata = {
  title: "Auth System",
  description: "Simple auth with redirect",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
