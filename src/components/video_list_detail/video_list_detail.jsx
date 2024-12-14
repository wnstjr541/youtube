import React from "react";
import VideoItem from "../video_item/video_item";
import styles from "./video_list.module.css";

const VideoListDetail = ({ videos, onVideoClick, display }) => (
  <>
    <ul className={styles.videosDetail}>
      {videos.map((video) => (
        <VideoItem
          key={video.id}
          video={video}
          onVideoClick={onVideoClick}
          display={display}
        />
      ))}
    </ul>
  </>
);

export default VideoListDetail;
