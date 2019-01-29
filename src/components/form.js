import React from 'react';



export default class Form extends React.Component {
    constructor(props){
        super(props);
    
        this.state = {
          title : '',
          description : '',
          quote : '',
          content : '',
          filename : ''
        }
    }
    handleInputChange = event => {
        const target = event.target
        const value = target.value
        const name = target.name
    
        this.setState({
          [name]: value,
        })
    }
    
    handleSubmit = event => {
    event.preventDefault()
    alert(`Thank you for your submission!`)
    }

    render(){
        return(
            <div>
                {this.props.children}
            </div>
        )
    }

}
