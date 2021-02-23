import React, { Component } from 'react'
import {fetchTrendingMovies} from '../../Services/MovieApi';

export default class HomePage extends Component {
    state = {
        movies: [],
        loading: false,
        error: null
    }

    // запрос на api для получения данных error - ошибки loadibn - обычная проверка для пред-лоадера

    componentDidMount() {
        fetchTrendingMovies().then((res) => this.setState({
            movies: res.data.results
        }))
        .catch((error) => this.setState({error}))
        .finally(() => this.setState({loading: false}))
    }

    render() {
        const {movies, loading, error} = this.state

        return(
        <div>
            <h1>Trending Films</h1>
            <ul>
                {loading && <h2>... Loading</h2>}
                {error && <h2>{error.message}</h2>}
                {movies.length > 0 && (
                    <ul>
                        {movies.map(el => (
                            <li>{el.title}</li>
                        ))}
                    </ul>
                )}
            </ul>
        </div>)
    }
}