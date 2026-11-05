import type { Metadata } from 'next';
import { PlaceholderProjectCaseStudy } from '../../../components/PlaceholderProjectCaseStudy';

export const metadata: Metadata = {
  title: 'Meituan · UX Research | Zhang Yong',
  description: 'Meituan UX research case study placeholder by Zhang Yong.',
};

export default function MeituanProjectPage() {
  return <PlaceholderProjectCaseStudy projectId="05" />;
}
