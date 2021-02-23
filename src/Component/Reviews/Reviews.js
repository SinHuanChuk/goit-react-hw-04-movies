import { Component } from 'react';
import {fetchReviewsDetails} from '../../Services/MovieApi'

export default class Reviews extends Component {

  state = {
    reviews: []
  }

  componentDidMount() {
    const {id} = this.props.location.state
    fetchReviewsDetails(id).then((res) => this.setState({reviews: res.data.results}))
  }

  render() {
    return(
      <div>
       {this.state.reviews.map(res => (
         <ul>
           <li><span>{res.author}</span></li>
           <li><span>{res.content}</span></li>
         </ul>
       ))}
      </div>
    )
  }
}