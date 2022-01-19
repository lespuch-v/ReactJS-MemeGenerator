import React from "react"

class FormComponent extends React.Component{
    constructor(){
        super()
        this.state={
            topText: "",
            bottomText: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

render(){
    return(
    <div>
        <form>
            <input 
                type="text" 
                placeholder="top text.." 
                name="topText"
                onChange={this.handleChange}
            />
            <h2 className="topTextStyle">{this.state.topText}</h2>
            <input 
                type="text" 
                placeholder="bottom text.." 
                name="bottomText"
                onChange={this.handleChange}
            />
            <h2 className="bottomTextStyle">{this.state.bottomText}</h2>
        </form>
    </div>)
}
}


export default FormComponent