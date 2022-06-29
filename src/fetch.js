import { VITE_API_URL } from './env';

export default (path, options) =>
  fetch(`${VITE_API_URL}${path}`, {
    credentials: 'include',
    ...options,
  })
    .then(result => result.json())
    .then(({ error, result }) => {
      if (error) throw new Error(error);
      return result;
    });
