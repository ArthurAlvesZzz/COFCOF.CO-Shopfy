import React from 'react';
import SubscriptionHero from '../components/sections/subscription/SubscriptionHero';
import SubscriptionTicker from '../components/sections/subscription/SubscriptionTicker';
import SubscriptionCertifications from '../components/sections/subscription/SubscriptionCertifications';
import SubscriptionHowItWorks from '../components/sections/subscription/SubscriptionHowItWorks';
import SubscriptionPlans from '../components/sections/subscription/SubscriptionPlans';
import SubscriptionCurators from '../components/sections/subscription/SubscriptionCurators';
import SubscriptionDossier from '../components/sections/subscription/SubscriptionDossier';
import SubscriptionComparison from '../components/sections/subscription/SubscriptionComparison';
import SubscriptionTimeline from '../components/sections/subscription/SubscriptionTimeline';
import SubscriptionManifesto from '../components/sections/subscription/SubscriptionManifesto';
import SubscriptionReviews from '../components/sections/subscription/SubscriptionReviews';
import SubscriptionCTA from '../components/sections/subscription/SubscriptionCTA';
import SubscriptionBottomCards from '../components/sections/subscription/SubscriptionBottomCards';

export default function Subscription() {
  return (
    <div className="subscription-page">
      <SubscriptionHero />
      <SubscriptionTicker />
      <SubscriptionCertifications />
      <SubscriptionHowItWorks />
      <SubscriptionPlans />
      <SubscriptionCurators />
      <SubscriptionDossier />
      <SubscriptionComparison />
      <SubscriptionTimeline />
      <SubscriptionManifesto />
      <SubscriptionReviews />
      <SubscriptionCTA />
      <SubscriptionBottomCards />
    </div>
  );
}
