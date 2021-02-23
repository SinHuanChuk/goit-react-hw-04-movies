import { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ItemNav extends Component {

    render() {
        const {url, id} = this.props

        return(
            <uL>
                <Link to = {{
                    pathname: `${url}/Reviews`,
                    state: {from: url, id: id}
                }}><li>Reviews</li></Link>
                <Link to = {{
                    pathname: `${url}/Cast`,
                    state: {from: url, id: id}
                }}><li>Cast</li></Link>
            </uL>
        )
    }
    
}