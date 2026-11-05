import { AppProvider } from '../context/ThemeLanguageContext';
import { InteractionAudio } from '../components/InteractionAudio';
import { MusicPlayer } from '../components/MusicPlayer';
import { SmoothFollower } from '../components/SmoothFollower';
import { SmoothScroll } from '../components/SmoothScroll';
import { StyleSwitcherFAB } from '../components/StyleSwitcherFAB';
import './globals.css';
import 'lenis/dist/lenis.css';

export const metadata = {
  title: 'Zhang Yong | Portfolio',
  description: 'Zhang Yong Personal Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh" className="scroll-smooth">
      <head>
        {/* Load Rajdhani for English Hacker Font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased transition-colors duration-500 ease-in-out md:cursor-none">
        <AppProvider>
          <SmoothScroll />
          <InteractionAudio />
          <MusicPlayer />
          <StyleSwitcherFAB />
          <SmoothFollower />
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
