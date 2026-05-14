import AdidasHero from './AdidasHero';
import CampaignConcept from './CampaignConcept';
import SocialSystem from './SocialSystem';
import DigitalWebsite from './DigitalWebsite';
import CRMDesigns from './CRMDesigns';
import PresentationDeck from './PresentationDeck';
import OOHBillboards from './OOHBillboards';

interface AdidasProjectProps {
  onBack?: () => void;
}

export default function AdidasProject({ onBack }: AdidasProjectProps) {
  return (
    <div className="min-h-screen">
      <AdidasHero />
      <CampaignConcept />
      <SocialSystem />
      <DigitalWebsite />
      <CRMDesigns />
      <PresentationDeck />
      <OOHBillboards />

      <footer className="py-16 px-6 md:px-12 bg-[#0D0D0D] text-white text-center">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm tracking-wider hover:text-[#FF6B3D] transition-colors cursor-pointer"
        >
          ← BACK TO PORTFOLIO
        </button>
      </footer>
    </div>
  );
}
