import type {
  NextPage, GetStaticPaths, GetStaticProps, InferGetStaticPropsType,
} from 'next';
import { IProjectFields } from '../../@types/generated/contentful';
import { contentful } from '../../hooks/contentful';
import { LinkTo } from '../../components/LinkTo';

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = (await contentful().getEntries<IProjectFields>('project')).items
    .map((project) => project.fields);
  return {
    paths: projects.map((project) => ({ params: { name: project.name } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IProjectFields> = async (context) => {
  const name = context.params?.name as string;
  const entries = await contentful().getEntries<IProjectFields>({ content_type: 'project', 'fields.name': name });
  const item = entries.items[0];
  return {
    props: item.fields,
  };
};

type ProjectPageProps = InferGetStaticPropsType<typeof getStaticProps>;
const ProjectPage: NextPage<ProjectPageProps> = (props: ProjectPageProps) => {
  const {
    name, title, description, image,
  } = props;
  return (
    <>
      <h1>
        {title}
      </h1>
      <p>
        {description}
      </p>
      <img src={image.fields.file.url} alt="project" width="400" />
      <p>
        <a href={`https://www.simonkarman.nl/projects/${name}`}>Read more on simonkarman.nl...</a>
      </p>
      <p>
        <LinkTo href="/projects">
          Back to all projects.
        </LinkTo>
        |
        <LinkTo href="/">
          Go back home.
        </LinkTo>
      </p>
    </>
  );
};

export default ProjectPage;
