import { Cards, EducationSection } from '../../styles/pages/education';
import { GoBackButton } from '../components/GoBackButton';

export default function Education() {
  return (
    <>
      <GoBackButton />
      <EducationSection>
        <h1>Education Section</h1>

        <Cards />
      </EducationSection>
    </>
  );
}
