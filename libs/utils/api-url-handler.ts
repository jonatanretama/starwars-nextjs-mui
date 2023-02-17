const prepareUrl = (baseUrl: string, path: string) => {
  const base = baseUrl || 'http://localhost';

  return base + path;
};

export const SWAPI_URL = (path: string) =>
  prepareUrl(process.env['NEXT_PUBLIC_SWAPI_BASE_URL'], path);
