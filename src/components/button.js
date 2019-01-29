import React from 'react';

class Button extends React.Component{
    render(){
        return(
            <a class={"button " + this.props.class} href={this.props.href}>
               {this.props.children}
            </a>
        )
    }
}

export default Button;