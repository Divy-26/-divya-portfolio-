import NikeHero from './NikeHero';
import CampaignIdea from './CampaignIdea';
import SocialCampaign from './SocialCampaign';
import MobileExperience from './MobileExperience';
import DigitalBillboards from './DigitalBillboards';
import CRMEmail from './CRMEmail';
import PresentationDeck from './PresentationDeck';
import BrandingSystem from './BrandingSystem';

interface NikeProjectProps {
  onBack?: () => void;
}

export default function NikeProject({ onBack }: NikeProjectProps) {
  return (
    <div className="min-h-screen">
      <NikeHero />
      <CampaignIdea />
      <SocialCampaign />
      <MobileExperience />
      <DigitalBillboards />
      <CRMEmail />
      <PresentationDeck />
      <BrandingSystem />

      <footer className="py-16 px-6 md:px-12 bg-[#0D0D0D] text-white text-center">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm tracking-wider hover:text-orange-500 transition-colors cursor-pointer"
        >
          ← BACK TO PORTFOLIO
        </button>
      </footer>
    </div>
  );
}
