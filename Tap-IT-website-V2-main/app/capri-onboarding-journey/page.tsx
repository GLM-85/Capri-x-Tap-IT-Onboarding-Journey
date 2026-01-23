import type { Metadata } from 'next';
import CapriOnboardingClient from './CapriOnboardingClient';

export const metadata: Metadata = {
  title: 'Capri Onboarding Journey | Tap-IT',
  description: 'Stap voor stap van onboarding naar een schaalbaar MSP-ecosysteem.',
};

export default function CapriOnboardingPage() {
  return <CapriOnboardingClient />;
}

