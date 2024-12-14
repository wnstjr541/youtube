import React from "react";
import styles from "./video_detail.module.css";

const VideoDetail = ({ video, video: { snippet } }) => (
  <section className={styles.detail}>
    <iframe
      className={styles.video}
      type="text/html"
      width="80%"
      height="700px"
      src={`https://www.youtube.com/embed/${video.id}`}
    ></iframe>
    <div className={styles.titlebox}>
      <h2 className={styles.title}>{snippet.title}</h2>
      <h3 className={styles.chtitle}>{snippet.channelTitle}</h3>
      <pre className={styles.description}>{snippet.description}</pre>
    </div>
  </section>
);

export default VideoDetail;
