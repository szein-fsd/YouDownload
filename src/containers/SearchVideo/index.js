import React, {Component} from 'react';
import SeriesList from '../../components/SeriesList';
import Loader from '../../components/Loader';
import Intro from '../../components/Intro';
import Video from '../../components/Video';
import validator from 'validator'


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0effab7ed3msh244890686319c97p184bb1jsne46c277da671',
		'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
	}
};

// streamingData:

class SearchVideo extends Component{
    state={
        url: '',
        validUrl: false,
        videoId: '' ,
        videoDetails: {},
        isFetching: false,
        bGo: false
    }

    

    componentDidMount() {
    }

    onInputChange = e => {
        if(validator.isURL(e.target.value))
        {
            console.log("URL Valid");
            var vId = e.target.value.split('?v=')[1].split('&')[0];
            this.setState({validUrl: true, videoId: vId, url: e.target.value});
        }
        else
        {
            console.log("Not URL Valid");
        }
    }

    onDownloadClick = e=> {     
        this.setState({isFetching: true});

        fetch(`https://youtube-search-and-download.p.rapidapi.com/video?id=${this.state.videoId}`, options)
        .then((response)=> response.json())
        .then(json=> {
            console.log(json);
            this.setState({videoDetails: json.videoDetails, streamingData: json.streamingData, isFetching: false, bGo: true})

         })
    }

    render() {
        console.log("render ", this.state)
        const {url, videoId, validUrl, videoDetails, isFetching, bGo} = this.state;
        return (
        <div>
            <Intro/>
            <div>
                <div class="ui action  input">
                    <input type="text" placeholder="https://www.youtube.com/watch?v=dyFTBtPSzaI" onChange={this.onInputChange} value={url} />
                    <button class="ui green button" onClick={this.onDownloadClick}>Download</button>
                </div>
            </div>
            {
                isFetching && <Loader />
            }
            {
                //loading...
                !isFetching && videoId.length === 0
                &&
                <div><p> Type the url of your favorites Video </p></div>
            }
            {
                //no result found
                !isFetching && videoId.length !== 0 && !videoDetails
                &&
                <p> No match found! </p>
            }
            {
                !isFetching && validUrl && videoId.length !== 0 && bGo
                &&
                <Video details={videoDetails}/>
            }
            </div>
            
        );
    }
}

export default SearchVideo;