import React from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
import VideoList from './VideoList'; 
import VideoDetails from './VideoDetails';
import wholesomeLogo from '../wholesomeLogo.png';

document.body.style = 'background: #FBCDCD;';

const KEY = "AIzaSyAEeo4ndSqzJHtRCiJJ5EjIPCIbVUnWGA4";

class App extends React.Component {
    state = { videos: []};

    onVideoSelect = video => {
        this.setState({selectedVideo: video});
    }

    componentDidMount = () => {
        this.onTermSubmit("Kittens") //Builds and loads a default search to show on launch
    }

    onTermSubmit = async term => {
        const response = await axios.get('/search', { //Originally as separate class, but second 'params' overwrote data. outstanding.
            baseURL: 'https://www.googleapis.com/youtube/v3',
            params: {
                q: term + " -channels", //omits channels from showing in search
                part: 'snippet',
                maxResults: 5,
                key: KEY
            }
        })
        this.setState({ 
            videos: response.data.items,
            selectedVideo: response.data.items[0] //Sets default video - first result in large window
        
        });
    };

    render() {
        return <div className="ui container">
            <div className="ui fluid centered huge image"><img src={wholesomeLogo} alt="logo"/></div>
            <SearchBar onFormSubmit={this.onTermSubmit}/> 
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column"><VideoDetails video={this.state.selectedVideo}/></div>
                    <div className="five wide column"><VideoList onVideoSelect={this.onVideoSelect} videos={ this.state.videos }/> </div>
                </div>
            </div>
        </div>;
    }
}

export default App;