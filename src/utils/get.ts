export const getApiUrl = () => {
  if (process.env.NEXT_PUBLIC_APP_ENV === 'production') {
    return 'https://rnny.nl/api';
  } else if (process.env.NEXT_PUBLIC_APP_ENV === 'development') {
    return 'https://ronnyrook-nl.vercel.app/api';
  }

  return 'http://localhost:3000/api';
};

export const getSiteUrl = () => {
  if (process.env.NEXT_PUBLIC_APP_ENV === 'production') {
    return 'https://rnny.nl';
  } else if (process.env.NEXT_PUBLIC_APP_ENV === 'development') {
    return 'https://ronnyrook-nl.vercel.app';
  }

  return 'http://localhost:3000';
};
