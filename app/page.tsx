import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white">
      {/* 헤더 */}
      <header className="flex justify-between items-center px-8 py-6">
        <h1 className="text-2xl font-bold">MySite</h1>
        <nav className="flex gap-6 text-lg">
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      {/* 메인 Hero 섹션 */}
      <main className="flex flex-1 flex-col items-center justify-center text-center px-6">
        <h2 className="text-5xl sm:text-6xl font-extrabold mb-6 drop-shadow-lg">
          Hello, I’m <span className="text-yellow-300">Your Name</span>
        </h2>
        <p className="text-lg sm:text-xl max-w-2xl mb-8">
          I’m a passionate developer who loves building creative web experiences.  
          Scroll down to see my work!
        </p>

        <a
          href="#projects"
          className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow hover:bg-yellow-300 transition"
        >
          View Projects ↓
        </a>
      </main>

      {/* 푸터 */}
      <footer className="text-center py-6 bg-black/30 text-sm">
        © 2025 MySite — Built with Next.js & Tailwind
      </footer>
    </div>
  );
}
