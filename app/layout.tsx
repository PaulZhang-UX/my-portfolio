import { AppProvider } from '../context/ThemeLanguageContext';
import { Navbar } from '../components/Navbar';
import { SmoothFollower } from '../components/SmoothFollower';
import { GlobalBackground } from '../components/GlobalBackground';
import { MusicPlayer } from '../components/MusicPlayer';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh" className="scroll-smooth dark hermes">
      <body className="antialiased transition-colors duration-500 ease-in-out md:cursor-none">
        <AppProvider>
          {/* 全局常驻底层动态背景 */}
          <GlobalBackground />

          {/* 桌面端高性能鼠标跟随器 */}
          <SmoothFollower />

          {/* 全局背景音乐播放器 */}
          <MusicPlayer />
          
          <Navbar />
          
          {/* 提升内容层级 */}
          <main className="relative z-10 pt-16">
            {children}
          </main>
        </AppProvider>
      </body>
    </html>
  );
}
