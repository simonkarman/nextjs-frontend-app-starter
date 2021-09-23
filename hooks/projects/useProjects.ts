import { useAsync } from '..';
import { IProjectFields } from '../../@types/generated/contentful';
import { contentful } from '../contentful';

export const useProjects = () => useAsync(() => contentful().getEntries<IProjectFields>('project'), []);
