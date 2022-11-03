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

export const gETTracks$id$GET = (Constants, { id, market }) =>
  fetch(`https://api.spotify.com/v1/tracks/${id ?? ''}?${market ?? ''}=`, {
    headers: {
      Accept: 'application/json',
      Authorization:
        'Bearer BQCEJ2RW5TO2S63lS_2FQP7vXA2Ds45w2cGUAumlNgNZkd67cjmFVamP-OVLrgzFicU1m67WY9IOmokI0FryQ3I77yTDnSTZl00MGURdo_XTQEf3TZs_Sr-gSWj0wY0iHeYsl2GvvSv8gn2-hZ6Cr-JQiRLsGwKSJcGWQ-v2BHHCBb4',
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

export const useGETTracks$id$GET = (args, { refetchInterval } = {}) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['spotify_track', args],
    () => gETTracks$id$GET(Constants, args),
    {
      refetchInterval,
      onSuccess: () => queryClient.invalidateQueries(['spotify_tracks']),
    }
  );
};

export const FetchGETTracks$id$GET = ({
  children,
  onData = () => {},
  refetchInterval,
  id,
  market,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useGETTracks$id$GET(
    { id, market },
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

  return children({ loading, data, error, refetchGETTracks$id$: refetch });
};

export const tESTGETSearchGET = Constants =>
  fetch(
    `https://api.spotify.com/v1/search?limit=1&market=US&offset=5&q=remaster track:Doxy artist:Miles Davis&type=track,artist`,
    {
      headers: {
        Accept: 'application/json',
        Authorization:
          'Bearer BQCEJ2RW5TO2S63lS_2FQP7vXA2Ds45w2cGUAumlNgNZkd67cjmFVamP-OVLrgzFicU1m67WY9IOmokI0FryQ3I77yTDnSTZl00MGURdo_XTQEf3TZs_Sr-gSWj0wY0iHeYsl2GvvSv8gn2-hZ6Cr-JQiRLsGwKSJcGWQ-v2BHHCBb4',
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

export const useTESTGETSearchGET = (args, { refetchInterval } = {}) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(['search', args], () => tESTGETSearchGET(Constants, args), {
    refetchInterval,
    onSuccess: () => queryClient.invalidateQueries(['searches']),
  });
};

export const FetchTESTGETSearchGET = ({
  children,
  onData = () => {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useTESTGETSearchGET(
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

  return children({ loading, data, error, refetchTESTGETSearch: refetch });
};
