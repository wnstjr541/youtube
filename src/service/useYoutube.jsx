import { useState, useCallback } from "react";

const useYoutube = (apiKey) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getRequestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const mostPopular = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=24&key=${apiKey}`,
        getRequestOptions
      );
      const result = await response.json();
      setVideos(result.items);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, [apiKey]);

  const search = useCallback(
    async (query) => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&q=${query}&type=video&key=${apiKey}`,
          getRequestOptions
        );
        const result = await response.json();
        const searchedVideos = result.items.map((item) => ({
          ...item,
          id: item.id.videoId,
        }));
        setVideos(searchedVideos);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    },
    [apiKey]
  );

  return {
    videos,
    loading,
    error,
    mostPopular,
    search,
  };
};

export default useYoutube;
