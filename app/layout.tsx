import type { Metadata } from "next";
import { Roboto_Mono, Anton, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

// 1. 配置 Anton 字体
const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
});

// 2. 配置 Roboto Mono 字体
const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

// 3. 配置 Cormorant Garamond 字体（通常需要指定 weight，这里以 400 和 700 为例）
const cormorantGaramond = Cormorant_Garamond({
  weight: ["400", "700"],
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DaoHui 導航網",
  description: "可以來OSINT我(?",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      // 将定义好的字体变量放进 className 中
      className={`h-screen antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}