import Image from 'next/image';
import { CardProfile, CardSection } from './styles';

export default function CardProfiles() {
  return (
    <>
      <CardSection>
        <CardProfile>
          <div className="header-card">JS</div>
        </CardProfile>

        <CardProfile>
          <div className="header-card">JS</div>
        </CardProfile>

        <CardProfile>
          <div className="header-card">JS</div>
        </CardProfile>
      </CardSection>
    </>
  );
}
