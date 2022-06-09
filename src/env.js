const {
  VITE_API_URL,
  VITE_MICROSOFT_REDIRECT_URI = 'https://localhost:80/oauth',
} = import.meta.env;

export { VITE_API_URL, VITE_MICROSOFT_REDIRECT_URI };
