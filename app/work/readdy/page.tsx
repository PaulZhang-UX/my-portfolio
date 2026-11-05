import type { Metadata } from 'next';
import { PlaceholderProjectCaseStudy } from '../../../components/PlaceholderProjectCaseStudy';

export const metadata: Metadata = {
  title: 'Readdy AI · AI Website Building | Zhang Yong',
  description: 'Readdy AI website-building template and generation experience case study by Zhang Yong.',
};

export default function ReaddyProjectPage() {
  return <PlaceholderProjectCaseStudy projectId="01" />;
}
