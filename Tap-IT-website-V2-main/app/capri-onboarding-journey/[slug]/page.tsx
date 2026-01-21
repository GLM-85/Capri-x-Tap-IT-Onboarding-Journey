import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { phases } from '../data';
import PhaseDetailClient from './PhaseDetailClient';

export function generateStaticParams() {
  return phases.map((phase) => ({
    slug: phase.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const phase = phases.find((p) => p.slug === params.slug);
  if (!phase) {
    return {
      title: 'Capri Onboarding Journey – Fase | Tap-IT',
      description: 'Capri Onboarding Journey – detailpagina.',
    };
  }

  return {
    title: `Capri Onboarding Journey – Fase ${phase.number} | Tap-IT`,
    description: `Fase ${phase.number} – ${phase.title}. ${phase.shortDescription}`,
  };
}

export default function PhaseDetailPage({ params }: { params: { slug: string } }) {
  const phase = phases.find((p) => p.slug === params.slug);
  if (!phase) notFound();

  return <PhaseDetailClient phase={phase} allPhases={phases} />;
}

