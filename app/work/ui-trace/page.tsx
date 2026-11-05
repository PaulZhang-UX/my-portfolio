import type { Metadata } from 'next';
import { PlaceholderProjectCaseStudy } from '../../../components/PlaceholderProjectCaseStudy';

export const metadata: Metadata = {
  title: 'UI Trace · Design System | Zhang Yong',
  description: 'UI Trace design system case study placeholder by Zhang Yong.',
};

export default function UiTraceProjectPage() {
  return <PlaceholderProjectCaseStudy projectId="03" />;
}
