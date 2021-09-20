import { getAllProjectIds } from '../../hooks/useProjects';

describe('Utils Projects', () => {
  it('is mocked', async () => {
    const result = await getAllProjectIds();
    expect(result).toStrictEqual(['one', 'three', 'four']);
  });
});
