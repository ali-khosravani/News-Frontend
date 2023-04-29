import React from "react";
import axios from "axios";
import './FavoritesNews.css';

export default class FavoritesNews extends React.Component {
    state = {
        favorites: []
    }

    componentDidMount() {
        axios.get('http://localhost:8085/Favorites')
            .then(res => {
                const favorites = res.data;
                this.setState({ favorites })
            })
    }

    render() {
        return (
            <>
                <div className="selection_header d-flex align-items-center">
                    <h5>برگزیده‌ها</h5>
                    
                    </div>
                <ul className="selection_ul">
                    {
                        this.state.favorites
                            .map(item =>
                                <li key={item.id}>{item.title}</li>
                            )
                    }
                </ul>
            </>
        )
    }
}