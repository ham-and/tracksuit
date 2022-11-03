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

export const gETAccountDetailsGET = Constants =>
  fetch(`https://api.airtable.com/v0/appxefYt9wJHMWFw0/users`, {
    headers: {
      Accept: 'application/json',
      Authorization: Constants['Airtable_Authorization'],
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

export const useGETAccountDetailsGET = (args, { refetchInterval } = {}) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['users', args],
    () => gETAccountDetailsGET(Constants, args),
    {
      refetchInterval,
    }
  );
};

export const FetchGETAccountDetailsGET = ({
  children,
  onData = () => {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useGETAccountDetailsGET(
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

  return children({ loading, data, error, refetchGETAccountDetails: refetch });
};

export const gETTracksGET = Constants =>
  fetch(`https://api.airtable.com/v0/appxefYt9wJHMWFw0/tracks`, {
    headers: {
      Accept: 'application/json',
      Authorization: Constants['Airtable_Authorization'],
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

export const gETTracksSortedGET = (Constants, { direction, field }) =>
  fetch(
    `https://api.airtable.com/v0/appxefYt9wJHMWFw0/tracks?sort[0][direction]=${
      direction ?? ''
    }&sort[0][field]=${field ?? ''}`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['Airtable_Authorization'],
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

export const useGETTracksSortedGET = (args, { refetchInterval } = {}) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(['tracks', args], () => gETTracksSortedGET(Constants, args), {
    refetchInterval,
  });
};

export const FetchGETTracksSortedGET = ({
  children,
  onData = () => {},
  refetchInterval,
  direction,
  field,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useGETTracksSortedGET(
    { direction, field },
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

  return children({ loading, data, error, refetchGETTracksSorted: refetch });
};

export const gETTracksByUserGET = Constants =>
  fetch(`https://api.airtable.com/v0/appxefYt9wJHMWFw0/tracks`, {
    headers: {
      Accept: 'application/json',
      Authorization: Constants['Airtable_Authorization'],
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
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useGETTracksByUserGET(
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

  return children({ loading, data, error, refetchGETTracksByUser: refetch });
};

export const pOSTFeedbackPOST = (Constants, { feedback }) =>
  fetch(`https://api.airtable.com/v0/appxefYt9wJHMWFw0/feedback`, {
    body: JSON.stringify({ records: [{ fields: { Feedback: feedback } }] }),
    headers: {
      Accept: 'application/json',
      Authorization: Constants['Airtable_Authorization'],
      'Content-Type': 'application/json',
    },
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
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    loading,
    data,
    error,
    mutate: refetch,
  } = usePOSTFeedbackPOST({ feedback }, { refetchInterval });

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

export const pOSTTracks2POST = (Constants, { description, name, url, users }) =>
  fetch(`https://api.airtable.com/v0/appxefYt9wJHMWFw0/tracks`, {
    body: JSON.stringify({
      fields: {
        Users: [users],
        Name: name,
        trackUrl: url,
        description: description,
      },
      typecast: true,
    }),
    headers: {
      Accept: 'application/json',
      Authorization: Constants['Airtable_Authorization'],
      'Content-Type': 'application/json',
    },
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

export const usePOSTTracks2POST = initialArgs => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();

  return useMutation(
    args => pOSTTracks2POST(Constants, { ...initialArgs, ...args }),
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

export const FetchPOSTTracks2POST = ({
  children,
  onData = () => {},
  refetchInterval,
  description,
  name,
  url,
  users,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    loading,
    data,
    error,
    mutate: refetch,
  } = usePOSTTracks2POST(
    { description, name, url, users },
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

  return children({ loading, data, error, refetchPOSTTracks2: refetch });
};

export const postNew$UsersPOST = (
  Constants,
  { email, fullname, password, username }
) =>
  fetch(`https://api.airtable.com/v0/appxefYt9wJHMWFw0/users`, {
    body: JSON.stringify({
      records: [
        {
          fields: {
            Username: username,
            Email: email,
            Password: password,
            Name: fullname,
          },
        },
      ],
    }),
    headers: {
      Accept: 'application/json',
      Authorization: Constants['Airtable_Authorization'],
      'Content-Type': 'application/json',
    },
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

export const usePostNew$UsersPOST = initialArgs => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();

  return useMutation(
    args => postNew$UsersPOST(Constants, { ...initialArgs, ...args }),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('users', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('user');
        queryClient.invalidateQueries('users');
      },
    }
  );
};

export const FetchPostNew$UsersPOST = ({
  children,
  onData = () => {},
  refetchInterval,
  email,
  fullname,
  password,
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
  } = usePostNew$UsersPOST(
    { email, fullname, password, username },
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

  return children({ loading, data, error, refetchPostNew$Users: refetch });
};

export const tEST$PostWithUserIDPOST = (Constants, { users }) =>
  fetch(`https://api.airtable.com/v0/appxefYt9wJHMWFw0/tracks`, {
    body: JSON.stringify({ fields: { Users: [users] }, typecast: true }),
    headers: {
      Accept: 'application/json',
      Authorization: Constants['Airtable_Authorization'],
      'Content-Type': 'application/json',
    },
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

export const useTEST$PostWithUserIDPOST = initialArgs => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();

  return useMutation(
    args => tEST$PostWithUserIDPOST(Constants, { ...initialArgs, ...args }),
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

export const FetchTEST$PostWithUserIDPOST = ({
  children,
  onData = () => {},
  refetchInterval,
  users,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    loading,
    data,
    error,
    mutate: refetch,
  } = useTEST$PostWithUserIDPOST({ users }, { refetchInterval });

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

  return children({
    loading,
    data,
    error,
    refetchTEST$PostWithUserID: refetch,
  });
};
