import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';
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

const Project = ({ name, title, date }: IProjectFields) => (
  <p key={name}>
    <LinkTo href={`/projects/${name}`}>
      {title}
      {' '}
      (
      {date}
      )
    </LinkTo>
  </p>
);

type ProjectsPageProps = InferGetStaticPropsType<typeof getStaticProps>;
const ProjectsPage: NextPage<ProjectsPageProps> = (props: ProjectsPageProps) => {
  const { projects } = props;
  const [fetching, fetchedProjects] = useProjects();
  return (
    <>
      <p>
        <LinkTo href="/">
          Go back home.
        </LinkTo>
      </p>
      <h1>Last 3 Projects (static)</h1>
      <p>
        Fast because pre-rendered and part of Search Engine Optimization (SEO),
        however might get out of date since this needs a rebuild to change.
      </p>
      {projects.map(Project)}

      <h1>Last 4 Projects (dynamic)</h1>
      <p>
        Slower because data needs to be fetched by client and not part of SEO,
        however more up to date since it does not need a rebuild to change.
      </p>
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
