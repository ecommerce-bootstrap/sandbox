export const verifyToken = async ({profileObj, tokenId}) => {
  const response = await fetch('http://localhost:7890/api/v1/directors/auth', {
    credentials: 'include',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      firstName: profileObj.givenName,
      lastName: profileObj.familyName,
      email: profileObj.email,
      directorImg: profileObj.imageUrl,
      tokenId
    })
  });
  return response;
};

