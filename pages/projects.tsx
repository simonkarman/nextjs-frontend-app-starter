import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';
import styled from 'styled-components';
import { IProjectFields } from '../@types/generated/contentful';
import { LinkTo } from '../components/LinkTo';
import { useProjects } from '../hooks';
import { contentful } from '../hooks/contentful';

export const getStaticProps: GetStaticProps<{ projects: IProjectFields[] }> = async () => ({
  props: {
    projects: (await contentful().getEntries<IProjectFields>('project')).items
      .map((project) => project.fields)
      .sort((a, b) => b.date.localeCompare(a.date))
      .slice(0, 3),
  },
});

const Box = styled.div`
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);;
  border: 1px solid gray;
  margin: 0.5em;
  padding: 0.5em;
`;

const Project = ({ name, title, date }: IProjectFields) => (
  <Box key={name}>
    <LinkTo href={`/projects/${name}`}>
      {title}
      {' '}
      (
      {date}
      )
    </LinkTo>
  </Box>
);

type ProjectsPageProps = InferGetStaticPropsType<typeof getStaticProps>;
const ProjectsPage: NextPage<ProjectsPageProps> = (props: ProjectsPageProps) => {
  const { projects } = props;
  const [fetching, fetchedProjects] = useProjects();
  return (
    <>
      <h1>Last 3 Projects (static)</h1>
      <p>Very fast because pre rendered and part of SEO, however need a rebuild to change</p>
      {projects.map(Project)}
      <hr />
      <h1>Last 4 Projects (dynamic)</h1>
      <p>Slow because data needs to be fetched by client and not part of SEO, however does not need a rebuild to change</p>
      {fetching && (<div>Loading...</div>)}
      {fetching || (
        fetchedProjects?.items
          .map((project) => project.fields)
          .sort((a, b) => b.date.localeCompare(a.date))
          .slice(0, 4)
          .map(Project)
      )}
    </>
  );
};
export default ProjectsPage;
