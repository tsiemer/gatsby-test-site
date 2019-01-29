import React from 'react'



class Masonry extends React.Component {
  constructor(props){
    super(props);

    this.imageOne = {
      backgroundImage:`url(${this.props.imgUrlOne})`,
      backgroundRepeat: 'no-repeat',
      border: ' solid white 2px'
  }
  
  }
  render (props){
    return (
      <div class={'masonry-container' + this.props.class}>
        <div class="image-container-one" style={this.imageOne}></div>
        <div class="image-container-two"> </div>
        <div class="image-container-three">
            
        </div>
      </div>
    )
  }
}

export default Masonry;
