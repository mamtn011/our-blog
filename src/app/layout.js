import { Inter } from "next/font/google";
import "./globals.css";
import "./app.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { BlogProvider } from "@/context/blogProvider";
import { Suspense } from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Blog",
  description: "A dynamic blog application using next js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense>
          <Header />
          <BlogProvider>{children}</BlogProvider>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
