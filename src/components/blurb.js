import React from 'react';

const Blurb = ({ }) => {
    return(
        <div class={"blurb " + this.props.class}>
            <div class="blurbImageContainer">
                {this.props.noImg ? ' ' : <img alt="something pretty" src={this.props.blurbImgUrl}/>}
            </div>
            <div class="blurbContentContainer">
                <h3>title</h3>
                <p>{this.props.blurbText}</p>
            </div>
        </div>
    )
}
export default Blurb;