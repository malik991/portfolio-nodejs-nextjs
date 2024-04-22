import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Alrehman Portfolio: React, Next.js, MongoDB, PostgreSQL, Redux Toolkit, JavaScript, TypeScript, and Mobile App Projects",
  description:
    "Explore Alrehman Portfolio showcasing a diverse range of projects built with React, Next.js, MongoDB, PostgreSQL, Redux Toolkit, JavaScript, TypeScript, and Mobile App development. Gain insights into innovative solutions and creative implementations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
