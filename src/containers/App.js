import React, { Component } from 'react';
import Table from '../components/Table/Table';
import './App.css';
import 'normalize.css';
import data from '.././data/data.json';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: data,
        }
    }

    render () {
        const wishlist = [
            {
                "id": 8,
                "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR1,0,182,268_AL_.jpg",
                "title": "Pulp Fiction", 
                "releaseDate": "21 October 1994",
                "genre": "crime, drama",
                "productionCompany": "Miramax",
                "rating": "5.0",
                "url": "https://www.imdb.com/title/tt0110912/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=CPQAKQDJYY581ZS1438N&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_8"
            },
            {
                "id": 9,
                "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BOTQ5NDI3MTI4MF5BMl5BanBnXkFtZTgwNDQ4ODE5MDE@._V1_UX182_CR0,0,182,268_AL_.jpg",
                "title": "The Good, the Bad and the Ugly", 
                "releaseDate": "8 September 1968",
                "genre": "western",
                "productionCompany": "Produzioni Europee Associate",
                "rating": "3.9",
                "url": "https://www.imdb.com/title/tt0060196/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=CPQAKQDJYY581ZS1438N&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_9"
            },
            {
                "id": 10,
                "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BMjJmYTNkNmItYjYyZC00MGUxLWJhNWMtZDY4Nzc1MDAwMzU5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
                "title": "Fight Club", 
                "releaseDate": "12 November 1999",
                "genre": "drama",
                "productionCompany": "Fox 2000 Pictures",
                "rating": "2.0",
                "url": "https://www.imdb.com/title/tt0137523/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=CPQAKQDJYY581ZS1438N&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_10" 
            }
        ]

        return ( 
            <div className="App">
                <Table 
                    data={this.state.data}
                    wishlist={wishlist}
                 />
            </div>
        )
    }
}

export default App;
