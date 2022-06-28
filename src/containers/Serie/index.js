import React, { Component } from 'react';
import Loader from '../../components/Loader';

class Serie extends Component {

    state = {
        show: "",
        img: ""
    }

    noImage() {
        return (
                { __html: '<img src="https://img.icons8.com/plasticine/100/000000/no-image.png"/>'}
            )
    }

    componentDidMount() {

        const {id} = this.props.match.params;
        
        fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
            .then((response)=> response.json())
                .then(json=> this.setState({show: json}) )
        
    }

    getSummary() {
        return {__html: this.state.show.summary}
    }

    render() {  
        const {show} = this.state;
        return (            
            <div>
            <p>{show.name} </p>
                {   
                    show.image === null && <div dangerouslySetInnerHTML= {this.noImage()} />
                }
                {                 
                    show.image !== undefined && show.image !== null && <img alt={show.name} src={ show.image.medium} />
                }
                <p>
                    Genres: { show.genres !== undefined && show.genres.join(',')}
                </p> 
                <p> Language: {show.language}</p>
                Summary:  <div dangerouslySetInnerHTML={this.getSummary()}></div>
                   
            </div>
        )
    }
}

export default Serie;