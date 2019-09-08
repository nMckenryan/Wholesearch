import React from 'react';
import VideoItem from './VideoItem';  

// Renders the side bar that collects video items. a la Youtube's functionality

const VideoList = ({ videos, onVideoSelect }) => {
    const renderedList = videos.map((video) => { //Unwraps Video Array to display individual items.
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />;
    })

    return <div className="ui relaxed divided list" style = {{background: 'white'}}>{renderedList}</div>
}

export default VideoList;