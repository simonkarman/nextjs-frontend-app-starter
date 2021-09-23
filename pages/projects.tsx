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

const Card = styled.div`
  box-shadow: 1em;
  border: 1px solid gray;
  margin: 0.5em;
  padding: 0.5em;
`;

type ProjectsPageProps = InferGetStaticPropsType<typeof getStaticProps>;
const ProjectsPage: NextPage<ProjectsPageProps> = (props: ProjectsPageProps) => {
  const { projects } = props;
  const [fetching, fetchedProjects] = useProjects();
  return (
    <>
      <h1>Last 3 Projects (static)</h1>
      <p>Very fast because pre rendered and part of SEO, however need a rebuild to change</p>
      {projects.map(({ name, title, date }) => (
        <Card key={name}>
          <LinkTo href={`projects/${name}`}>
            {title}
            {' '}
            (
            {date}
            )
          </LinkTo>
        </Card>
      ))}
      <hr />
      <h1>Last 4 Projects (dynamic)</h1>
      <p>Slow because data needs to be fetched by client and not part of SEO, however does not need a rebuild to change</p>
      {fetching && (<div>Loading...</div>)}
      {fetching || (
        fetchedProjects?.items
          .sort((a, b) => b.fields.date.localeCompare(a.fields.date))
          .slice(0, 4)
          .map(({ fields: { name, title, date } }) => (
            <Card>
              <LinkTo href={`/projects/${name}`}>
                {title}
                {' '}
                (
                {date}
                )
              </LinkTo>
            </Card>
          ))
      )}
    </>
  );
};
export default ProjectsPage;
