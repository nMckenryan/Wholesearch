import React from 'react';
import "./VideoItem.css";

// Contains a video for the VideoList and displays the thumbnail alongside the title.

const VideoItem = ({ video, onVideoSelect }) => {
    return ( 
        <div onClick={() => onVideoSelect(video)} className="video-item item"> 
            <img className="ui image" alt={video.snippet.title} src={video.snippet.thumbnails.default.url} />
            <div className="content"> {video.snippet.title} </div>
        </div>
    ); 
} 

export default VideoItem; 