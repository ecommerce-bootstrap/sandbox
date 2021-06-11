export const verifyToken = async () => {
  const response = await fetch('http://localhost:7890/api/v1/directors/auth', {
    credentials: 'include',
  });
  return response;
};
