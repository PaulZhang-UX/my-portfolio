import type { Metadata } from 'next';
import { MirrorCaseStudy } from '../../../components/MirrorCaseStudy';

export const metadata: Metadata = {
  title: 'Mirror — AI Styling Case Study | Zhang Yong',
  description: 'Mirror AI styling product design case study by Zhang Yong.',
};

export default function MirrorProjectPage() {
  return <MirrorCaseStudy />;
}
