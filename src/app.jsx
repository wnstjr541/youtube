import React, { useState, useEffect } from "react";
import styles from "./app.module.css";
import VideoList from "./components/video_list/video_list";
import SearchHeader from "./components/search_header/search_header";
import VideoDetail from "./components/video_detail/video_detail";
import VideoMenu from "./components/video_meun/video_menu";
import useYoutube from "./service/useYoutube";
import VideoListDetail from "./components/video_list_detail/video_list_detail";

function App({ apiKey }) {
  const { videos, loading, error, mostPopular, search } = useYoutube(apiKey);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [menu, setMenu] = useState(false);

  const selectVideo = (video) => {
    setSelectedVideo(video);
    setMenu(true);
  };

  useEffect(() => {
    mostPopular(); // 초기 로딩 시 인기 동영상 호출
  }, [mostPopular]);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} mostPopular={mostPopular} />
      <section className={styles.content}>
        {!selectedVideo && <VideoMenu />}
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />{" "}
            <VideoListDetail
              videos={videos}
              onVideoClick={selectVideo}
              display={selectedVideo ? "list" : "grid"}
            />
          </div>
        )}
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {!loading && !error && !selectedVideo && (
          <div className={styles.list}>
            <VideoList
              videos={videos}
              onVideoClick={selectVideo}
              display={selectedVideo ? "list" : "grid"}
            />
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
