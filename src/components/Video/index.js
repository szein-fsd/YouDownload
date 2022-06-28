import React, { Component } from "react";


const Video = ({details}) =>(

    <div class="ui items">
        <div class="item">
            <div class="image">
                <img src={details.thumbnail.thumbnails[0].url}/>
            </div>
            <div class="content">
                <div class="header">{details.title}</div>
                <div class="meta">{details.auther}</div>
                <div class="description">{details.shortDescription}</div>
                <div class="extra">Extra</div>
            </div>
        </div>
    </div>
);

export default Video;