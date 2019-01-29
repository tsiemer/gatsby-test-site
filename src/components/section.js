import React from 'react';

class Section extends React.Component{


    render(){
        return(
            <div class={"section " + this.props.class} id={this.props.id}>
                {this.props.children}
            </div>
        )
    }
}

export default Section;