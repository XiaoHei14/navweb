"use client";
import Link from "next/link";

export default function ResumePage() {
    // 2. 建立列印/存成 PDF 的函式
    const handleDownloadPDF = () => {
        window.print();
    };
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-neutral-100 flex flex-col items-center p-6 md:p-16 relative overflow-hidden selection:bg-purple-500 selection:text-white font-sans">

            {/* 背景裝飾光暈 */}
            <div className="absolute top-[-5%] left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-purple-600/15 to-cyan-500/15 blur-[140px] rounded-full pointer-events-none" />

            {/* 頂部工具列 (Toolbar) */}
            <div className="z-10 w-full max-w-3xl flex justify-between items-center border-b border-neutral-800 pb-6 mb-12">
                <Link
                    href="/"
                    className="font-mono text-sm text-neutral-400 hover:text-purple-400 transition-colors flex items-center gap-2"
                >
                    ← Back
                </Link>
                <button
                    onClick={handleDownloadPDF}
                    className="font-mono text-xs px-4 py-2 rounded-xl border border-neutral-800 bg-neutral-900/40 text-neutral-300 hover:border-purple-500/50 hover:text-purple-400 transition-all duration-300 flex items-center gap-2 cursor-pointer"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4m7-4l-5 5m5-5l5 5" />
                    </svg>
                    下載 PDF
                </button>
            </div>

            {/* 履歷主體內容 */}
            <article className="z-10 w-full max-w-3xl space-y-12">

                {/* 頭部資訊 (Head) */}
                <header className="space-y-4 border-b border-neutral-800/80 pb-8">
                    <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-[family-name:var(--font-anton)] text-white">
                            王筠皓
                        </h1>
                        <span className="font-mono text-neutral-400 text-sm md:text-base">
                            Yun-Hao Wang / DaoHui
                        </span>
                    </div>
                    <p className="font-mono text-sm md:text-base text-purple-400 font-medium">
                        資安研究員 ｜ 軟體開發
                    </p>

                    {/* 聯絡方式 */}
                    <div className="flex flex-wrap gap-4 pt-2 font-mono text-xs md:text-sm text-neutral-400">
                        <span className="flex items-center gap-1.5">📍 台灣，GMT+8</span>
                        {/* 已將網址修正為你的 GitHub 帳號 */}
                        <a href="https://github.com/XiaoHei14" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-colors flex items-center gap-1.5">
                            💻 github.com/XiaoHei14
                        </a>
                    </div>
                </header>

                {/* 簡介 */}
                <section className="space-y-3">
                    <h2 className="text-xl font-bold font-mono tracking-wider text-neutral-200 border-l-2 border-purple-500 pl-3">
                        簡介
                    </h2>
                    <p className="text-neutral-300 font-mono text-sm leading-relaxed">
                        一個玩資安的高中生，興趣雲端服務應用，現在研究 FPGA 跟 AI 資安的議題。
                    </p>
                </section>

                {/* 實務經驗 */}
                <section className="space-y-6">
                    <h2 className="text-xl font-bold font-mono tracking-wider text-neutral-200 border-l-2 border-purple-500 pl-3">
                        實務經驗
                    </h2>

                    <div className="p-5 rounded-xl bg-neutral-900/40 border border-neutral-800/80 space-y-3">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-1 font-mono text-sm">
                            <span className="font-bold text-neutral-200">AIS3 Junior</span>
                            <span className="text-neutral-500 text-xs">2026</span>
                        </div>
                        <div className="text-xs font-mono text-purple-400">學員</div>
                        <ul className="list-disc list-inside space-y-1.5 text-xs md:text-sm text-neutral-300 font-mono">
                            <li>AIS3 新型態高中職資安課程</li>
                        </ul>
                    </div>

                    <div className="p-5 rounded-xl bg-neutral-900/40 border border-neutral-800/80 space-y-3">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-1 font-mono text-sm">
                            <span className="font-bold text-neutral-200">AIS3 好厲害</span>
                            <span className="text-neutral-500 text-xs">2026 - now</span>
                        </div>
                        <div className="text-xs font-mono text-purple-400">學員</div>
                        <ul className="list-disc list-inside space-y-1.5 text-xs md:text-sm text-neutral-300 font-mono">
                            <li>AIS3 新型態資安實務暑期課程</li>
                        </ul>
                    </div>
                </section>

                {/* 技能 */}
                <section className="space-y-4 pb-12">
                    <h2 className="text-xl font-bold font-mono tracking-wider text-neutral-200 border-l-2 border-purple-500 pl-3">
                        技能
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-mono text-xs">
                        <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/80">
                            <span className="text-purple-400 font-bold block mb-1">資安</span>
                            <span className="text-neutral-300">CTF、Web 安全、滲透測試基礎、弱點掃描、漏洞分析、機器學習資料投毒</span>
                        </div>
                        <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/80">
                            <span className="text-purple-400 font-bold block mb-1">開發</span>
                            <span className="text-neutral-300">Python、C/C++、TypeScript、JavaScript、Node.js、Lua、Astro、Next.js、Tailwind CSS</span>
                        </div>
                        <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/80">
                            <span className="text-purple-400 font-bold block mb-1">基礎設施 / 硬體</span>
                            <span className="text-neutral-300">Linux、Docker、WireGuard VPN、Proxmox VE、VHDL 邏輯設計、FPGA 應用</span>
                        </div>
                    </div>
                </section>

            </article>

            {/* 底部版權 */}
            <footer className="z-10 w-full max-w-3xl border-t border-neutral-800/60 pt-6 text-center font-mono text-xs text-neutral-600">
                © 2026 DaoHui.
            </footer>
        </main>
    );
}
