export type ProjectDetails = {
  id: string;
  title: string;
}

// Make sure they are ordered from latest to oldest
export const getAllProjectIds = async () => [
  'one',
  'three',
  'four',
];

export const getProjectDetails = async (id: string): Promise<ProjectDetails> => ({
  id,
  title: `Project ${id}`,
});
