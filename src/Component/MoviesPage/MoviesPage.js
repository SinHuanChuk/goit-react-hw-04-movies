import { Component } from 'react';
import {fetchMoviesByQuery} from '../../Services/MovieApi';
import SearchBar from '../SearchBar/SearchBar';
import queryString from 'query-string'
import { Link } from 'react-router-dom';

export default class MoviesPage extends Component {

    state = {
        movies: [],
        error: null,
        loading: false
    }
    
    // фунция 'рефакторинга' кода обычный запрос на апи с последующем отловом ошибок

    getMovies = (value) => {
        return fetchMoviesByQuery(value)
        .then(res => this.setState({movies: res.data.results}))
        .catch(error => this.setState({error}))
        .finally(() => this.setState({loading: false}))
    }

    // если 'query' есть то делать запрос

    componentDidMount() {
        const {query} = queryString.parse(this.props.location.search)

        if (query) {
            this.getMovies(query)
        }
    }

    // одна из самых ненавистых штук didUpdate бесконечные проверки чтобы не создавался бесконечный цикл (тавтология) если предыдущие значение отлично от нынешнего(nextQuery) делать запрос по (nextQuery)

    componentDidUpdate(prevProps, prevState) {
        const {query: nextQuery} = queryString.parse(this.props.location.search)
        const {query: prevQuery} = queryString.parse(prevProps.location.search)

        if (prevQuery !== nextQuery) {
            this.getMovies(nextQuery)
        }
    }

    // пуш в историю в первую очередь (value = название фильма)

    onSubmit = (value) => {
        this.props.history.push({
            ...this.props.location,
            search: `query=${value}`
        })
    }

    render() {
        const {loading, error, movies} = this.state
        return(
           <div>
                <SearchBar onSubmit = {this.onSubmit}/>
               <ul>
                {loading && <h2>... Loading</h2>}
                {error && <h2>{error.message}</h2>}
                {movies.length > 0 && (
                    <ul>
                        {movies.map(el => (
                            <Link to = {`/MoviesPage/${el.id}`}><li>{el.title}</li></Link>
                        ))}
                    </ul>
                )}
            </ul>
           </div>
        )
    }
}