import * as React from 'react';
import {
  useQuery,
  useMutation,
  useIsFetching,
  useQueryClient,
} from 'react-query';
import useFetch from 'react-fetch-hook';
import { useIsFocused } from '@react-navigation/native';
import usePrevious from '../utils/usePrevious';
import * as GlobalVariables from '../config/GlobalVariableContext';

export const authMeGET = Constants =>
  fetch(`https://x8ki-letl-twmt.n7.xano.io/api:wjEHj1Wa/auth/me`, {
    headers: {
      Accept: 'application/json',
      Authorization:
        'eyJhbGciOiJBMjU2S1ciLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwiemlwIjoiREVGIn0.uIMKa9OgHz7Ew6BwsPA7TjNYHXmk5eTTVQfH47wPvUepkd8DX3OK_WPuR_TM477455meAgcnINK_Nf0dI2sCFwQ58dQ5jhpg.gyYvuglZJsneiP4AbJYDpQ.iYDy964GRhCvScWV-cgX15h6zakR5g6N2w7fT7wvmDCoeoBxuyse9gw09DDH8GBK9xZfJRbQTsXUXeNvUdMtRlkXP0Ig1Y7LFqMkUE0EDBQ47nEXkuKM6whbyVnHur3XWdJt9AU5oGkPtHcc3GoRDVpDY4W6pVHD-PT1YGEC9Ys.NNa_n1y_bMS9W7hhFXYGMQ3faQUIIQjHLgz1p4B1Nj8',
      'Content-Type': 'application/json',
    },
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useAuthMeGET = () => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(`https://x8ki-letl-twmt.n7.xano.io/api:wjEHj1Wa/auth/me`, {
    depends: [isFocused],
    headers: {
      Accept: 'application/json',
      Authorization:
        'eyJhbGciOiJBMjU2S1ciLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwiemlwIjoiREVGIn0.uIMKa9OgHz7Ew6BwsPA7TjNYHXmk5eTTVQfH47wPvUepkd8DX3OK_WPuR_TM477455meAgcnINK_Nf0dI2sCFwQ58dQ5jhpg.gyYvuglZJsneiP4AbJYDpQ.iYDy964GRhCvScWV-cgX15h6zakR5g6N2w7fT7wvmDCoeoBxuyse9gw09DDH8GBK9xZfJRbQTsXUXeNvUdMtRlkXP0Ig1Y7LFqMkUE0EDBQ47nEXkuKM6whbyVnHur3XWdJt9AU5oGkPtHcc3GoRDVpDY4W6pVHD-PT1YGEC9Ys.NNa_n1y_bMS9W7hhFXYGMQ3faQUIIQjHLgz1p4B1Nj8',
      'Content-Type': 'application/json',
    },
  });
};

export const FetchAuthMeGET = ({
  children,
  onData = () => {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(`https://x8ki-letl-twmt.n7.xano.io/api:wjEHj1Wa/auth/me`, {
    depends: [isFocused],
    headers: {
      Accept: 'application/json',
      Authorization:
        'eyJhbGciOiJBMjU2S1ciLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwiemlwIjoiREVGIn0.uIMKa9OgHz7Ew6BwsPA7TjNYHXmk5eTTVQfH47wPvUepkd8DX3OK_WPuR_TM477455meAgcnINK_Nf0dI2sCFwQ58dQ5jhpg.gyYvuglZJsneiP4AbJYDpQ.iYDy964GRhCvScWV-cgX15h6zakR5g6N2w7fT7wvmDCoeoBxuyse9gw09DDH8GBK9xZfJRbQTsXUXeNvUdMtRlkXP0Ig1Y7LFqMkUE0EDBQ47nEXkuKM6whbyVnHur3XWdJt9AU5oGkPtHcc3GoRDVpDY4W6pVHD-PT1YGEC9Ys.NNa_n1y_bMS9W7hhFXYGMQ3faQUIIQjHLgz1p4B1Nj8',
      'Content-Type': 'application/json',
    },
  });

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchAuthMe: refetch });
};

export const gETTracksGET = Constants =>
  fetch(`https://x8ki-letl-twmt.n7.xano.io/api:wjEHj1Wa/tracks`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useGETTracksGET = (args, { refetchInterval } = {}) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(['tracks', args], () => gETTracksGET(Constants, args), {
    refetchInterval,
  });
};

export const FetchGETTracksGET = ({
  children,
  onData = () => {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useGETTracksGET(
    {},
    { refetchInterval }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchGETTracks: refetch });
};

export const gETTracksByUserGET = (Constants, { userid }) =>
  fetch(
    `https://x8ki-letl-twmt.n7.xano.io/api:wjEHj1Wa/tracks_byUser?user_id=${
      userid ?? ''
    }`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useGETTracksByUserGET = (args, { refetchInterval } = {}) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(['tracks', args], () => gETTracksByUserGET(Constants, args), {
    refetchInterval,
  });
};

export const FetchGETTracksByUserGET = ({
  children,
  onData = () => {},
  refetchInterval,
  userid,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useGETTracksByUserGET(
    { userid },
    { refetchInterval }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchGETTracksByUser: refetch });
};

export const gETTracksExtGET = (Constants, { user_id }) =>
  fetch(
    `https://x8ki-letl-twmt.n7.xano.io/api:wjEHj1Wa/tracks_ext?user_id=${
      user_id ?? ''
    }`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useGETTracksExtGET = (args, { refetchInterval } = {}) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(['tracks', args], () => gETTracksExtGET(Constants, args), {
    refetchInterval,
  });
};

export const FetchGETTracksExtGET = ({
  children,
  onData = () => {},
  refetchInterval,
  user_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useGETTracksExtGET(
    { user_id },
    { refetchInterval }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchGETTracksExt: refetch });
};

export const loginPOST = (Constants, { email, password }) =>
  fetch(`https://x8ki-letl-twmt.n7.xano.io/api:wjEHj1Wa/auth/login`, {
    body: JSON.stringify({ email: email, password: password }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useLoginPOST = ({ email, password }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(`https://x8ki-letl-twmt.n7.xano.io/api:wjEHj1Wa/auth/login`, {
    body: JSON.stringify({ email: email, password: password }),
    depends: [isFocused],
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  });
};

export const FetchLoginPOST = ({
  children,
  onData = () => {},
  refetchInterval,
  email,
  password,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(`https://x8ki-letl-twmt.n7.xano.io/api:wjEHj1Wa/auth/login`, {
    body: JSON.stringify({ email: email, password: password }),
    depends: [isFocused],
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  });

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchLogin: refetch });
};

export const pOSTFeedbackPOST = (Constants, { feedback, userId, username }) =>
  fetch(`https://x8ki-letl-twmt.n7.xano.io/api:wjEHj1Wa/feedback`, {
    body: JSON.stringify({
      username: username,
      user_id: userId,
      feedback: feedback,
    }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const usePOSTFeedbackPOST = initialArgs => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();

  return useMutation(
    args => pOSTFeedbackPOST(Constants, { ...initialArgs, ...args }),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('feedback', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('feedback');
        queryClient.invalidateQueries('feedbacks');
      },
    }
  );
};

export const FetchPOSTFeedbackPOST = ({
  children,
  onData = () => {},
  refetchInterval,
  feedback,
  userId,
  username,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    loading,
    data,
    error,
    mutate: refetch,
  } = usePOSTFeedbackPOST({ feedback, userId, username }, { refetchInterval });

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchPOSTFeedback: refetch });
};

export const pOSTLikesPOST = (Constants, { tracks_id, users_id }) =>
  fetch(`https://x8ki-letl-twmt.n7.xano.io/api:wjEHj1Wa/likes`, {
    body: JSON.stringify({ user_id: users_id, tracks_id: tracks_id }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const usePOSTLikesPOST = initialArgs => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();

  return useMutation(
    args => pOSTLikesPOST(Constants, { ...initialArgs, ...args }),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('likes', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('like');
        queryClient.invalidateQueries('likes');
      },
    }
  );
};

export const FetchPOSTLikesPOST = ({
  children,
  onData = () => {},
  refetchInterval,
  tracks_id,
  users_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    loading,
    data,
    error,
    mutate: refetch,
  } = usePOSTLikesPOST({ tracks_id, users_id }, { refetchInterval });

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchPOSTLikes: refetch });
};

export const pOSTTracksPOST = (
  Constants,
  { artist, description, title, url, users_id }
) =>
  fetch(`https://x8ki-letl-twmt.n7.xano.io/api:wjEHj1Wa/tracks`, {
    body: JSON.stringify({
      trackUrl: url,
      title: title,
      artist: artist,
      description: description,
      users_id: users_id,
    }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const usePOSTTracksPOST = initialArgs => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();

  return useMutation(
    args => pOSTTracksPOST(Constants, { ...initialArgs, ...args }),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('tracks', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('track');
        queryClient.invalidateQueries('tracks');
      },
    }
  );
};

export const FetchPOSTTracksPOST = ({
  children,
  onData = () => {},
  refetchInterval,
  artist,
  description,
  title,
  url,
  users_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    loading,
    data,
    error,
    mutate: refetch,
  } = usePOSTTracksPOST(
    { artist, description, title, url, users_id },
    { refetchInterval }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchPOSTTracks: refetch });
};

export const pOSTTracksExtPOST = (Constants, { user_id }) =>
  fetch(
    `https://x8ki-letl-twmt.n7.xano.io/api:wjEHj1Wa/tracks_ext?user_id=${
      user_id ?? ''
    }`,
    {
      body: JSON.stringify({ user_id: user_id }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const usePOSTTracksExtPOST = initialArgs => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();

  return useMutation(
    args => pOSTTracksExtPOST(Constants, { ...initialArgs, ...args }),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('tracks', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('track');
        queryClient.invalidateQueries('tracks');
      },
    }
  );
};

export const FetchPOSTTracksExtPOST = ({
  children,
  onData = () => {},
  refetchInterval,
  user_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    loading,
    data,
    error,
    mutate: refetch,
  } = usePOSTTracksExtPOST({ user_id }, { refetchInterval });

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchPOSTTracksExt: refetch });
};

export const signupPOST = (Constants, { email, name, password, username }) =>
  fetch(`https://x8ki-letl-twmt.n7.xano.io/api:wjEHj1Wa/auth/signup`, {
    body: JSON.stringify({
      name: name,
      username: username,
      email: email,
      password: password,
    }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useSignupPOST = ({ email, name, password, username }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://x8ki-letl-twmt.n7.xano.io/api:wjEHj1Wa/auth/signup`,
    {
      body: JSON.stringify({
        name: name,
        username: username,
        email: email,
        password: password,
      }),
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  );
};

export const FetchSignupPOST = ({
  children,
  onData = () => {},
  refetchInterval,
  email,
  name,
  password,
  username,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(`https://x8ki-letl-twmt.n7.xano.io/api:wjEHj1Wa/auth/signup`, {
    body: JSON.stringify({
      name: name,
      username: username,
      email: email,
      password: password,
    }),
    depends: [isFocused],
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  });

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchSignup: refetch });
};
