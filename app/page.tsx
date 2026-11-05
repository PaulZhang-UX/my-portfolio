'use client';

import { useApp } from '../context/ThemeLanguageContext';
import { PillSelection } from '../components/PillSelection';
import { MainApp } from '../components/MainApp';
import { AnimatePresence } from 'framer-motion';

export default function Home() {
  const { style, activeStyle } = useApp();
  const currentStyle = style === 'bladerunner' ? 'hermes' : style ?? activeStyle;

  return (
    <AnimatePresence mode="wait">
      {style === null ? (
        <PillSelection key="pill-selection" />
      ) : (
        <MainApp key="main-app" activeStyle={currentStyle} />
      )}
    </AnimatePresence>
  );
}
