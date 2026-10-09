'use client'

import Image from "next/image";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
export default function Home() {
  const mediaLink = [
    { label: "Website", link: "https://www.daohui.site", desc: "Main personal portfolio & hub" },
    { label: "GitHub", link: "https://github.com/XiaoHei14", desc: "Open source code & repositories" },
    { label: "Twitter / X", link: "https://twitter.com/daohui587", desc: "Thoughts, tech & daily updates" },
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-neutral-100 flex flex-col items-center justify-between p-6 md:p-24 relative overflow-hidden selection:bg-purple-500 selection:text-white">

      {/* 背景裝飾光暈 */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-purple-600/20 to-cyan-500/20 blur-[120px] rounded-full pointer-events-none" />

      {/* 頂部導航列 */}
      <header className="z-10 w-full max-w-4xl flex justify-between items-center border-b border-neutral-800 pb-6">
        <div className="flex items-center gap-3">
          <span className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></span>
          <h1 className="font-mono text-sm tracking-widest text-neutral-300">DaoHui 導航</h1>
        </div>
        <span className="font-mono text-xs px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400">
          Nothing
        </span>
      </header>

      {/* 中間主內容區 */}
      <div className="z-10 max-w-4xl w-full my-auto py-12">

        {/* 頭像與標題區塊（精緻排版） */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-12 text-center md:text-left">
          <div className="relative group">
            {/* 頭像外圍的霓虹光暈 */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <Avatar className="relative w-20 h-20 border-2 border-neutral-800 grayscale">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>DH</AvatarFallback>
            </Avatar>
          </div>

          <div className="space-y-3 flex flex-col items-center md:items-start">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight font-[family-name:var(--font-anton)] uppercase bg-gradient-to-r from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent">
              DaoHui 導航網
            </h2>
            <p className="text-neutral-400 font-mono text-sm md:text-base max-w-lg">
              可以來 OSINT 我(?
            </p>

            {/* 搭配主題風格的 Resume 按鈕 */}
            <Link
              href="resume"
              className="mt-1 font-mono text-xs px-4 py-2 rounded-xl border border-neutral-800 bg-neutral-900/40 text-neutral-300 hover:border-purple-500/50 hover:text-purple-400 transition-all duration-300 inline-block"
            >
              Resume
            </Link>
          </div>
        </div>

        {/* 連結網格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mediaLink.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 hover:border-purple-500/50 transition-all duration-300 hover:bg-neutral-900/80 hover:-translate-y-1 block backdrop-blur-sm"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold tracking-wide group-hover:text-purple-400 transition-colors">
                  {item.label}
                </h3>
                <span className="font-mono text-xs text-neutral-600 group-hover:text-purple-400 transition-colors">
                  ↗
                </span>
              </div>
              <p className="text-sm text-neutral-400 font-mono">
                {item.desc}
              </p>
            </a>
          ))}
        </div>
      </div>

      {/* 底部版權 */}
      <footer className="z-10 w-full max-w-4xl border-t border-neutral-800/60 pt-6 text-center font-mono text-xs text-neutral-600">
        © 2026 DaoHui.
      </footer>
    </main>
  );
}