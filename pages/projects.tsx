import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';
import { LinkTo } from '../components/LinkTo';
import { getAllProjectIds, getProjectDetails, ProjectDetails } from '../hooks/useProjects';

export const getStaticProps: GetStaticProps<{ projects: ProjectDetails[] }> = async () => {
  const ids = await getAllProjectIds();
  return {
    props: {
      projects: await Promise.all(ids.map(getProjectDetails)),
    },
  };
};

type ProjectsPageProps = InferGetStaticPropsType<typeof getStaticProps>;
const ProjectsPage: NextPage<ProjectsPageProps> = (props: ProjectsPageProps) => {
  const { projects } = props;
  return (
    <>
      <h1>Projects</h1>
      {projects.map(({ id, title }) => (
        <>
          <div>
            <LinkTo href={`projects/${id}`}>
              <h3>{title}</h3>
            </LinkTo>
          </div>
        </>
      ))}
    </>
  );
};
export default ProjectsPage;
