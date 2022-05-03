export const setToken = jwtToken => (
    {
      type: 'SET_TOKEN',
      payload: jwtToken,
    }
  );

  export const setId = id => (
    {
      type: 'SET_ID',
      payload: id,
    }
  );