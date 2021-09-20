import type {
  NextPage, GetStaticPaths, GetStaticProps, InferGetStaticPropsType,
} from 'next';
import { getAllProjectIds, getProjectDetails } from '../../hooks/useProjects';

export const getStaticPaths: GetStaticPaths = async () => {
  const ids = await getAllProjectIds();
  return {
    paths: ids.map((id) => ({ params: { id } })),

    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;
  return {
    props: await getProjectDetails(id),
  };
};

const Project: NextPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { id, title } = props;
  return (
    <p>
      This is the project with id:
      {id}
      . And the title is:
      {title}
    </p>
  );
};

export default Project;
