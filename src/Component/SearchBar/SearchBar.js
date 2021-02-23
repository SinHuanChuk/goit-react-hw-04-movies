import { Component } from "react";

export default class SearchBar extends Component {
    state = {
        query: ''
    }

    onChange = ({target}) => {
        this.setState({
            query: target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.props.onSubmit(this.state.query)
        this.setState({
            query: ''
        })
    }

    render() {
        return(
            <div>
                <form onSubmit = {this.onSubmit}>
                    <input type = 'search' onChange = {this.onChange} value = {this.state.query}/>
                    <button type = 'submit'>click me</button>
                </form>
            </div>
        )
    }
}