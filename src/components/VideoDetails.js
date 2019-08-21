import React from 'react';

//Main component showing Video retrieved. Displays loaded video player with a description and title underneath.

const VideoDetails = ({ video }) => {
    if(!video) { //shows loading text if video not loaded
        return <div>Loading...</div>
    }

    const videoURL = `https://www.youtube.com/embed/${video.id.videoId}`; // ES2015 code to retrieve videoID

    return ( 
        <div className="ui segment">
            <div className="ui embed"> <iframe src={videoURL} title={video.snippet.title}/> </div> 
            <h4 className="ui header">{video.snippet.title} - {video.snippet.channelTitle}</h4> 
            <h6>{video.snippet.channelTitle} </h6> 
            <p>{video.snippet.description}</p>
        </div>
    );
}

export default VideoDetails;