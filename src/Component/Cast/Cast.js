import { Component } from "react"
import {fetchCastDetails} from '../../Services/MovieApi'

const imgUrl = 'https://image.tmdb.org/t/p/original/'

export default class Cast extends Component {

  state = {
    reviews: []
  }

  componentDidMount() {
    const {id} = this.props.location.state
    fetchCastDetails(id).then((res) => this.setState({reviews: res.data.cast}))
  }

  render() {
    const {reviews} = this.state

    return (
      <div>
        <h1>Cast</h1>
        <ul>
          {reviews.map(value => (
            <li key = {value.id}>
              <img src = {`${imgUrl}${value.profile_path}`} width = '300px'/>
              <br/>
              <span>actor: {value.original_name}</span>
              <br/>
              <span>character: {value.character}</span>
              <br/>
            </li>
          ))}
        </ul>
      </div>
    )
  }

}
