type CustomFetchOptions = RequestInit & {
  headers?: Record<string, string>;
};

export const customFetch = (url: string, options: CustomFetchOptions = {}): Promise<Response> => {
  const defaultHeaders: Record<string, string> = {
    ...(process.env.API_KEY ? {
      "x-api-key": process.env.API_KEY,
    } : {}),
  };

  return fetch(url, {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  });
};