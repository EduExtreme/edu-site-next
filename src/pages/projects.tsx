import { ProjectsSection } from '../../styles/pages/projects';
import { GoBackButton } from '../components/GoBackButton';
import { TodoProject } from '../components/TodoProject';

export default function Education() {
  return (
    <>
      <GoBackButton />
      <ProjectsSection>
        <TodoProject />
      </ProjectsSection>
    </>
  );
}
