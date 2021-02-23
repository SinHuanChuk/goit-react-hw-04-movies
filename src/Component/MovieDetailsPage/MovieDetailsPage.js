import React, { Component } from 'react'
import {fetchMovieDetails} from '../../Services/MovieApi'
import { Route, Switch } from 'react-router-dom';
import ItemNav from '../../Pages/ItemNav'
import { lazy } from 'react'
import PropTypes from 'prop-types';

const imgUrl = 'https://image.tmdb.org/t/p/original/'

export default class MovieDetailsPage extends Component {

  state = {
    items: {},
    url: '',
    id: ''
  }
  
  // запрос на api для получения инфы о ФИЛЬМЕ

  componentDidMount() {
    const id = this.props.match.params.movieId

    fetchMovieDetails(id)
    .then(res => this.setState({items: res.data, url: this.props.match.url, id: id}))
  }

  // возвращение на предыдущию страницу

  goPrevPage = () => { 
    this.props.history.goBack()
  }

  render() {
    const {items, url, id} = this.state

    return(
      <div>
        <li>
          <button onClick = {this.goPrevPage}>предыдущая страница</button>
          <br/>
          <img src = {`${imgUrl}${items.poster_path}`} width = '300px'/>
          <h1>title: {items.original_title}</h1>
          <ItemNav url = {url} id = {id}/>
          <hr/>
          <Switch>
            <Route path = {`${url}/Reviews`} component = {lazy(() => import('../Reviews/Reviews'))}/>
            <Route path = {`${url}/Cast`} component = {lazy(() => import('../Cast/Cast'))}/>
          </Switch>
        </li>
      </div>
    )
  }
}