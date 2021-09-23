import { useAsync } from '..';
import { IProjectFields } from '../../@types/generated/contentful';
import { contentful } from '../contentful';

export const useProject = (name: string) => useAsync(async () => {
  const response = await contentful().getEntries<IProjectFields>({ content_type: 'project', 'fields.name': name });
  return response.items[0].fields;
}, []);
