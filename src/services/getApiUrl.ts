export const getApiUrl = () => {
  if (process.env.NEXT_PUBLIC_APP_ENV === 'production') {
    return 'http://localhost:3000/api';
  } else if (process.env.NEXT_PUBLIC_APP_ENV === 'development') {
    return 'http://localhost:3000/api';
  }

  return 'http://localhost:3000/api';
};
