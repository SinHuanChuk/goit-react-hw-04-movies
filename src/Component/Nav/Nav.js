import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Nav extends Component {

    render() {
        return(
            <ul>
                <Link to = '/'><li>Home page</li></Link>
                <Link to = '/MoviesPage'><li>Movies Page</li></Link>
            </ul>
        )
    }
}