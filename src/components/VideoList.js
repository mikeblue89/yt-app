import React from "react";
import VideoItem from "./VideoItem";
class VideoList extends React.Component {
  render() {
    const { videos, onVideoSelect } = this.props;
    const videoList = videos.map((video) => {
      return (
        <VideoItem
          key={video.id.videoId}
          onVideoSelect={onVideoSelect}
          video={video}
        />
      );
    });
    return <div className="ui relaxed divided list">{videoList}</div>;
  }
}

export default VideoList;
