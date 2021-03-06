import React from "react";

class VideoDetail extends React.Component {
  render() {
    const { video } = this.props;
    if (!video) {
      return (
        <div>
        <div className="ui segment">
          <h4 className="ui header">Loading...</h4>
        </div>
      </div>
      );
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
      <div>
          <div className="ui embed">
              <iframe title="videoPlayer" src={videoSrc} />
          </div>
        <div className="ui segment">
          <h4 className="ui header">{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    );
  }
}

export default VideoDetail;
